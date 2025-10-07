// backend/server.js
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow requests from any origin
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Multer setup for file uploads (resume)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use Gmail App Password if 2FA enabled
  },
});

// ------------------ Contact Form Endpoint ------------------
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All required fields are mandatory" });
    }

    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: `📩 New Contact Message: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${message}</p>
        <hr/>
        <p>📅 Received on: ${new Date().toLocaleString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending contact message:", error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

// ------------------ Job Application Endpoint ------------------
app.post("/api/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, experience, coverLetter, jobTitle } = req.body;
    const resumeFile = req.file;

    if (!name || !email || !phone || !jobTitle) {
      return res
        .status(400)
        .json({ success: false, error: "Missing required fields" });
    }

    const mailOptions = {
      from: `"Job Application" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: `New Application for ${jobTitle}`,
      html: `
        <p>A new job application has been submitted for <strong>${jobTitle}</strong>.</p>
        <h3>Candidate Details</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Experience:</strong> ${experience || "Not specified"}</li>
          <li><strong>Submitted:</strong> ${new Date().toLocaleString()}</li>
        </ul>
        <h3>Cover Letter</h3>
        <p>${coverLetter || "N/A"}</p>
      `,
      attachments: resumeFile
        ? [
            {
              filename: resumeFile.originalname,
              content: resumeFile.buffer,
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Application sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending job application:", error);
    res.status(500).json({ success: false, error: "Failed to send application" });
  }
});

// ------------------ Start Server ------------------
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});

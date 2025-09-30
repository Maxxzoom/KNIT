const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Multer setup (store files in memory, not disk)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // or custom SMTP
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use App Password (not raw Gmail password)
  },
});

// API route for job application
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
        <p style="font-size:16px;">Dear HR Team,</p>
        <p style="font-size:15px;">
          A new job application has been submitted for the position of <strong>${jobTitle}</strong>.
        </p>

        <h3 style="margin-bottom:6px;">👤 Candidate Details</h3>
        <ul style="font-size:14px; line-height:1.6; padding-left:15px;">
          <li><strong>Full Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Experience:</strong> ${experience || "Not specified"}</li>
          <li><strong>Submitted At:</strong> ${new Date().toLocaleString()}</li>
        </ul>

        <h3 style="margin-bottom:6px;">📝 Cover Letter</h3>
        <p style="font-size:14px; line-height:1.6; white-space:pre-line;">
          ${coverLetter || "N/A"}
        </p>
      `,
      attachments: resumeFile
        ? [
            {
              filename: resumeFile.originalname,
              content: resumeFile.buffer, // use buffer (not path)
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Application sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to send application" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    console.log("=== NEW CONTACT FORM SUBMISSION ===")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Phone:", phone || "Not provided")
    console.log("Subject:", subject)
    console.log("Message:", message)
    console.log("Submitted on:", new Date().toLocaleString())
    console.log("=== END CONTACT SUBMISSION ===")

    await new Promise((resolve) => setTimeout(resolve, 800)) // Simulate processing time

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! We'll get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to send message. Please try again or contact us directly at info@knitsolution.com or +91 7775868909.",
      },
      { status: 500 },
    )
  }
}

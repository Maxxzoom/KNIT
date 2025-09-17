import { type NextRequest, NextResponse } from "next/server"
import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const jobTitle = formData.get("jobTitle") as string
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const experience = formData.get("experience") as string
    const coverLetter = formData.get("coverLetter") as string
    const resume = formData.get("resume") as File

    // Create application data object
    const applicationData = {
      id: Date.now().toString(),
      jobTitle,
      name,
      email,
      phone,
      experience: experience || "Not specified",
      coverLetter: coverLetter || "No cover letter provided",
      resumeName: resume?.name || "No resume uploaded",
      appliedOn: new Date().toISOString(),
      status: "pending",
    }

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), "data")
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }

    // Read existing applications or create empty array
    const applicationsFile = path.join(dataDir, "applications.json")
    let applications = []

    try {
      if (existsSync(applicationsFile)) {
        const fileContent = await readFile(applicationsFile, "utf-8")
        applications = JSON.parse(fileContent)
      }
    } catch (error) {
      console.log("Creating new applications file")
      applications = []
    }

    // Add new application
    applications.push(applicationData)

    // Save updated applications
    await writeFile(applicationsFile, JSON.stringify(applications, null, 2))

    console.log("=== NEW JOB APPLICATION SAVED ===")
    console.log("Application ID:", applicationData.id)
    console.log("Position Applied For:", jobTitle)
    console.log("Applicant Name:", name)
    console.log("Email:", email)
    console.log("=== APPLICATION STORED SUCCESSFULLY ===")

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      applicationId: applicationData.id,
      message:
        "Application submitted successfully! We have received your application and will contact you within 24-48 hours if your profile matches our requirements.",
    })
  } catch (error) {
    console.error("Error processing job application:", error)
    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to submit application. Please try again or contact us directly at hr@knitsolution.com or +91 7775868909.",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    const applicationsFile = path.join(process.cwd(), "data", "applications.json")

    if (!existsSync(applicationsFile)) {
      return NextResponse.json({ applications: [] })
    }

    const fileContent = await readFile(applicationsFile, "utf-8")
    const applications = JSON.parse(fileContent)

    return NextResponse.json({ applications })
  } catch (error) {
    console.error("Error reading applications:", error)
    return NextResponse.json({ error: "Failed to retrieve applications" }, { status: 500 })
  }
}

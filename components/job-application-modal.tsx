"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Upload, X, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface JobApplicationModalProps {
  jobTitle: string;
  children: React.ReactNode;
}

export function JobApplicationModal({
  jobTitle,
  children,
}: JobApplicationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
  });
  const [resume, setResume] = useState<File | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      setResume(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Load EmailJS dynamically
      const emailjs = await import("@emailjs/browser");

      // Initialize EmailJS with your public key
      emailjs.default.init("btU7FXWcXJfbc2SVh");

      // Convert file to base64 if resume exists
      let resumeData = "";
      if (resume) {
        const reader = new FileReader();
        resumeData = await new Promise((resolve) => {
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(resume);
        });
      }

      // const templateParams = {
      //   to_email: "hr@knitsolution.com", // Add recipient email
      //   job_title: jobTitle,
      //   from_name: formData.name,
      //   from_email: formData.email,
      //   phone: formData.phone,
      //   experience: formData.experience || "Not specified",
      //   message: formData.coverLetter || "No cover letter provided",
      //   resume_name: resume ? resume.name : "No resume uploaded",
      //   submission_date: new Date().toLocaleDateString(),
      //   submission_time: new Date().toLocaleTimeString(),
      // };
      const templateParams = {
        jobTitle: jobTitle,
        from_name: formData.name, // matches {{from_name}}
        from_email: formData.email, // matches {{from_email}}
        phone: formData.phone,
        experience: formData.experience || "Not specified",
        coverLetter: formData.coverLetter || "No cover letter provided",
        resume_name: resume ? resume.name : "No resume uploaded",
        submission_date: new Date().toLocaleDateString(),
        submission_time: new Date().toLocaleTimeString(),
      };

      console.log("[v0] Sending email with params:", templateParams);

      await emailjs.default.send(
        "service_jpbjrmb",
        "template_qj80tmj",
        templateParams
      );

      console.log("[v0] Email sent successfully");
      setIsSubmitted(true);
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
      });
    } catch (error) {
      console.error("[v0] EmailJS Error:", error);
      toast({
        title: "Error",
        description: `Failed to submit application: ${
          error instanceof Error ? error.message : "Unknown error"
        }. Please check your EmailJS template configuration.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      coverLetter: "",
    });
    setResume(null);
    setIsSubmitted(false);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
          <DialogDescription>
            Fill out the form below to apply for this position. We'll review
            your application and contact you soon.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Application Submitted Successfully!
            </h3>
            <p className="text-muted-foreground mb-4">
              Thank you for applying to {jobTitle}. Our team will review your
              application and contact you within 24-48 hours.
            </p>
            <Button onClick={resetForm}>Apply for Another Position</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <Input
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="e.g., 2 years, Fresher"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="resume">Upload Resume *</Label>
              <div className="mt-2">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="resume"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-4 text-gray-500" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX (MAX. 5MB)
                      </p>
                    </div>
                    <input
                      id="resume"
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                </div>
                {resume && (
                  <div className="mt-2 flex items-center justify-between bg-gray-100 p-2 rounded">
                    <span className="text-sm text-gray-700">{resume.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setResume(null)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="coverLetter">
                Cover Letter / Why are you interested?
              </Label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Tell us why you're interested in this position and what makes you a good fit..."
                rows={4}
              />
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

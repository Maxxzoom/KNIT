import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Building, MapPin } from "lucide-react"

export default function PostJobPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Post a Job</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the perfect candidate for your company. Post your job opening and connect with skilled professionals.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                  Job Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-8">
                  {/* Company Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Building className="h-5 w-5 text-blue-600" />
                      Company Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                        <Input placeholder="Enter company name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Company Website</label>
                        <Input placeholder="https://www.company.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Contact Person *</label>
                        <Input placeholder="Enter contact person name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Contact Email *</label>
                        <Input type="email" placeholder="hr@company.com" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                        <Input type="tel" placeholder="+91 9876543210" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Company Size</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-500">201-500 employees</SelectItem>
                            <SelectItem value="500+">500+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Job Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                      Job Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Job Title *</label>
                        <Input placeholder="e.g. Senior Java Developer" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Job Category *</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="salesforce">Salesforce Development</SelectItem>
                            <SelectItem value="java">Java Development</SelectItem>
                            <SelectItem value="python">Python Development</SelectItem>
                            <SelectItem value="web">Web Development</SelectItem>
                            <SelectItem value="mobile">Mobile App Development</SelectItem>
                            <SelectItem value="testing">Software Testing</SelectItem>
                            <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Employment Type *</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select employment type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Full Time</SelectItem>
                            <SelectItem value="part-time">Part Time</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                            <SelectItem value="internship">Internship</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Experience Level *</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                            <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                            <SelectItem value="senior">Senior Level (5-10 years)</SelectItem>
                            <SelectItem value="lead">Lead Level (10+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Location & Salary */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      Location & Compensation
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Job Location *</label>
                        <Input placeholder="e.g. Pune, Maharashtra" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Work Mode *</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select work mode" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="onsite">On-site</SelectItem>
                            <SelectItem value="remote">Remote</SelectItem>
                            <SelectItem value="hybrid">Hybrid</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Salary Range</label>
                        <div className="flex gap-2">
                          <Input placeholder="Min (₹)" />
                          <Input placeholder="Max (₹)" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Currency</label>
                        <Select defaultValue="inr">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inr">INR (₹)</SelectItem>
                            <SelectItem value="usd">USD ($)</SelectItem>
                            <SelectItem value="eur">EUR (€)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Job Description */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground">Job Description</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Job Summary *</label>
                        <Textarea
                          placeholder="Brief overview of the role and what the candidate will be doing..."
                          rows={4}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Key Responsibilities *</label>
                        <Textarea
                          placeholder="• Develop and maintain web applications&#10;• Collaborate with cross-functional teams&#10;• Write clean, maintainable code..."
                          rows={6}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Required Skills & Qualifications *
                        </label>
                        <Textarea
                          placeholder="• Bachelor's degree in Computer Science or related field&#10;• 3+ years of experience in Java development&#10;• Strong knowledge of Spring Framework..."
                          rows={6}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Preferred Qualifications
                        </label>
                        <Textarea
                          placeholder="• Experience with cloud platforms (AWS, Azure)&#10;• Knowledge of microservices architecture&#10;• Previous startup experience..."
                          rows={4}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Benefits & Perks</label>
                        <Textarea
                          placeholder="• Health insurance&#10;• Flexible working hours&#10;• Professional development opportunities..."
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Application Details */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground">Application Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Application Deadline</label>
                        <Input type="date" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Number of Positions</label>
                        <Input type="number" placeholder="1" min="1" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Additional Instructions for Applicants
                      </label>
                      <Textarea placeholder="Please include a portfolio link with your application..." rows={3} />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-6">
                    <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                      Post Job
                    </Button>
                    <Button type="button" variant="outline" size="lg">
                      Save as Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

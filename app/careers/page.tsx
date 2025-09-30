"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  DollarSign,
  Building,
  Star,
  Filter,
  Search,
  X,
} from "lucide-react";
import { JobApplicationModal } from "@/components/job-application-modal";
import { useState, useMemo } from "react";

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedJobType, setSelectedJobType] = useState("All");

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Salesforce Developer",
      department: "Engineering",
      location: "Pune, India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹12-18 LPA",
      description:
        "We are looking for an experienced Salesforce Developer to design and implement customized Salesforce solutions for our clients.",
      requirements: [
        "Salesforce Platform Developer I certification",
        "3+ years Salesforce development experience",
        "Apex, Visualforce, Lightning Web Components",
        "Salesforce integration patterns",
      ],
      postedDate: "2 days ago",
      urgent: true,
      featured: true,
    },
    {
      id: 2,
      title: "Full Stack Java Developer",
      department: "Engineering",
      location: "Bengaluru, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹8-15 LPA",
      description:
        "Join our core product team to build scalable enterprise applications using modern Java technologies.",
      requirements: [
        "Java 8+, Spring Boot",
        "React/Angular experience",
        "Microservices architecture",
        "SQL/NoSQL databases",
      ],
      postedDate: "1 week ago",
      urgent: false,
      featured: true,
    },
    {
      id: 3,
      title: "Python Data Engineer",
      department: "Data Science",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹10-16 LPA",
      description:
        "Design and build data pipelines and ETL processes for our data analytics platform.",
      requirements: [
        "Python, Pandas, PySpark",
        "SQL and data modeling",
        "AWS/Azure data services",
        "ETL pipeline development",
      ],
      postedDate: "3 days ago",
      urgent: true,
      featured: false,
    },
    {
      id: 4,
      title: "Frontend Developer (React)",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "2-5 years",
      salary: "₹7-14 LPA",
      description:
        "Build responsive and performant user interfaces for our enterprise SaaS products.",
      requirements: [
        "React.js, TypeScript",
        "Redux/Context API",
        "CSS-in-JS, Styled Components",
        "Testing with Jest",
      ],
      postedDate: "5 days ago",
      urgent: false,
      featured: false,
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Pune, India",
      type: "Full-time",
      experience: "4-7 years",
      salary: "₹14-20 LPA",
      description:
        "Manage cloud infrastructure and implement CI/CD pipelines for our development teams.",
      requirements: [
        "AWS/Azure certification",
        "Kubernetes, Docker",
        "Terraform/CloudFormation",
        "Jenkins, GitLab CI",
      ],
      postedDate: "1 week ago",
      urgent: false,
      featured: true,
    },
    {
      id: 6,
      title: "Data Scientist",
      department: "Data Science",
      location: "Bengaluru, India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹12-18 LPA",
      description:
        "Develop machine learning models and provide data-driven insights for business decisions.",
      requirements: [
        "Python, R, SQL",
        "Machine learning frameworks",
        "Statistical analysis",
        "Data visualization",
      ],
      postedDate: "2 weeks ago",
      urgent: false,
      featured: false,
    },
    {
      id: 7,
      title: "QA Automation Engineer",
      department: "Quality Assurance",
      location: "Pune, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹6-10 LPA",
      description:
        "Design and implement automated testing frameworks for our software products.",
      requirements: [
        "Selenium, Cypress",
        "TestNG/JUnit",
        "API testing",
        "Performance testing",
      ],
      postedDate: "4 days ago",
      urgent: false,
      featured: false,
    },
    {
      id: 8,
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      experience: "5-8 years",
      salary: "₹18-25 LPA",
      description:
        "Lead product strategy and work with cross-functional teams to deliver customer value.",
      requirements: [
        "Product management experience",
        "Agile methodology",
        "Market research",
        "Data analysis skills",
      ],
      postedDate: "3 days ago",
      urgent: true,
      featured: true,
    },
    {
      id: 9,
      title: "UX/UI Designer",
      department: "Design",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹8-14 LPA",
      description:
        "Create intuitive and beautiful user experiences for our digital products.",
      requirements: [
        "Figma, Sketch",
        "User research",
        "Prototyping",
        "Design systems",
      ],
      postedDate: "1 week ago",
      urgent: false,
      featured: false,
    },
    {
      id: 10,
      title: "Cloud Solutions Architect",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "6-10 years",
      salary: "₹20-30 LPA",
      description:
        "Design and implement cloud-native solutions for enterprise clients.",
      requirements: [
        "AWS/Azure Solutions Architect",
        "Cloud security",
        "System design",
        "Consulting experience",
      ],
      postedDate: "2 days ago",
      urgent: false,
      featured: true,
    },
    {
      id: 11,
      title: "Technical Lead",
      department: "Engineering",
      location: "Pune, India",
      type: "Full-time",
      experience: "7-12 years",
      salary: "₹22-35 LPA",
      description:
        "Lead technical teams and drive architecture decisions for complex projects.",
      requirements: [
        "Team leadership",
        "System architecture",
        "Agile methodologies",
        "Mentoring experience",
      ],
      postedDate: "1 week ago",
      urgent: true,
      featured: true,
    },
    {
      id: 12,
      title: "Business Analyst",
      department: "Business",
      location: "Delhi, India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹9-13 LPA",
      description:
        "Bridge the gap between business needs and technical solutions.",
      requirements: [
        "Requirements gathering",
        "Process modeling",
        "Stakeholder management",
        "Documentation",
      ],
      postedDate: "5 days ago",
      urgent: false,
      featured: false,
    },
  ];

  const departments = [
    "All",
    "Engineering",
    "Data Science",
    "Product",
    "Design",
    "Infrastructure",
    "Quality Assurance",
    "Business",
  ];
  const locations = [
    "All",
    "Pune",
    "Bengaluru",
    "Hyderabad",
    "Mumbai",
    "Delhi",
    "Remote",
  ];
  const jobTypes = ["All", "Full-time", "Part-time", "Contract"];

  // Filter jobs based on search and filters
  const filteredJobs = useMemo(() => {
    return jobOpenings.filter((job) => {
      const matchesSearch =
        searchTerm === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.requirements.some((req) =>
          req.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesDepartment =
        selectedDepartment === "All" || job.department === selectedDepartment;
      const matchesLocation =
        selectedLocation === "All" || job.location.includes(selectedLocation);
      const matchesJobType =
        selectedJobType === "All" || job.type === selectedJobType;

      return (
        matchesSearch && matchesDepartment && matchesLocation && matchesJobType
      );
    });
  }, [searchTerm, selectedDepartment, selectedLocation, selectedJobType]);

  const featuredJobs = useMemo(() => {
    return filteredJobs.filter((job) => job.featured);
  }, [filteredJobs]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDepartment("All");
    setSelectedLocation("All");
    setSelectedJobType("All");
  };

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedDepartment !== "All" ||
    selectedLocation !== "All" ||
    selectedJobType !== "All";

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 py-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your Career With Us
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 px-4">
            Join our team of innovators and problem-solvers. Explore
            opportunities that match your skills and ambitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 sm:px-8"
            >
              View Open Positions
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          <div className="bg-white p-4 md:p-6 rounded-lg text-center shadow-sm">
            <div className="text-xl md:text-2xl font-bold text-blue-600 mb-2">
              {jobOpenings.length}
            </div>
            <div className="text-sm md:text-base text-gray-600">
              Open Positions
            </div>
          </div>
          {/* <div className="bg-white p-4 md:p-6 rounded-lg text-center shadow-sm">
            <div className="text-xl md:text-2xl font-bold text-blue-600 mb-2">
              6
            </div>
            <div className="text-sm md:text-base text-gray-600">Countries</div>
          </div> */}
          <div className="bg-white p-4 md:p-6 rounded-lg text-center shadow-sm">
            <div className="text-xl md:text-2xl font-bold text-blue-600 mb-2">
              200+
            </div>
            <div className="text-sm md:text-base text-gray-600">
              Team Members
            </div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg text-center shadow-sm">
            <div className="text-xl md:text-2xl font-bold text-blue-600 mb-2">
              15+
            </div>
            <div className="text-sm md:text-base text-gray-600">
              Technologies
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs by title, skill, or keyword..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 w-full lg:w-auto">
              <select
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>

              <select
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>

              <select
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                value={selectedJobType}
                onChange={(e) => setSelectedJobType(e.target.value)}
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {hasActiveFilters && (
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  className="text-gray-600 border-gray-300 hover:bg-gray-50 text-sm md:text-base"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Active filters indicator */}
          {hasActiveFilters && (
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <Filter className="w-4 h-4" />
              <span>
                Showing {filteredJobs.length} of {jobOpenings.length} jobs
              </span>
              {searchTerm && (
                <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                  Search: {searchTerm}
                </Badge>
              )}
              {selectedDepartment !== "All" && (
                <Badge
                  variant="secondary"
                  className="bg-green-50 text-green-700"
                >
                  Department: {selectedDepartment}
                </Badge>
              )}
              {selectedLocation !== "All" && (
                <Badge
                  variant="secondary"
                  className="bg-purple-50 text-purple-700"
                >
                  Location: {selectedLocation}
                </Badge>
              )}
              {selectedJobType !== "All" && (
                <Badge
                  variant="secondary"
                  className="bg-orange-50 text-orange-700"
                >
                  Type: {selectedJobType}
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Featured Jobs */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Jobs{" "}
              {featuredJobs.length > 0 && `(${featuredJobs.length})`}
            </h2>
            <Button
              variant="outline"
              onClick={() => {
                const element = document.getElementById("positions");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-blue-600 border-blue-600 w-full sm:w-auto"
            >
              View All Jobs
            </Button>
          </div>

          {featuredJobs.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredJobs.map((job) => (
                <Card
                  key={job.id}
                  className="flex flex-col border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all h-full"
                >
                  <CardHeader className="pb-4 flex-shrink-0">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg md:text-xl text-gray-900 truncate">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="flex items-center mt-1 text-sm">
                          <Building className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="truncate">{job.department}</span>
                        </CardDescription>
                      </div>
                      {job.urgent && (
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100 whitespace-nowrap ml-2 flex-shrink-0">
                          Urgent
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center text-sm text-yellow-600 mb-2">
                      <Star className="w-4 h-4 mr-1 fill-current flex-shrink-0" />
                      <span>Featured</span>
                    </div>

                    <CardDescription className="text-sm md:text-base leading-relaxed line-clamp-3">
                      {job.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-grow">
                    <div className="space-y-2 md:space-y-3 mb-4 flex-grow">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                        <span className="truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <DollarSign className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0" />
                        <span className="font-semibold">{job.salary}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-4 flex-shrink-0">
                      <Badge
                        variant="secondary"
                        className="bg-blue-50 text-blue-700"
                      >
                        {job.type}
                      </Badge>
                      <span className="text-xs md:text-sm text-gray-500 whitespace-nowrap">
                        {job.postedDate}
                      </span>
                    </div>

                    <JobApplicationModal jobTitle={job.title}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 flex-shrink-0">
                        Apply Now
                      </Button>
                    </JobApplicationModal>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-500 text-lg">
                No featured jobs match your current filters.
              </p>
              <Button
                onClick={clearFilters}
                variant="outline"
                className="mt-4 text-blue-600 border-blue-600"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* All Jobs */}
        <div className="mb-12" id="positions">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Open Positions{" "}
            {filteredJobs.length > 0 && `(${filteredJobs.length})`}
          </h2>

          {filteredJobs.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className="flex flex-col hover:shadow-md transition-shadow border border-gray-200 h-full"
                >
                  <CardHeader className="pb-4 flex-shrink-0">
                    <div className="flex justify-between items-start mb-3">
                      <CardTitle className="text-lg text-gray-900 flex-1 min-w-0">
                        {job.title}
                      </CardTitle>
                      {job.urgent && (
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100 ml-2 flex-shrink-0">
                          Urgent
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-1 md:gap-2 text-sm text-gray-600 mb-3">
                      <span className="flex items-center whitespace-nowrap">
                        <Building className="w-4 h-4 mr-1 flex-shrink-0" />
                        {job.department}
                      </span>
                      <span className="hidden md:inline text-gray-400">•</span>
                      <span className="flex items-center whitespace-nowrap">
                        <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                        {job.location}
                      </span>
                      <span className="hidden md:inline text-gray-400">•</span>
                      <span className="whitespace-nowrap">
                        {job.experience}
                      </span>
                    </div>

                    <CardDescription className="text-sm leading-relaxed line-clamp-2">
                      {job.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-grow">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 flex-shrink-0">
                      <div className="flex items-center text-sm font-semibold text-gray-700">
                        <DollarSign className="w-4 h-4 mr-1 flex-shrink-0" />
                        {job.salary}
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap">
                        {job.postedDate}
                      </span>
                    </div>

                    <JobApplicationModal jobTitle={job.title}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 flex-shrink-0">
                        Apply Now
                      </Button>
                    </JobApplicationModal>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-500 text-lg">
                No jobs match your current filters.
              </p>
              <Button
                onClick={clearFilters}
                variant="outline"
                className="mt-4 text-blue-600 border-blue-600"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-6 md:p-12 text-center border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Can't Find the Perfect Role?
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            We're always looking for talented people. Send us your resume and
            we'll contact you when a position matches your profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8"
            >
              Submit Your Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 md:px-8"
            >
              Contact Recruiter
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

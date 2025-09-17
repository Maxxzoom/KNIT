import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  services: [
    "Salesforce Development",
    "Web Development Services",
    "Mobile App Development",
    "Project Outsourcing",
    "Digital Marketing Services",
    "Software Testing",
  ],
  company: ["About Us", "Training Programs", "Success Stories", "Testimonials", "Careers", "Contact"],
  resources: ["Job Portal", "Career Guide", "Technology Support", "Privacy Policy", "Terms of Service", "FAQ"],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "vikram@knitsolutions.in",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 7775868909",
    description: "Mon-Sat from 9am to 7pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details:
      "160/1 Navin Gaythan Shivne, Opp. Vandevi Mandir, Near Chandni Hotel, Karve Nagar (Kothrud), Pune – 411038",
    description: "Come say hello at our office",
  },
]

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KN%20IT%20logo.jpg-mAju6ir8Th7Tabm0DckvbMaBJuE1DO.jpeg"
                alt="KN IT Solution Logo"
                className="w-12 h-12 rounded-lg object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">KN IT Solution</h3>
                <p className="text-sm text-gray-400">Training & Placement / Consultant</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading IT training and placement agency with 100% placement guarantee. We specialize in Salesforce, Java,
              Python development and provide comprehensive technology solutions.
            </p>

            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <contact.icon className="h-5 w-5 text-blue-400" />
                  <div>
                    <h4 className="text-sm font-semibold">{contact.title}</h4>
                    <span className="text-sm">{contact.details}</span>
                    <p className="text-sm text-gray-400 mt-1">{contact.description}</p>
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold">Director:</span> Vikram G. Rathod
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/careers" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Job Portal
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Career Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Technology Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2024 KN IT Solution. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, Database, Cloud, Shield, Headphones, Code2, Palette } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    features: ["Native Performance", "Cross-Platform", "App Store Ready"],
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Robust database design, optimization, and management for your applications.",
    features: ["Data Modeling", "Performance Tuning", "Backup Solutions"],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud migration, deployment, and management services for scalable solutions.",
    features: ["AWS/Azure/GCP", "Auto Scaling", "Cost Optimization"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security audits and implementation of security best practices.",
    features: ["Security Audits", "Penetration Testing", "Compliance"],
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom software solutions tailored to your specific business requirements.",
    features: ["Custom Solutions", "API Integration", "Legacy Modernization"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates engaging and intuitive digital experiences.",
    features: ["User Research", "Prototyping", "Design Systems"],
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "24/7 technical support and maintenance for all your IT infrastructure needs.",
    features: ["24/7 Support", "Monitoring", "Maintenance"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive IT solutions to help your business succeed in the digital landscape. From web
            development to cybersecurity, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center leading-relaxed">{service.description}</CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

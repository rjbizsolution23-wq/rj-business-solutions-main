import ContactForm from '@/components/contact-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: 'For project inquiries and detailed discussions',
      contact: 'rjbizsolution23@gmail.com',
      action: 'mailto:rjbizsolution23@gmail.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      description: 'Professional networking and business connections',
      contact: 'Rick Jefferson',
      action: 'https://linkedin.com/in/rick-jefferson-314998235'
    },
    {
      icon: '🎥',
      title: 'TikTok',
      description: 'Tech tips, tutorials, and behind-the-scenes content',
      contact: '@rick_jeff_solution',
      action: 'https://www.tiktok.com/@rick_jeff_solution'
    },
    {
      icon: '🌐',
      title: 'Website',
      description: 'Portfolio, blog posts, and company information',
      contact: 'rickjeffersonsolutions.com',
      action: 'https://rickjeffersonsolutions.com'
    }
  ]

  const faqItems = [
    {
      question: 'What types of projects do you handle?',
      answer: 'I specialize in enterprise-grade AI/ML solutions, data engineering pipelines, full-stack web applications, cloud architecture, and cybersecurity implementations. From startup MVPs to Fortune 500 digital transformations.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope: Simple applications (2-4 weeks), Enterprise platforms (2-6 months), Complex AI/ML systems (3-8 months). I provide detailed timelines after requirements analysis.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, I offer comprehensive support packages including monitoring, maintenance, feature updates, and technical support. All projects include 30 days of complimentary support post-launch.'
    },
    {
      question: 'How do you ensure project security?',
      answer: 'Security is built into every project from day one. I implement zero-trust architecture, automated security scanning, compliance frameworks (SOC2, GDPR), and follow industry best practices for data protection.'
    },
    {
      question: 'Can you work with existing teams?',
      answer: 'Absolutely. I integrate seamlessly with existing development teams, provide technical leadership, conduct code reviews, and offer training to ensure knowledge transfer and team growth.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'I offer flexible pricing: fixed-price for well-defined projects, hourly for consulting/support, and retainer agreements for ongoing partnerships. All pricing is transparent with detailed cost breakdowns.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's discuss your project 
            and create a solution that drives real results.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Other Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : undefined}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-xs"
                    >
                      {method.contact}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">RJ Business Solutions</CardTitle>
                <CardDescription>Enterprise Technology Solutions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Business Address</h3>
                  <p className="text-muted-foreground">
                    1342 NM 333<br />
                    Tijeras, New Mexico 87059<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 6:00 PM (MST)<br />
                    Saturday: 10:00 AM - 4:00 PM (MST)<br />
                    Sunday: By appointment only
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-muted-foreground">
                    • Email inquiries: Within 24 hours<br />
                    • Project proposals: 2-3 business days<br />
                    • Emergency support: Within 4 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Service Areas</CardTitle>
                <CardDescription>Global reach, local expertise</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Primary Markets</h3>
                  <p className="text-muted-foreground">
                    • United States (All states)<br />
                    • Canada<br />
                    • United Kingdom<br />
                    • Australia<br />
                    • European Union
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Industries Served</h3>
                  <p className="text-muted-foreground">
                    • Financial Services & FinTech<br />
                    • Healthcare & Life Sciences<br />
                    • E-commerce & Retail<br />
                    • Manufacturing & Industrial<br />
                    • Technology & Startups
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Remote Collaboration</h3>
                  <p className="text-muted-foreground">
                    Full remote capabilities with<br />
                    secure communication tools,<br />
                    project management systems,<br />
                    and regular progress updates.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="text-2xl text-red-600 dark:text-red-400 flex items-center">
                🚨 Emergency Technical Support
              </CardTitle>
              <CardDescription>
                For existing clients experiencing critical production issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                If you're an existing client experiencing a critical production issue that requires 
                immediate attention, please use the emergency contact methods below:
              </p>
              <div className="space-y-2 mb-6">
                <p>• Email with subject line "EMERGENCY - [Your Company Name]"</p>
                <p>• Include detailed description of the issue and impact</p>
                <p>• Provide contact number for immediate callback</p>
                <p>• Expected response time: Within 4 hours</p>
              </div>
              <Button variant="destructive" asChild>
                <a href="mailto:rjbizsolution23@gmail.com?subject=EMERGENCY%20-%20">
                  Send Emergency Email
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
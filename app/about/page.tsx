import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  const skills = [
    'AGI-Level Prompt Architecture',
    'Data Engineering & ETL/ELT',
    'Full-Stack Development',
    'AI/ML Fine-Tuning',
    'Cloud Architecture (AWS/GCP/Azure)',
    'Cybersecurity Implementation',
    'DevOps & CI/CD',
    'Next.js & React Ecosystem',
    'Python & TypeScript',
    'Docker & Kubernetes',
    'GraphQL & REST APIs',
    'Vector Databases & RAG Systems'
  ]

  const certifications = [
    'AWS Solutions Architect Professional',
    'Google Cloud Professional Data Engineer',
    'Microsoft Azure AI Engineer',
    'CompTIA Security+',
    'Kubernetes Administrator (CKA)',
    'TensorFlow Developer Certificate'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Meet Rick Jefferson
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                AGI-Level Prompt Architect | Data Engineer | Full Stack Developer | AI/ML Fine-Tuning Specialist | 
                Cloud & Cybersecurity Expert
              </p>
              <div className="space-y-4 mb-8">
                <p className="text-lg">
                  With over a decade of experience in enterprise technology solutions, I specialize in 
                  transforming businesses through cutting-edge AI, robust data architectures, and 
                  innovative full-stack applications.
                </p>
                <p className="text-lg">
                  Based in Tijeras, New Mexico, I serve clients globally, delivering enterprise-grade 
                  solutions that drive measurable business outcomes and competitive advantage.
                </p>
              </div>
              <div className="flex space-x-4">
                <Button asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://linkedin.com/in/rick-jefferson-314998235" target="_blank" rel="noopener noreferrer">
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 absolute -inset-4"></div>
                <Image
                  src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg"
                  alt="RJ Business Solutions Logo"
                  width={320}
                  height={320}
                  className="rounded-full border-4 border-white shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🧠 AGI Prompt Engineering</CardTitle>
                <CardDescription>Advanced reasoning systems and LLM optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Chain-of-Thought & ReAct methodologies</li>
                  <li>• Multi-agent orchestration frameworks</li>
                  <li>• RAG system architecture</li>
                  <li>• Constitutional AI implementation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">📊 Data Engineering</CardTitle>
                <CardDescription>Enterprise-scale data pipelines and architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Real-time ETL/ELT with Apache Spark</li>
                  <li>• Data warehouse optimization</li>
                  <li>• Stream processing with Kafka</li>
                  <li>• 100TB+/day throughput systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🚀 Full-Stack Development</CardTitle>
                <CardDescription>Modern web applications and mobile solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Next.js 14+ App Router mastery</li>
                  <li>• React Server Components</li>
                  <li>• TypeScript & modern patterns</li>
                  <li>• Microservices architecture</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🤖 AI/ML Fine-Tuning</CardTitle>
                <CardDescription>Custom model development and optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Foundation model customization</li>
                  <li>• Computer vision applications</li>
                  <li>• MLOps pipeline automation</li>
                  <li>• Model deployment at scale</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">☁️ Cloud Architecture</CardTitle>
                <CardDescription>Multi-cloud infrastructure and DevOps</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• AWS/GCP/Azure certified solutions</li>
                  <li>• Kubernetes orchestration</li>
                  <li>• Serverless architectures</li>
                  <li>• Infrastructure as Code (Terraform)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🔒 Cybersecurity</CardTitle>
                <CardDescription>Enterprise security and compliance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Zero-trust architecture</li>
                  <li>• SAST/DAST implementation</li>
                  <li>• Compliance frameworks (SOC2, GDPR)</li>
                  <li>• Security automation & monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Technologies & Frameworks</CardTitle>
                <CardDescription>Industry-leading tools and platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Certifications & Credentials</CardTitle>
                <CardDescription>Professional certifications and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Collaborate?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">
                  1342 NM 333<br />
                  Tijeras, New Mexico 87059
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">✉️</div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:rjbizsolution23@gmail.com" 
                  className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  rjbizsolution23@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">🌐</div>
                <h3 className="font-semibold mb-2">Website</h3>
                <a 
                  href="https://rickjeffersonsolutions.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  rickjeffersonsolutions.com
                </a>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg" asChild>
            <Link href="/contact">Start Your Project Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
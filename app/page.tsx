'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Brain, Database, Code, Bot, Shield, Zap, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    icon: Brain,
    title: 'AGI-Level Prompt Architecture',
    description: 'Advanced AI automation and intelligent system design with cutting-edge prompt engineering frameworks.',
    features: ['Chain-of-Thought Implementation', 'Multi-Agent Orchestration', 'Custom LLM Fine-Tuning', 'RAG Systems'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Database,
    title: 'Enterprise Data Engineering',
    description: 'Real-time ETL/ELT pipelines and enterprise analytics solutions with multi-cloud deployment.',
    features: ['Apache Kafka Streaming', 'Airflow Orchestration', 'Snowflake/BigQuery', 'Real-time Analytics'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Production-ready applications with modern frameworks and enterprise-grade architecture.',
    features: ['Next.js 14+ Apps', 'React Ecosystems', 'TypeScript Mastery', 'API Development'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Bot,
    title: 'AI/ML Fine-Tuning',
    description: 'Custom model training and deployment at scale with MLOps automation and optimization.',
    features: ['Model Training', 'MLOps Pipelines', 'Computer Vision', 'NLP Systems'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Shield,
    title: 'Cloud & Cybersecurity',
    description: 'Zero-trust security architecture and multi-cloud infrastructure with enterprise compliance.',
    features: ['AWS/Azure/GCP', 'Zero-Trust Security', 'DevSecOps', 'Compliance Automation'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description: 'Intelligent process automation and workflow optimization for maximum efficiency.',
    features: ['Workflow Automation', 'Integration Solutions', 'Performance Optimization', 'Monitoring & Analytics'],
    color: 'from-yellow-500 to-orange-500'
  }
]

const technologies = [
  'Next.js', 'React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis',
  'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Terraform', 'GitHub Actions', 'Apache Airflow',
  'Apache Kafka', 'Snowflake', 'BigQuery', 'TensorFlow', 'PyTorch', 'Hugging Face', 'OpenAI API'
]

const stats = [
  { label: 'Years of Experience', value: '10+', icon: '🏆' },
  { label: 'Projects Completed', value: '500+', icon: '🚀' },
  { label: 'Client Satisfaction', value: '99%', icon: '⭐' },
  { label: 'Technologies Mastered', value: '50+', icon: '💎' }
]

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg"
                alt="RJ Business Solutions"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold text-xl">RJ Business Solutions</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="#contact">Contact</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="#services">Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-bg hero-pattern overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="container mx-auto px-4 py-20 text-center text-white relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shadow">
              Elite Digital
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Transformation
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              AGI-Level Prompt Architect • Data Engineer • Full Stack Developer
              <br />
              AI/ML Fine-Tuning • Cloud & Cybersecurity Expert
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="#services" className="flex items-center">
                  Explore Services <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="#contact" className="flex items-center">
                  Get In Touch <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Elite Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital transformation solutions powered by cutting-edge technology
              and years of enterprise experience.
            </p>
          </motion.div>

          <div className="expertise-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-600">
              Mastery across the most advanced technologies and frameworks
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business with elite digital solutions?
              Let's discuss your project and create something extraordinary together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Get in touch for your next project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>rjbizsolution23@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>945-308-8003</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>1342 NM 333, Tijeras, New Mexico 87059</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Connect With Me</h4>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://linkedin.com/in/rick-jefferson-314998235" className="flex items-center">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://github.com/rjbizsolution23-wq" className="flex items-center">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Rick Jefferson</CardTitle>
                  <CardDescription>Quantum Prompt Genesis • Elite Systems Architect</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      With over a decade of experience in enterprise software development,
                      I specialize in creating transformative digital solutions that drive
                      business growth and innovation.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Specializations:</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• AGI & Advanced Prompt Engineering</li>
                        <li>• Enterprise Data Engineering & Analytics</li>
                        <li>• Full-Stack Application Development</li>
                        <li>• AI/ML Model Training & Deployment</li>
                        <li>• Cloud Infrastructure & Security</li>
                        <li>• Business Process Automation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg"
                alt="RJ Business Solutions"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold">RJ Business Solutions</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © 2024 RJ Business Solutions. Elite digital transformation through cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      id: 'agi-prompt-engineering',
      title: 'AGI Prompt Engineering',
      description: 'Advanced AI reasoning systems and LLM optimization for enterprise applications',
      price: 'Starting at $5,000',
      features: [
        'Chain-of-Thought & ReAct implementation',
        'Multi-agent orchestration frameworks',
        'RAG system architecture & optimization',
        'Constitutional AI development',
        'Custom LLM fine-tuning',
        'Prompt template libraries',
        'Performance benchmarking',
        'Enterprise integration'
      ],
      technologies: ['OpenAI GPT', 'Anthropic Claude', 'LangChain', 'Pinecone', 'ChromaDB', 'Weaviate'],
      deliverables: [
        'Production-ready prompt framework',
        'Custom reasoning engines',
        'Performance optimization reports',
        'Integration documentation',
        'Training materials'
      ]
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering & Analytics',
      description: 'Enterprise-scale data pipelines, warehousing, and real-time analytics solutions',
      price: 'Starting at $8,000',
      features: [
        'Real-time ETL/ELT pipelines',
        'Data warehouse optimization',
        'Stream processing with Kafka',
        'Apache Spark implementations',
        'Data quality & governance',
        'Cloud-native architectures',
        'Performance monitoring',
        'Cost optimization strategies'
      ],
      technologies: ['Apache Spark', 'Apache Kafka', 'Snowflake', 'BigQuery', 'Airflow', 'dbt', 'Terraform'],
      deliverables: [
        'Scalable data pipelines (100TB+/day)',
        'Data warehouse architecture',
        'Real-time dashboards',
        'Data quality framework',
        'Monitoring & alerting systems'
      ]
    },
    {
      id: 'fullstack-development',
      title: 'Full-Stack Development',
      description: 'Modern web applications with cutting-edge frameworks and optimal performance',
      price: 'Starting at $6,000',
      features: [
        'Next.js 14+ App Router applications',
        'React Server Components',
        'TypeScript development',
        'Microservices architecture',
        'GraphQL & REST APIs',
        'Progressive Web Apps (PWA)',
        'Mobile-responsive design',
        'Performance optimization'
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      deliverables: [
        'Production-ready web application',
        'Mobile-responsive interface',
        'API documentation',
        'Deployment pipeline',
        'Performance audit reports'
      ]
    },
    {
      id: 'ai-ml-finetuning',
      title: 'AI/ML Fine-Tuning',
      description: 'Custom model development, training, and deployment for specialized use cases',
      price: 'Starting at $10,000',
      features: [
        'Foundation model customization',
        'Computer vision applications',
        'Natural language processing',
        'MLOps pipeline automation',
        'Model deployment at scale',
        'A/B testing frameworks',
        'Performance monitoring',
        'Continuous improvement'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Hugging Face', 'MLflow', 'Kubeflow', 'ONNX', 'TensorRT'],
      deliverables: [
        'Custom trained models',
        'MLOps pipeline',
        'Model serving infrastructure',
        'Performance benchmarks',
        'Monitoring dashboards'
      ]
    },
    {
      id: 'cloud-architecture',
      title: 'Cloud Architecture & DevOps',
      description: 'Multi-cloud infrastructure, containerization, and automated deployment pipelines',
      price: 'Starting at $7,500',
      features: [
        'Multi-cloud architecture design',
        'Kubernetes orchestration',
        'Serverless implementations',
        'Infrastructure as Code (IaC)',
        'CI/CD pipeline automation',
        'Container optimization',
        'Cost optimization',
        'Disaster recovery planning'
      ],
      technologies: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Terraform', 'Docker', 'GitLab CI', 'Prometheus'],
      deliverables: [
        'Cloud infrastructure setup',
        'Automated deployment pipelines',
        'Monitoring & logging systems',
        'Security configurations',
        'Cost optimization reports'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      description: 'Enterprise security implementations, vulnerability assessments, and compliance frameworks',
      price: 'Starting at $9,000',
      features: [
        'Zero-trust architecture design',
        'SAST/DAST implementation',
        'Compliance frameworks (SOC2, GDPR)',
        'Security automation',
        'Penetration testing',
        'Incident response planning',
        'Security monitoring',
        'Employee training programs'
      ],
      technologies: ['Snyk', 'SonarQube', 'Trivy', 'Falco', 'Vault', 'OAuth 2.0', 'OpenID Connect'],
      deliverables: [
        'Security assessment reports',
        'Compliance documentation',
        'Automated security pipelines',
        'Incident response procedures',
        'Security training materials'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Services
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Transform your business with cutting-edge technology solutions. From AI implementation to 
            enterprise infrastructure, we deliver production-ready systems that drive measurable results.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              📊 Enterprise-Grade Solutions
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🚀 Scalable Architecture
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🔒 Security-First Design
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base mb-4">
                        {service.description}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-lg font-semibold px-3 py-1 ml-4">
                      {service.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 6).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 6 && (
                        <div className="text-sm text-muted-foreground italic">
                          + {service.features.length - 6} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                      Deliverables
                    </h4>
                    <div className="space-y-1">
                      {service.deliverables.slice(0, 3).map((deliverable, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{deliverable}</span>
                        </div>
                      ))}
                      {service.deliverables.length > 3 && (
                        <div className="text-sm text-muted-foreground italic">
                          + {service.deliverables.length - 3} more deliverables
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button className="w-full" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <h3 className="font-semibold mb-2">Discovery & Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Deep dive into your business requirements, technical constraints, and success metrics
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
                </div>
                <h3 className="font-semibold mb-2">Architecture Design</h3>
                <p className="text-sm text-muted-foreground">
                  Create scalable, secure architecture tailored to your specific needs and growth plans
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
                </div>
                <h3 className="font-semibold mb-2">Development & Testing</h3>
                <p className="text-sm text-muted-foreground">
                  Agile development with continuous testing, security scanning, and performance optimization
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">4</span>
                </div>
                <h3 className="font-semibold mb-2">Deployment & Support</h3>
                <p className="text-sm text-muted-foreground">
                  Production deployment with monitoring, documentation, and ongoing support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project requirements and create a custom solution that drives real results.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
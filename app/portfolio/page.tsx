import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function PortfolioPage() {
  const projects = [
    {
      id: 'enterprise-agi-platform',
      title: 'Enterprise AGI Platform',
      category: 'AI/ML',
      client: 'Fortune 500 Financial Services',
      description: 'Multi-agent AI system for automated financial analysis, risk assessment, and regulatory compliance with 95%+ accuracy.',
      technologies: ['OpenAI GPT-4', 'LangChain', 'Pinecone', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'Kubernetes'],
      metrics: [
        '95% accuracy in risk assessment',
        '80% reduction in manual analysis time',
        '$2M annual cost savings',
        '99.9% system uptime'
      ],
      features: [
        'Real-time financial data processing',
        'Multi-modal document analysis',
        'Regulatory compliance automation',
        'Custom LLM fine-tuning',
        'Enterprise SSO integration',
        'Audit trail & reporting'
      ],
      githubUrl: 'https://github.com/rjbizsolution23-wq/agi-prompt-engineering'
    },
    {
      id: 'realtime-data-pipeline',
      title: 'Real-Time Data Analytics Platform',
      category: 'Data Engineering',
      client: 'E-commerce Unicorn Startup',
      description: 'Scalable data pipeline processing 100TB+ daily with real-time analytics and ML-powered recommendations.',
      technologies: ['Apache Spark', 'Kafka', 'Snowflake', 'Airflow', 'dbt', 'Terraform', 'AWS', 'Python'],
      metrics: [
        '100TB+ daily data processing',
        '<1s query response time',
        '99.95% pipeline reliability',
        '60% infrastructure cost reduction'
      ],
      features: [
        'Stream processing architecture',
        'Data quality monitoring',
        'Auto-scaling infrastructure',
        'ML feature engineering',
        'Real-time dashboards',
        'Cost optimization algorithms'
      ],
      githubUrl: 'https://github.com/rjbizsolution23-wq/data-engineering-pipelines'
    },
    {
      id: 'healthcare-web-platform',
      title: 'Healthcare Management Platform',
      category: 'Full-Stack',
      client: 'Regional Healthcare Network',
      description: 'HIPAA-compliant patient management system with telemedicine, scheduling, and AI-powered diagnostics.',
      technologies: ['Next.js 14', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io', 'WebRTC', 'Docker'],
      metrics: [
        '50,000+ active patients',
        '40% improvement in appointment efficiency',
        'HIPAA/SOC2 compliant',
        '99.8% user satisfaction'
      ],
      features: [
        'Video consultation platform',
        'AI-powered appointment scheduling',
        'Electronic health records',
        'Real-time notifications',
        'Mobile-responsive design',
        'Advanced security protocols'
      ],
      githubUrl: 'https://github.com/rjbizsolution23-wq/fullstack-development-templates'
    },
    {
      id: 'computer-vision-quality',
      title: 'Computer Vision Quality Control',
      category: 'AI/ML',
      client: 'Manufacturing Corporation',
      description: 'AI-powered quality control system using computer vision for automated defect detection and classification.',
      technologies: ['TensorFlow', 'OpenCV', 'PyTorch', 'FastAPI', 'MLflow', 'Kubeflow', 'GCP', 'Python'],
      metrics: [
        '99.2% defect detection accuracy',
        '75% reduction in manual inspection',
        '30% increase in production speed',
        '$5M annual savings'
      ],
      features: [
        'Real-time image processing',
        'Custom CNN architectures',
        'Edge device deployment',
        'MLOps pipeline automation',
        'Continuous model retraining',
        'Performance monitoring'
      ],
      githubUrl: 'https://github.com/rjbizsolution23-wq/ai-ml-fine-tuning-suite'
    },
    {
      id: 'multi-cloud-infrastructure',
      title: 'Multi-Cloud Infrastructure',
      category: 'Cloud/DevOps',
      client: 'Global Technology Company',
      description: 'Hybrid multi-cloud architecture with automated deployments, monitoring, and disaster recovery.',
      technologies: ['Kubernetes', 'Terraform', 'AWS', 'GCP', 'Azure', 'GitLab CI', 'Prometheus', 'Grafana'],
      metrics: [
        '99.99% application availability',
        '50% faster deployment cycles',
        '40% infrastructure cost savings',
        'Zero-downtime deployments'
      ],
      features: [
        'Multi-cloud orchestration',
        'Automated CI/CD pipelines',
        'Infrastructure as Code',
        'Comprehensive monitoring',
        'Auto-scaling & load balancing',
        'Disaster recovery automation'
      ],
      githubUrl: 'https://github.com/rjbizsolution23-wq/cloud-cybersecurity-tools'
    },
    {
      id: 'cybersecurity-framework',
      title: 'Zero-Trust Security Framework',
      category: 'Cybersecurity',
      client: 'Financial Technology Firm',
      description: 'Comprehensive security implementation with zero-trust architecture, compliance automation, and threat detection.',
      technologies: ['Vault', 'Falco', 'Snyk', 'SonarQube', 'OAuth 2.0', 'Kubernetes', 'Istio', 'ELK Stack'],
      metrics: [
        '100% SOC2 compliance',
        '95% threat detection accuracy',
        '0 security incidents',
        '80% faster compliance audits'
      ],
      features: [
        'Identity & access management',
        'Automated vulnerability scanning',
        'Runtime threat detection',
        'Compliance reporting',
        'Security policy automation',
        'Incident response workflows'
      ],
      githubUrl: 'https://github.com/rjbizsolution23-wq/cloud-cybersecurity-tools'
    }
  ]

  const categories = ['All', 'AI/ML', 'Data Engineering', 'Full-Stack', 'Cloud/DevOps', 'Cybersecurity']

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio & Case Studies
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Explore real-world implementations that have transformed businesses across industries. 
            Each project showcases enterprise-grade solutions with measurable outcomes.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              💼 Enterprise Clients
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              📈 Measurable ROI
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🔗 Open Source Code
            </Badge>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">$50M+</div>
              <div className="text-muted-foreground">Client Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-muted-foreground">Average Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === 'All' ? 'default' : 'secondary'}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{project.category}</Badge>
                    <Badge variant="secondary" className="text-xs">
                      {project.client}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Key Metrics */}
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                      Key Results
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.metrics.map((metric, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                    <Button className="w-full" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        View Source Code
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/contact">Discuss Similar Project</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Technology Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🧠 AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['TensorFlow', 'PyTorch', 'Hugging Face', 'OpenAI', 'LangChain', 'MLflow'].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🔧 Data & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Apache Spark', 'Kafka', 'Snowflake', 'Airflow', 'dbt', 'BigQuery'].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🌐 Full-Stack Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">☁️ Cloud & Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'Terraform'].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🔒 Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Vault', 'Falco', 'Snyk', 'SonarQube', 'OAuth 2.0', 'Istio'].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🛠️ DevOps & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['GitLab CI', 'GitHub Actions', 'Prometheus', 'Grafana', 'ELK Stack', 'Ansible'].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can create a custom solution that delivers similar results for your business.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/rjbizsolution23-wq" target="_blank" rel="noopener noreferrer">
                View All Repositories
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
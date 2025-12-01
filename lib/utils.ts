import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date))
}

export function formatPhoneNumber(phone: string): string {
  // Format phone number as (XXX) XXX-XXXX
  const cleaned = phone.replace(/\D/g, "")
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + "..."
}

export const businessInfo = {
  name: "RJ Business Solutions",
  owner: "Rick Jefferson",
  title: "Quantum Prompt Genesis",
  email: "rjbizsolution23@gmail.com",
  phone: "945-308-8003",
  formattedPhone: formatPhoneNumber("945-308-8003"),
  address: "1342 NM 333, Tijeras, New Mexico 87059",
  website: "https://rickjeffersonsolutions.com",
  github: "https://github.com/rjbizsolution23-wq",
  linkedin: "https://linkedin.com/in/rick-jefferson-314998235",
  tiktok: "https://www.tiktok.com/@rick_jeff_solution",
  logo: "https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg",
  services: [
    "AGI-Level Prompt Architecture",
    "Enterprise Data Engineering",
    "Full-Stack Development",
    "AI/ML Fine-Tuning",
    "Cloud & Cybersecurity",
    "Business Process Automation"
  ],
  technologies: [
    "Next.js", "React", "TypeScript", "Python", "FastAPI", "PostgreSQL", 
    "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "Azure", "GCP",
    "Terraform", "GitHub Actions", "Apache Airflow", "Apache Kafka",
    "Snowflake", "BigQuery", "TensorFlow", "PyTorch", "Hugging Face", "OpenAI API"
  ]
}
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate request body
    const validatedData = contactSchema.parse(body)
    
    // In production, you would:
    // 1. Send email notification
    // 2. Save to database
    // 3. Integrate with CRM
    // 4. Send to webhook
    
    console.log('New contact form submission:', validatedData)
    
    // Simulate email sending
    const emailData = {
      to: 'rjbizsolution23@gmail.com',
      from: validatedData.email,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Company:</strong> ${validatedData.company || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${validatedData.service}</p>
        <p><strong>Budget:</strong> ${validatedData.budget || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${validatedData.timeline || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `
    }
    
    // Log for now - in production, integrate with email service
    console.log('Email would be sent:', emailData)
    
    // Auto-responder to client
    const autoResponse = {
      to: validatedData.email,
      from: 'rjbizsolution23@gmail.com',
      subject: 'Thank you for contacting RJ Business Solutions',
      html: `
        <h2>Thank you for your interest!</h2>
        <p>Hi ${validatedData.name},</p>
        <p>Thank you for reaching out to RJ Business Solutions. I've received your inquiry about ${validatedData.service} and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to:</p>
        <ul>
          <li>Check out my GitHub repositories: <a href="https://github.com/rjbizsolution23-wq">github.com/rjbizsolution23-wq</a></li>
          <li>Connect with me on LinkedIn: <a href="https://linkedin.com/in/rick-jefferson-314998235">linkedin.com/in/rick-jefferson-314998235</a></li>
          <li>Text 'prompt' to 945-308-8003 for AI automation blueprints</li>
        </ul>
        <p>Best regards,<br>Rick Jefferson<br>Quantum Prompt Genesis</p>
      `
    }
    
    console.log('Auto-response would be sent:', autoResponse)
    
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully. You will receive a response within 24 hours.',
      data: {
        submittedAt: new Date().toISOString(),
        name: validatedData.name,
        service: validatedData.service
      }
    }, { status: 200 })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Validation error',
        errors: error.errors
      }, { status: 400 })
    }
    
    console.error('Contact form error:', error)
    
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your request. Please try again or contact us directly.',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Contact API is operational',
    services: [
      'AGI Prompt Engineering',
      'Enterprise Data Engineering',
      'Full-Stack Development',
      'AI/ML Fine-Tuning',
      'Cloud & Cybersecurity',
      'Business Automation'
    ],
    contact: {
      email: 'rjbizsolution23@gmail.com',
      phone: '945-308-8003',
      location: 'Tijeras, New Mexico'
    }
  })
}
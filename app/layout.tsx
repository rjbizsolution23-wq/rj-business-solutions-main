import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RJ Business Solutions - Elite Digital Transformation',
  description: 'AGI-Level Prompt Architect | Data Engineer | Full Stack Developer | AI/ML Fine-Tuning | Cloud & Cybersecurity Expert',
  keywords: 'AGI, prompt engineering, data engineering, full stack development, AI/ML, cloud, cybersecurity, automation, Rick Jefferson',
  authors: [{ name: 'Rick Jefferson', url: 'https://rickjeffersonsolutions.com' }],
  creator: 'Rick Jefferson',
  publisher: 'RJ Business Solutions',
  robots: 'index, follow',
  openGraph: {
    title: 'RJ Business Solutions - Elite Digital Transformation',
    description: 'Professional AGI, Data Engineering, and Full-Stack Development Services',
    url: 'https://rickjeffersonsolutions.com',
    siteName: 'RJ Business Solutions',
    images: [
      {
        url: 'https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg',
        width: 1200,
        height: 630,
        alt: 'RJ Business Solutions Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RJ Business Solutions - Elite Digital Transformation',
    description: 'Professional AGI, Data Engineering, and Full-Stack Development Services',
    images: ['https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#667eea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RJ Business Solutions",
              "url": "https://rickjeffersonsolutions.com",
              "logo": "https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg",
              "founder": {
                "@type": "Person",
                "name": "Rick Jefferson",
                "jobTitle": "AGI-Level Prompt Architect & Full Stack Developer"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1342 NM 333",
                "addressLocality": "Tijeras",
                "addressRegion": "New Mexico",
                "postalCode": "87059",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-945-308-8003",
                "contactType": "Business"
              },
              "sameAs": [
                "https://linkedin.com/in/rick-jefferson-314998235",
                "https://github.com/rjbizsolution23-wq",
                "https://www.tiktok.com/@rick_jeff_solution"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
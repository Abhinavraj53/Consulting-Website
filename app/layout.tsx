import type { Metadata } from 'next'
import { Poppins, DM_Sans, Geist_Mono } from 'next/font/google'
import { VisitorPopup } from '@/components/consua/visitor-popup'
import { ScrollToTop } from '@/components/consua/scroll-to-top'
import { FloatingWhatsApp } from '@/components/consua/floating-whatsapp'
import { FloatingCall } from '@/components/consua/floating-call'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})
const dmSans = DM_Sans({ variable: '--font-dm-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Epeno Advisory - Business Consulting Agency in Noida, Delhi NCR',
  description:
    'Epeno Advisory helps startups and businesses with government benefits, funding assistance, registrations, certifications, compliances and digital marketing.',
  icons: {
    icon: [
      {
        url: '/epeno-logo.png',
        type: 'image/png',
      },
    ],
    apple: '/epeno-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${dmSans.variable} ${geistMono.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <FloatingWhatsApp />
        <FloatingCall />
        <ScrollToTop />
        <VisitorPopup />
      </body>
    </html>
  )
}

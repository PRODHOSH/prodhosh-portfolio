import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "portfolio-prodhosh 💻",
  description: "Portfolio of Prodhosh V.S - CSE & Data Science Student",
  generator: "v0.app",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/favicon.png`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${_geist.className}`}>
        {children}
        <Analytics />
        
        {/* AI Chatbot Integration */}
        <Script
          src="https://www.noupe.com/embed/019a5f326bc371db8edb4182f43ee958f2ea.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}

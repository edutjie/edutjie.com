import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Rock_Salt } from 'next/font/google'
import './globals.css'
import { CustomCursor, SmoothScroll, Footer, Navbar, UnicornScript } from '@elements'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const rockSalt = Rock_Salt({ weight: '400', subsets: ['latin'], variable: '--font-rock-salt' })

export const metadata: Metadata = {
  title: 'Eduardus Tjitrahardja | Personal Website', // Mock name according to reference, replace with actual if needed
  description:
    "Master's Researcher at the Tsinghua Key Laboratory of Pervasive Computing, focusing on Vision Language Models (VLM), Multimodal AI, and Human-Computer Interaction (HCI).",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${rockSalt.variable}`}>
      <body className="font-sans bg-[#030712] text-slate-50 selection:bg-blue-500 selection:text-white relative min-h-screen flex flex-col items-center">
        <SmoothScroll />
        <CustomCursor />
        
        {/* Noise Overlay */}
        <div className="noise-overlay"></div>
        
        {/* Global Ambient Background */}
        <div
          className="aura-background-component fixed top-0 w-full h-screen -z-10 bg-[#030712]"
          data-alpha-mask="80"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)"
          }}
        >
          <div
            data-us-project="qPVvnWEWLLiJgYtSkKyB"
            className="absolute w-full h-full left-0 top-0 -z-10"
          ></div>
          <div className="absolute inset-0 bg-blue-950/60 mix-blend-color pointer-events-none z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712] pointer-events-none z-0"></div>
        </div>
        
        <UnicornScript />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

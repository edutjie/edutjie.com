import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Rock_Salt, Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { CustomCursor, SmoothScroll, Footer, Navbar, UnicornScript, ScrollToTop } from '@elements'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const rockSalt = Rock_Salt({ weight: '400', subsets: ['latin'], variable: '--font-rock-salt' })
const playfairDisplay = Playfair_Display({ weight: '400', subsets: ['latin'], variable: '--font-playfair-display' })
const dotage = localFont({ src: '../../public/assets/fonts/dotage-regular.otf', variable: '--font-dotage' })

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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${rockSalt.variable} ${playfairDisplay.variable} ${dotage.variable}`}>
      <body className="font-sans bg-[#030712] text-slate-50 selection:bg-blue-500 selection:text-white relative min-h-screen flex flex-col items-center">
        <SmoothScroll />
        <CustomCursor />

        {/* Global Ambient Background */}
        <div className="aura-background-component fixed top-0 w-full h-screen -z-10 bg-[#030712]">
          <div
            data-us-project="qPVvnWEWLLiJgYtSkKyB"
            className="absolute w-full h-full left-0 top-0 -z-10"
          ></div>
          {/* Plain tint — avoids mix-blend-mode compositing cost */}
          <div className="absolute inset-0 bg-blue-950/30 pointer-events-none z-0"></div>
          {/* Fade to page bg at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712] pointer-events-none z-0"></div>
        </div>

        <UnicornScript />

        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}

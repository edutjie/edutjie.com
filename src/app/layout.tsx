import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Rock_Salt, Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { CustomCursor, SmoothScroll, Footer, Navbar, UnicornScript, ScrollToTop, AuraBackground } from '@elements'

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

        {/* Global Ambient Background — uses static gradient on mobile, WebGL on desktop */}
        <AuraBackground />

        <UnicornScript />

        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}

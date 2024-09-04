import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@elements'

export const metadata: Metadata = {
  title: 'Eduardus Tjitrahardja | Personal Website',
  description:
    "A Computer Science student who is very passionate and interested in technology and computer especially in Artificial Intelligence. I have acquired a vast amount of knowledge in various fields of programming such as Machine Learning, Software Engineering, etc. I'm currently studying Computer Science at University of Indonesia where I can learn much and put my knowledge and experience.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

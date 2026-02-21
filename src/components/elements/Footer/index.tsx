'use client'
import React from 'react'
import { CONTACTS } from '@constants'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#030712] z-10 pt-16 pb-8 px-6 mt-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 cursor-target">
          <span className="iconify solar--code-circle-linear w-6 h-6 text-blue-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 15l2.5-3L14 9m-4 6l-2.5-3L10 9M22 12c0-4.714 0-7.071-1.465-8.535C19.072 2 16.714 2 12 2S4.928 2 3.465 3.465C2 4.928 2 7.286 2 12s0 7.071 1.465 8.535C4.928 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12Z" /></svg>
          </span>
          <span className="text-sm font-medium text-white">Eduardus Tjitrahardja</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-slate-400">
          {CONTACTS.filter(contact => ['Google Scholar', 'Linkedin', 'Github'].includes(contact.name)).map(contact => (
            <a
              key={contact.name}
              href={contact.url}
              className="hover:text-white transition-colors cursor-target py-2 md:py-0"
              target="_blank"
              rel="noreferrer"
            >
              {contact.name}
            </a>
          ))}
        </div>
        <p className="text-xs text-slate-600 font-mono uppercase tracking-widest text-center">
          © {new Date().getFullYear()} Portfolio Website
        </p>
      </div>
    </footer>
  )
}

'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, pdfUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl h-[80vh] md:h-[90vh] bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-white/5 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 z-10">
              <h3 className="text-white font-medium flex items-center gap-2">
                <span className="iconify solar--document-bold text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5c.55 0 1 .45 1 1s-.45 1-1 1H9C5.13 2 4 3.13 4 7v10c0 3.87 1.13 5 5 5h6c3.87 0 5-1.13 5-5v-5c0-.55.45-1 1-1s1 .45 1 1Z"/><path fill="currentColor" d="M22 10h-4c-3 0-4-1-4-4V2l8 8Z"/></svg>
                </span>
                Resume.pdf
              </h3>
              <div className="flex items-center gap-4">
                <a 
                  href={pdfUrl} 
                  download 
                  className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                  title="Download PDF"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v13m0 0l-4-4m4 4l4-4m-9 4v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2"/></svg>
                </a>
                <button 
                  onClick={onClose}
                  className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
            </div>

            {/* PDF Viewer Container */}
            <div className="w-full h-full pt-14">
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-none"
                title="Resume PDF"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ResumeModal

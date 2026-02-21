import React from 'react'

interface SwiperNavButtonProps {
    /** CSS class name that Swiper uses to bind this button as prev/next */
    className: string
    direction: 'prev' | 'next'
}

const ChevronLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 19l-7-6l7-6" />
    </svg>
)

const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 5l7 6l-7 6" />
    </svg>
)

export const SwiperNavButton: React.FC<SwiperNavButtonProps> = ({ className, direction }) => {
    return (
        <button
            className={`${className} absolute ${direction === 'prev' ? 'left-0' : 'right-0'} top-1/2 -translate-y-[calc(50%+1rem)] w-12 h-12 flex items-center justify-center bg-blue-600/20 hover:bg-blue-600 rounded-full backdrop-blur-md transition-all duration-300 border border-blue-500/30 hover:scale-110 z-20 cursor-target shadow-[0_0_20px_rgba(37,99,235,0.3)] disabled:opacity-30 disabled:hover:scale-100 disabled:hover:bg-black/60 disabled:border-white/10 disabled:cursor-not-allowed`}
        >
            <span className={`iconify ${direction === 'prev' ? 'solar--alt-arrow-left-linear' : 'solar--alt-arrow-right-linear'} w-7 h-7 text-white flex items-center justify-center`}>
                {direction === 'prev' ? <ChevronLeft /> : <ChevronRight />}
            </span>
        </button>
    )
}

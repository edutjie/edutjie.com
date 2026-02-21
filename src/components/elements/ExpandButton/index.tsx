import React from 'react'

interface ExpandButtonProps {
    expanded: boolean
    onClick: () => void
}

const ChevronUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 15l-7-6l-7 6" />
    </svg>
)

const ChevronDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 9l-7 6l-7-6" />
    </svg>
)

export const ExpandButton: React.FC<ExpandButtonProps> = ({ expanded, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-6 py-3 text-sm font-medium bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white rounded-full shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:brightness-110 transition-all duration-300 cursor-target flex items-center gap-2"
        >
            <span>{expanded ? 'See Less' : 'See More'}</span>
            <span className={`iconify transition-transform duration-300 ${expanded ? 'solar--alt-arrow-up-linear' : 'solar--alt-arrow-down-linear'}`}>
                {expanded ? <ChevronUp /> : <ChevronDown />}
            </span>
        </button>
    )
}

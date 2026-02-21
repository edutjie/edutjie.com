import React from 'react'

interface SkillTagProps {
    name: string
    className?: string
}

export const SkillTag: React.FC<SkillTagProps> = ({ name, className = '' }) => {
    return (
        <span
            className={`text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-300 font-mono whitespace-nowrap group-hover/item:bg-blue-500/20 group-hover/item:border-blue-500/30 group-hover/item:text-blue-200 transition-colors duration-300 ${className}`}
        >
            {name}
        </span>
    )
}

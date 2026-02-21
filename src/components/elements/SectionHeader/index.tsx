import React from 'react'

interface SectionHeaderProps {
    title: string
    subtitle?: string
    align?: 'left' | 'center'
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center' }) => {
    const alignClass = align === 'left' ? 'text-left' : 'text-center'
    const subtitleClass = align === 'left' ? '' : 'mx-auto'

    return (
        <div className={`animate-on-scroll ${alignClass}`} style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-2 font-sans">
                {title}
            </h2>
            {subtitle && (
                <p className={`text-slate-400 text-sm max-w-xl font-sans ${subtitleClass}`}>
                    {subtitle}
                </p>
            )}
        </div>
    )
}

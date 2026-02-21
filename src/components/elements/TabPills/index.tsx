'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface TabPillsProps {
    tabs: { label: string; value: string }[]
    activeTab: string
    onTabChange: (value: string) => void
    className?: string
}

export const TabPills: React.FC<TabPillsProps> = ({ tabs, activeTab, onTabChange, className = '' }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const pillRef = useRef<HTMLDivElement>(null)
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

    useEffect(() => {
        const activeIndex = tabs.findIndex((tab) => tab.value === activeTab)
        const activeTabElement = tabRefs.current[activeIndex]

        if (activeTabElement && pillRef.current) {
            const { offsetLeft, offsetWidth } = activeTabElement

            gsap.to(pillRef.current, {
                x: offsetLeft,
                width: offsetWidth,
                duration: 0.4,
                ease: 'power3.out',
            })
        }
    }, [activeTab, tabs])

    return (
        <div
            ref={containerRef}
            className={`relative flex flex-wrap gap-0 p-1 bg-slate-900/40 border border-white/10 rounded-full w-fit backdrop-blur-md ${className}`}
        >
            {/* Sliding Background Pill */}
            <div
                ref={pillRef}
                className="absolute top-1 bottom-1 left-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 rounded-full shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] pointer-events-none"
            />

            {tabs.map((tab, index) => (
                <button
                    key={tab.value}
                    ref={(el) => (tabRefs.current[index] = el)}
                    onClick={() => onTabChange(tab.value)}
                    className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium font-sans transition-colors duration-300 cursor-target ${activeTab === tab.value ? 'text-white' : 'text-slate-400 hover:text-white'
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
}

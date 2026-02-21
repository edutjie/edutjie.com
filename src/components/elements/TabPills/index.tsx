import React from 'react'

interface TabPillsProps {
    tabs: { label: string; value: string }[]
    activeTab: string
    onTabChange: (value: string) => void
    className?: string
}

export const TabPills: React.FC<TabPillsProps> = ({ tabs, activeTab, onTabChange, className = '' }) => {
    return (
        <div className={`flex flex-wrap gap-2 p-1 bg-slate-900/40 border border-white/10 rounded-full w-fit backdrop-blur-md ${className}`}>
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => onTabChange(tab.value)}
                    className={`px-6 py-2 rounded-full text-sm font-medium font-sans transition-all duration-300 cursor-target ${activeTab === tab.value
                            ? 'bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:brightness-110'
                            : 'text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
}

'use client'
import React, { useEffect, useState } from 'react'

export const AuraBackground = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        setIsMobile(window.innerWidth < 768)
    }, [])

    // Before mount, render nothing – avoids SSR/hydration mismatch
    if (!mounted) return null

    return (
        <div className="aura-background-component fixed top-0 w-full h-screen -z-10 bg-[#030712]">
            {isMobile ? (
                /* Animated CSS orbs — cheap alternative to WebGL on mobile */
                <>
                    <div className="aura-orb aura-orb-1" />
                    <div className="aura-orb aura-orb-2" />
                    <div className="aura-orb aura-orb-3" />
                </>
            ) : (
                <div
                    data-us-project="qPVvnWEWLLiJgYtSkKyB"
                    className="absolute w-full h-full left-0 top-0 -z-10"
                />
            )}
            {/* Plain tint — avoids mix-blend-mode compositing cost */}
            <div className="absolute inset-0 bg-blue-950/30 pointer-events-none z-0" />
            {/* Fade to page bg at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712] pointer-events-none z-0" />
        </div>
    )
}

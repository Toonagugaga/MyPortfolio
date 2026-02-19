"use client"

import React from 'react'
import { NAV_LINKS } from '@/app/lib/data'
import Button from '@/app/components/ui/button'

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Toon.dev
                </div>
                <div className="hidden md:flex gap-8">
                    {NAV_LINKS.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>
                <Button variant="ghost" className="px-4 py-2 rounded-full text-sm">
                    Resume
                </Button>
            </div>
        </nav>
    )
}

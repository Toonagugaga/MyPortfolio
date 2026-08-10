import React from 'react'
import { clsx } from 'clsx'

interface CardProps {
    className?: string
    children: React.ReactNode
}

export default function Card({ className, children }: CardProps) {
    return (
        <div
            className={clsx(
                "bg-card border border-white/5 rounded-xl",
                className
            )}
        >
            {children}
        </div>
    )
}

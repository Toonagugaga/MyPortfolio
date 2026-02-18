import React from 'react'
import { clsx } from 'clsx'

type BadgeVariant = 'primary' | 'muted' | 'secondary'

interface BadgeProps {
    variant?: BadgeVariant
    className?: string
    children: React.ReactNode
}

const variantStyles: Record<BadgeVariant, string> = {
    primary: "bg-primary/10 text-primary border border-primary/20",
    muted: "bg-white/5 text-gray-300",
    secondary: "bg-background border border-white/10 text-muted-foreground",
}

export default function Badge({ variant = 'primary', className, children }: BadgeProps) {
    return (
        <span
            className={clsx(
                "px-3 py-1 rounded-md text-sm font-medium inline-block",
                variantStyles[variant],
                className
            )}
        >
            {children}
        </span>
    )
}

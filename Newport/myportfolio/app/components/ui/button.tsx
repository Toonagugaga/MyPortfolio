import React from 'react'
import { clsx } from 'clsx'

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'gradient' | 'icon'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
    children: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/50",
    outline: "border border-white/20 hover:bg-white/5",
    ghost: "bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white",
    gradient: "bg-gradient-to-r from-primary to-secondary text-white font-bold hover:opacity-90",
    icon: "p-2 bg-background rounded-full hover:text-primary",
}

export default function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
    return (
        <button
            className={clsx(
                "px-8 py-3 rounded-full font-medium transition-all",
                variantStyles[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

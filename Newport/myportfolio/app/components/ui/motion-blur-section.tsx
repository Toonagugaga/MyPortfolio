"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface MotionBlurSectionProps {
    children: React.ReactNode
    className?: string
    id?: string
    direction?: 'left' | 'right' | 'up' | 'down'
}

export default function MotionBlurSection({
    children,
    className,
    id,
    direction = 'up'
}: MotionBlurSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const directionMap = {
        left: { x: -80, y: 0 },
        right: { x: 80, y: 0 },
        up: { x: 0, y: 60 },
        down: { x: 0, y: -60 },
    }

    const offset = directionMap[direction]

    return (
        <div ref={ref} id={id} className={className}>
            <motion.div
                initial={{
                    opacity: 0,
                    x: offset.x,
                    y: offset.y,
                    filter: 'blur(12px)',
                }}
                animate={isInView ? {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    filter: 'blur(0px)',
                } : {
                    opacity: 0,
                    x: offset.x,
                    y: offset.y,
                    filter: 'blur(12px)',
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}

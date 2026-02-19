"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/app/lib/animations'
import Badge from '@/app/components/ui/badge'

export default function AboutSection() {
    return (
        <section id="about" className="py-20 px-6 bg-white/5 border-y border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div {...fadeInUp}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Building Digital Experiences <br /> With Passion</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                        I am currently pursuing my Bachelor&apos;s degree in Computer Science. My journey began with a simple &quot;Hello World&quot; and has evolved into a deep passion for full-stack development. I love bridging the gap between design and engineering, ensuring every pixel serves a purpose.
                    </p>

                    <div className="flex justify-center gap-4 flex-wrap">
                        {['Student', 'Developer', 'Innovator'].map((badge) => (
                            <Badge key={badge} variant="primary" className="px-4 py-2 rounded-lg">
                                {badge}
                            </Badge>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

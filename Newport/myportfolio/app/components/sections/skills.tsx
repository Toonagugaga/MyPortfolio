"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/app/lib/animations'
import { SKILLS } from '@/app/lib/data'
import Badge from '@/app/components/ui/badge'

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div {...fadeInUp} className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Technologies I Work With</h2>
                    <p className="text-muted-foreground">The tools that power my development universe.</p>
                </motion.div>

                <div className="grid md:grid-cols-4 gap-8">
                    {Object.entries(SKILLS).map(([category, items], idx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card border border-white/5 p-6 rounded-xl hover:border-primary/50 transition-colors group"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-primary group-hover:glow-text transition-all">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <Badge key={skill} variant="secondary">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

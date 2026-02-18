"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/app/lib/animations'
import Card from '@/app/components/ui/card'

export default function EducationSection() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-12 text-center">Academic Background</motion.h2>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-primary/30 space-y-12"
                >
                    {/* Timeline Item */}
                    <div className="relative">
                        <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                        <Card className="p-6">
                            <div className="flex flex-wrap justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Bachelor of Science in Computer Science</h3>
                                    <p className="text-primary">Tech University of the Cosmos</p>
                                </div>
                                <span className="text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full">2022 - Present</span>
                            </div>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm mt-4">
                                <li>Dean&apos;s List: Fall 2023, Spring 2024</li>
                                <li>Relevant Coursework: Data Structures, Algorithms, Web Development</li>
                                <li>Vice President of the Coding Club</li>
                            </ul>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

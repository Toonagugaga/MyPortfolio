"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ChevronRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/app/lib/animations'
import { PROJECTS } from '@/app/lib/data'
import Badge from '@/app/components/ui/badge'

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 px-6 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto">
                <motion.div {...fadeInUp} className="mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
                        <p className="text-muted-foreground">A selection of my recent work.</p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors">
                        View All <ChevronRight size={16} />
                    </button>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="group bg-card border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                        >
                            {/* Project Image Placeholder */}
                            <div className={`h-48 w-full ${project.image} relative`}>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <button className="p-2 bg-background rounded-full hover:text-primary"><Github size={20} /></button>
                                    <button className="p-2 bg-background rounded-full hover:text-primary"><ExternalLink size={20} /></button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="text-xs font-semibold text-secondary mb-2 uppercase tracking-wider">
                                    {project.category}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} variant="muted" className="text-xs px-2 py-1 rounded">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <button className="w-full py-2 border border-white/10 rounded-lg text-sm font-medium hover:bg-primary hover:border-primary transition-colors">
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

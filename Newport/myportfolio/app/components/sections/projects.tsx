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
                
                <motion.div {...fadeInUp} className="mb-12 relative flex flex-col items-center justify-center">
                    <div className="text-center z-10">
                        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-muted-foreground">A selection of my recent work.</p>
                    </div>
                    
                    <a 
                        href="https://github.com/Toonagugaga" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-2 text-primary hover:text-white transition-colors hover:scale-105"
                    >
                        View All <ChevronRight size={16} />
                    </a>
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
                            className="group bg-card border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col h-full"
                        >
                            <div 
                                className={`h-48 w-full relative shrink-0 ${project.image.includes('/') ? 'bg-cover bg-center' : project.image}`}
                                style={project.image.includes('/') ? { backgroundImage: `url('${project.image}')` } : {}}
                            >
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    
                                    {/* --- 1. เช็คปุ่ม Github --- */}
                                    {project.githubUrl ? (
                                        <a 
                                            href={project.githubUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-2 bg-background rounded-full hover:text-primary transition-transform hover:scale-110"
                                        >
                                            <Github size={20} />
                                        </a>
                                    ) : (
                                        // ถ้าไม่มี Github ให้ปุ่มเป็นสีเทาจางๆ และกดไม่ได้
                                        <button className="p-2 bg-background/40 text-gray-500 rounded-full cursor-not-allowed">
                                            <Github size={20} />
                                        </button>
                                    )}

                                    {/* --- 2. เช็คปุ่ม External Link --- */}
                                    {project.viewUrl ? (
                                        <a 
                                            href={project.viewUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-2 bg-background rounded-full hover:text-primary transition-transform hover:scale-110"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    ) : (
                                        <button className="p-2 bg-background/40 text-gray-500 rounded-full cursor-not-allowed">
                                            <ExternalLink size={20} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
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
                                
                                <div className="mt-auto">
                                    {/* --- 3. ปุ่ม View Details ชี้ไปที่ viewUrl --- */}
                                    {project.viewUrl ? (
                                        <a 
                                            href={project.viewUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="block w-full"
                                        >
                                            <button className="w-full py-2.5 border border-white/10 rounded-lg text-sm font-medium hover:bg-primary hover:border-primary transition-all hover:scale-[1.02] cursor-pointer">
                                                View Details
                                            </button>
                                        </a>
                                    ) : (
                                        <button disabled className="w-full py-2.5 border border-white/5 rounded-lg text-sm font-medium text-gray-500 bg-white/5 cursor-not-allowed">
                                            Not Available
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
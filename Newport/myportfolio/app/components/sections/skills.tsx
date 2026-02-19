"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/app/lib/animations'
import { SKILLS } from '@/app/lib/data'
import Badge from '@/app/components/ui/badge'

export default function SkillsSection() {
    // รวมทุกสกิลเป็นก้อนเดียว (Flatten) เพื่อจัดกลางง่ายๆ
    const allSkills = Object.values(SKILLS).flat();

    return (
        <section id="skills" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                
                {/* หัวข้อนอกการ์ด */}
                <motion.div {...fadeInUp} className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Technologies I Work With</h2>
                    <p className="text-muted-foreground">The tools that power my development Web, AI/ML , Aplication .</p>
                </motion.div>

                {/* Card ใหญ่ใบเดียว */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-card/50 backdrop-blur-sm border border-white/5 p-10 rounded-3xl max-w-7xl mx-auto shadow-2xl flex flex-col items-center"
                >
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full max-w-6xl">
                        {allSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }} // เรียงกันโผล่มาทีละนิด
                                viewport={{ once: true }}
                            >
                                <Badge 
                                    variant="secondary" 
                                    className="inline-flex items-center gap-3 px-5 py-3 rounded-xl transition-all hover:scale-110 hover:bg-white/10 cursor-default bg-white/5 border border-white/5"
                                >
                                    {/* Icon ใหญ่ขึ้นนิดนึง */}
                                    <skill.icon 
                                        className="w-6 h-6 shrink-0" 
                                        style={{ color: skill.color }} 
                                    />
                                    {/* ตัวหนังสือใหญ่ขึ้นและชัดเจน */}
                                    <span className="text-gray-200 font-medium text-base">{skill.name}</span>
                                </Badge>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
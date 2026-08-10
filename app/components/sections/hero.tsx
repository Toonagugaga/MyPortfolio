"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Mail } from 'lucide-react'
import Button from '@/app/components/ui/button'

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
            {/* Background Glow Element */}
            <div className="absolute top-0 right-0 w-125 h-125 bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-125 h-125 bg-secondary/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-secondary mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                        </span>
                        พร้อมรับงาน (Available for hire)
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        สวัสดีครับ ผม <span className="bg-linear-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent glow-text">Toon</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">
                        Junior Developer & <br className="hidden md:block" /> นักศึกษามหาวิทยาลัย
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
                        Coding the future. Transforming imagination into digital reality.
                    </p>

                    {/* --- รวมกลุ่มปุ่มและไอคอนให้อยู่ในแถวเดียวกัน --- */}
                    <div className="flex flex-wrap items-center gap-6">
                        
                        {/* 1. กลุ่มปุ่มหลัก */}
                        <div className="flex flex-wrap gap-4">
                            <a href="#projects">
                                <Button 
                                    variant="primary"
                                    className="hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(139,92,246,0.4)] active:scale-95 transition-all duration-300 transform"
                                >
                                    Explore My Work 📜
                                </Button>
                            </a>
                           
                        </div>

                        {/* เส้นคั่น (แสดงเฉพาะจอคอมพิวเตอร์) */}
                        <div className="hidden md:block w-px h-8 bg-white/20"></div>

                        {/* 2. กลุ่ม Connect with me */}
                        <div className="flex items-center gap-4">
                            <span className="text-gray-300 font-medium tracking-wide">Contact with me:</span>
                            <div className="flex gap-3">
                                <a 
                                    href="https://github.com/Toonagugaga" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-11 h-11 bg-black/50 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110 shadow-sm"
                                >
                                    <Github size={22} className="text-gray-200" />
                                </a>
                                <a 
                                    href="mailto:toon0929967001@gmail.com" 
                                    className="flex items-center justify-center w-11 h-11 bg-black/50 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110 shadow-sm"
                                >
                                    <Mail size={22} className="text-gray-200" />
                                </a>
                            </div>
                        </div>

                    </div>
                    {/* ------------------------------------- */}

                </motion.div>

                <motion.div
                    className="relative flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        {/* Profile Image */}
                        <div className="absolute inset-8 rounded-full bg-gradient-to-b from-gray-800 to-black overflow-hidden border-2 border-primary/50 glow-box flex items-center justify-center">
                            <img src="/images/toon.jpg" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
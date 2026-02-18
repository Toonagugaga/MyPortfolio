"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/app/components/ui/button'
import Image from 'next/image'

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
                        Available for hire
                    </div>

                    {/* ใช้ bg-linear-to-r แทน bg-gradient-to-r ใน v4 */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hello i'm <span className="bg-linear-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent glow-text">Toon</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">
                        Junior Developer & <br className="hidden md:block" /> นักศึกษามหาวิทยาลัย
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
                        ท่องไปในจักรวาลแห่งโค้ด เพื่อสร้างสรรค์ประสบการณ์ดิจิทัลที่ทันสมัย ขยายขอบเขตจินตนาการสู่ความจริง
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary">
                            ดูผลงานของผม
                        </Button>
                        <Button variant="outline">
                            ส่งข้อความ
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    className="relative flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-8 rounded-full bg-gradient-to-b from-gray-800 to-black overflow-hidden border-2 border-primary/50 glow-box flex items-center justify-center">
                            <img
                                src="/images/toon.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

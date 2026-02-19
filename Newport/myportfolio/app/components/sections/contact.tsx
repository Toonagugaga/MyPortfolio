"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send } from 'lucide-react'
import { fadeInUp } from '@/app/lib/animations'
import Card from '@/app/components/ui/card'
import Button from '@/app/components/ui/button'

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 px-6 bg-gradient-to-t from-black to-background">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                {/* --- ฝั่งซ้าย: ข้อมูลการติดต่อ --- */}
                <motion.div {...fadeInUp}>
                    <h2 className="text-4xl font-bold mb-6">Let&apos;s Create Something <br /> <span className="text-primary">Extraordinary</span></h2>
                    <p className="text-muted-foreground mb-8">
                        Whether you have a question, a project idea, or just want to say hi, I&apos;m always open to discussing new opportunities.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Email Me</p>
                                <p className="font-medium">toon0929967001@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Location</p>
                                <p className="font-medium">Nakhonratcahsima, Thailand (Remote Available)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Clock size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Response Time</p>
                                <p className="font-medium">Usually within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* --- ฝั่งขวา: ฟอร์มติดต่อ (แก้ไขให้ส่งอีเมลได้แล้ว) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="p-8 rounded-2xl shadow-2xl">
                        <form 
                            action="https://formsubmit.co/toon0929967001@gmail.com" 
                            method="POST"
                            className="space-y-6"
                        >
                            {/* ตั้งค่า FormSubmit */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="http://localhost:3000/#contact" /> {/* เปลี่ยน URL นี้เมื่อเอาเว็บขึ้น Host จริง */}
                            <input type="hidden" name="_subject" value="มีข้อความใหม่จาก Portfolio ของคุณ!" />

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Name</label>
                                    <input 
                                        type="text" 
                                        name="name" // สำคัญ: ต้องมี name
                                        required    // สำคัญ: บังคับกรอก
                                        className="w-full bg-background border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition-colors" 
                                        placeholder="John Doe" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" // สำคัญ: ต้องมี name
                                        required    // สำคัญ: บังคับกรอก
                                        className="w-full bg-background border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition-colors" 
                                        placeholder="john@example.com" 
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea 
                                    name="message" // สำคัญ: ต้องมี name
                                    required       // สำคัญ: บังคับกรอก
                                    rows={4} 
                                    className="w-full bg-background border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition-colors resize-none" 
                                    placeholder="Tell me about your project..." 
                                />
                            </div>

                            <Button type="submit" variant="gradient" className="w-full py-4 rounded-lg flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </Button>
                        </form>
                    </Card>
                </motion.div>

            </div>
        </section>
    )
}
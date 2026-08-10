"use client"

import React, { useEffect, useRef } from 'react'

export default function RippleBackground() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (typeof window === 'undefined') return

        let $el: any = null

        const initRipples = async () => {
            try {
                // 1. โหลด Library
                const jqImport = await import('jquery');
                const $ = jqImport.default || (jqImport as any);

                (window as any).jQuery = $;
                (window as any).$ = $;

                await import('jquery.ripples');

                if (!containerRef.current) return;

                $el = $(containerRef.current);

                // 2. ตั้งค่า Ripples
                // หมายเหตุ: ปรับ interactive เป็น false เพราะเราจะคุมเอง
                $el.ripples({
                    resolution: 512,
                    dropRadius: 20,
                    perturbance: 0.01, // น้ำลึกนิ่งๆ
                    interactive: false, 
                });

                // 3. (สำคัญมาก) ระบบดักจับเมาส์แบบ Manual
                // ดักจับเมาส์บน window (หน้าจอทั้งหมด) แล้วสั่งให้ "drop" (หยดน้ำ) ลงไปที่พื้นหลัง
                const handleMouseMove = (e: MouseEvent) => {
                    // คำนวณความแรงตามการสะบัดเมาส์ (ถ้าต้องการ) หรือใส่ค่าคงที่ก็ได้
                    // พิกัด e.clientX, e.clientY คือตำแหน่งเมาส์บนหน้าจอพอดี เพราะพื้นหลังเราเป็น Fixed
                    $el.ripples('drop', e.clientX, e.clientY, 20, 0.02);
                };

                window.addEventListener('mousemove', handleMouseMove);

                // เก็บ Cleanup function ไว้ลบ Event Listener เมื่อเปลี่ยนหน้า
                return () => {
                    window.removeEventListener('mousemove', handleMouseMove);
                };

            } catch (err) {
                console.error('Ripples init error:', err);
            }
        };

        // เริ่มทำงาน
        const timer = setTimeout(initRipples, 100);
        let cleanupFunc: (() => void) | undefined;

        // ดึง cleanup function ออกมาจัดการ
        initRipples().then((cleanup) => {
            if (typeof cleanup === 'function') cleanupFunc = cleanup;
        });

        return () => {
            clearTimeout(timer);
            if (cleanupFunc) cleanupFunc(); // ลบ Event Listener
            if ($el && typeof $el.ripples === 'function') {
                try { $el.ripples('destroy'); } catch (e) {}
            }
        };
    }, [])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-50 pointer-events-none" // pointer-events-none เพื่อให้คลิกทะลุไปโดนปุ่มได้
            style={{
                backgroundImage: 'url(/images/ocean-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#020617',
                width: '100vw',
                height: '100vh',
            }}
        />
    )
}
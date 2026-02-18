"use client"

import React, { useEffect, useRef } from 'react'

export default function RippleBackground() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // เช็คว่ารันบน Browser หรือไม่
        if (typeof window === 'undefined') return

        let destroyed = false
        let $el: any = null

        const initRipples = async () => {
            try {
                // 1. โหลด jQuery
                const jqueryModule = await import('jquery');
                const jq = jqueryModule.default || jqueryModule;

                // 2. กำหนดให้ window รู้จัก (ใช้ 'as any' เพื่อปิด Error TypeScript)
                (window as any).jQuery = jq;
                (window as any).$ = jq;

                // 3. โหลด Plugin (ต้องโหลดหลังจากกำหนด window.$ แล้ว)
                await import('jquery.ripples');

                if (destroyed || !containerRef.current) return;

                // 4. เริ่มต้นการทำงาน (Settings สำหรับน้ำทะเลลึก)
                $el = jq(containerRef.current);
                $el.ripples({
                    resolution: 512,    // ความละเอียดภาพ
                    dropRadius: 25,     // ขนาดวงน้ำ
                    perturbance: 0.02,  // **สำคัญ** ค่า 0.02 จะทำให้ดูหนืดเหมือนน้ำลึก
                    interactive: true,
                });

            } catch (err) {
                console.warn('Ripples init failed:', err);
            }
        };

        initRipples();

        // Cleanup เมื่อปิดหน้า
        return () => {
            destroyed = true;
            if ($el) {
                try {
                    $el.ripples('destroy');
                    $el = null;
                } catch (e) {}
            }
        };
    }, [])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-50" 
            style={{
                // ชี้ไปที่รูปที่คุณอัปโหลดไว้ (ocean-bg.jpg)
                backgroundImage: 'url(/images/ocean-bg.jpg)', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // สีสำรองกรณีรูปโหลดไม่ทัน
                backgroundColor: '#001e36', 
            }}
        />
    )
}
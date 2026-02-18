"use client"

import React, { useEffect, useRef } from 'react'

export default function RippleBackground() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // เช็คว่ารันบน Browser จริงๆ
        if (typeof window === 'undefined') return

        let $el: any = null

        const initRipples = async () => {
            try {
                // 1. Import jQuery
                const jqImport = await import('jquery');
                // ดึงตัว function จริงๆ ออกมา (แก้ปัญหา This expression is not callable)
                const $ = jqImport.default || (jqImport as any);

                // 2. ยัดใส่ window ให้ plugin มองเห็น
                (window as any).jQuery = $;
                (window as any).$ = $;

                // 3. Import Plugin
                await import('jquery.ripples');

                // เช็คว่า container ยังอยู่ไหม
                if (!containerRef.current) return;

                // 4. เริ่มต้นใช้งาน
                $el = $(containerRef.current);
                
                // ล้างค่าเก่าทิ้งก่อนเสมอ (กันภาพซ้อน/กระตุก)
                if (typeof $el.ripples === 'function') {
                     $el.ripples('destroy');
                }

                $el.ripples({
                    resolution: 512,  // ความละเอียดมาตรฐาน
                    dropRadius: 20,   // ขนาดวงน้ำ
                    perturbance: 0.01, // ความหนืด (0.01 = น้ำลึกนิ่งๆ, ลดอาการภาพแตกเป็นเส้น)
                    interactive: true,
                });

            } catch (err) {
                console.error('Ripples init error:', err);
            }
        };

        // รอ 100ms ให้ CSS โหลดเสร็จก่อนเริ่มคำนวณภาพ
        const timer = setTimeout(initRipples, 100);

        return () => {
            clearTimeout(timer);
            if ($el && typeof $el.ripples === 'function') {
                try { $el.ripples('destroy'); } catch (e) {}
            }
        };
    }, [])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-50 pointer-events-none"
            style={{
                backgroundImage: 'url(/images/ocean-bg.jpg)',
                backgroundSize: 'cover',       // สำคัญ: ขยายเต็มจอ
                backgroundPosition: 'center',  // สำคัญ: จัดกึ่งกลาง
                backgroundColor: '#020617',    // สีรองพื้น
                width: '100vw',
                height: '100vh',
            }}
        />
    )
}
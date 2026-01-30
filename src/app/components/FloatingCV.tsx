"use client";

import { FileText } from "lucide-react";
import { motion } from "motion/react";

export function FloatingCV() {
    const handleDownload = () => {
        window.open('/cv.pdf', '_blank');
    };

    return (
        <motion.div
            className="hidden md:block fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring" }}
        >
            <button
                onClick={handleDownload}
                className="group relative flex items-center justify-center w-14 h-14 bg-[#2d3365]/80 backdrop-blur-md border border-[#F4BB46]/30 rounded-full shadow-2xl hover:border-[#F4BB46] transition-all duration-300 active:scale-95"
                title="Descargar CV"
            >
                <FileText className="w-6 h-6 text-[#F4BB46] group-hover:scale-110 transition-transform" />

                <span className="absolute right-16 bg-[#2d3365]/90 text-[#F4BB46] text-xs py-1.5 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#F4BB46]/20 pointer-events-none">
                    Meeeh CV
                </span>
            </button>
        </motion.div>
    );
}

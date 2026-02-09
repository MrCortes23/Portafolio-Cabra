import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '@/app/context/TranslationContext';

export function LanguageToggle() {
    const { language, toggleLanguage } = useTranslation();

    return (
        <button
            onClick={toggleLanguage}
            className="relative flex items-center gap-1.5 px-2 py-1 rounded-full border border-[#F4BB46]/30 bg-transparent hover:bg-[#F4BB46]/10 hover:border-[#F4BB46] transition-all duration-300 group"
            aria-label="Toggle language"
        >
            <Globe className="w-3.5 h-3.5 text-[#F4BB46] group-hover:scale-110 transition-transform" />
            <AnimatePresence mode="wait">
                <motion.span
                    key={language}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#F4BB46] font-medium text-xs uppercase min-w-[20px]"
                >
                    {language}
                </motion.span>
            </AnimatePresence>
        </button>
    );
}

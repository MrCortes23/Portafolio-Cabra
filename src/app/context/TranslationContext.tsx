import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '../translations/translations';

interface TranslationContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => any;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => {
        // Try to get language from localStorage, default to Spanish
        const savedLanguage = localStorage.getItem('language') as Language;
        return savedLanguage || 'es';
    });

    useEffect(() => {
        // Save language preference to localStorage
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
    };

    const t = (key: string): any => {
        const keys = key.split('.');
        let value: any = translations[language];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return value !== undefined ? value : key;
    };

    return (
        <TranslationContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(TranslationContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
}

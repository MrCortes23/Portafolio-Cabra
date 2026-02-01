import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import heroImage from "@/assets/goathero.png";
import profileImage from "@/assets/profile.png";
import profileImage2 from "@/assets/profile2.png";
import { BsWhatsapp } from 'react-icons/bs'

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Typewriter state
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Cabra", "Goat"];

  // Image rotation effect
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 2);
    }, 5000); // Cambio de imagen cada 5 segundos
    return () => clearInterval(imageInterval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      const currentText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(currentText);

      let typeSpeed = isDeleting ? 100 : 150;

      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        typeSpeed = 500;
      }

      setTypingSpeed(typeSpeed);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const profileImages = [profileImage, profileImage2];

  return (
    <section id="home" className="min-h-screen flex items-center overflow-hidden relative">
      <div className="w-full h-full flex">
        {/* Imagen lado izquierdo - ocupa todo el lateral con animación */}
        <motion.div
          className="hidden md:flex md:w-[60%] md:-mr-[10%] relative z-10"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={heroImage}
            alt="GoatHero"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay gradient para mejor integración */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#232757]/30"></div>
        </motion.div>

        {/* Contenido lado derecho */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center px-8 md:px-12 lg:px-20 py-12 relative mt-12">
          <div className="max-w-xl w-full">
            {/* Título principal con animación */}
            <motion.h1
              className="mb-6 text-gray-100 text-3xl md:text-4xl lg:text-4xl text-center font-medium"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Desarrollador de{" "}
              <motion.span
                className="text-[#F4BB46] relative inline-block font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 100 }}
              >
                Software
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="inline-block ml-1 text-[#F4BB46]"
                >
                  _
                </motion.span>
              </motion.span>
            </motion.h1>

            {/* Foto de Perfil y Nombre */}
            <motion.div
              className="flex flex-col items-center mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-[transparent]/20 shadow-xl shadow-[#F4BB46]/10 overflow-hidden mb-4 relative group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={profileImages[currentImageIndex]}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>
              <h2 className="text-2xl font-semibold text-[#F4BB46] tracking-wide flex items-center gap-2 h-8">
                David Santiago Cortes
                <span className="relative inline-block min-w-[1ch] text-left">
                  {text}
                  <span className="animate-pulse ml-0.5">.</span>
                </span>
              </h2>
            </motion.div>

            {/* Descripción con animación */}
            <motion.p
              className="text-lg text-gray-400 mb-10 leading-relaxed text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Desarrollando soluciones innovadoras con un diseño centrado en el usuario y su experiencia. Todo es posible con código eficiente.
            </motion.p>

            {/* Botones con animación */}
            <motion.div
              className="flex gap-4 mb-10 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="cursor-pointer bg-[#F4BB46] hover:bg-[#e0a830] text-[#232757] font-medium shadow-lg shadow-[#F4BB46]/20 hover:shadow-[#F4BB46]/40 transition-all"
              >
                Ver Proyectos
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="cursor-pointer border-[#F4BB46]/50 text-[#F4BB46] hover:bg-[#F4BB46] hover:text-[#232757] font-medium transition-all"
              >
                Contactar
              </Button>
            </motion.div>

            {/* Redes sociales con animación */}
            <motion.div
              className="flex gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <a
                href="https://github.com/MrCortes23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[#F4BB46]/30 flex items-center justify-center text-gray-400 hover:text-[#F4BB46] hover:bg-[#F4BB46]/10 hover:border-[#F4BB46] transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/davidcortescabra23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[#F4BB46]/30 flex items-center justify-center text-gray-400 hover:text-[#F4BB46] hover:bg-[#F4BB46]/10 hover:border-[#F4BB46] transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:cabrasantiagocortes@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[#F4BB46]/30 flex items-center justify-center text-gray-400 hover:text-[#F4BB46] hover:bg-[#F4BB46]/10 hover:border-[#F4BB46] transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/573224627101"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[#F4BB46]/30 flex items-center justify-center text-gray-400 hover:text-[#F4BB46] hover:bg-[#F4BB46]/10 hover:border-[#F4BB46] transition-all"
              >
                <BsWhatsapp className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Imagen en móvil - centrada */}
        <div className="md:hidden absolute inset-0 opacity-10 pointer-events-none">
          <img
            src={heroImage}
            alt="Developer Illustration"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
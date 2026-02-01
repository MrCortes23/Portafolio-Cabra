import React from 'react';
import goatAbout from "@/assets/goatAbout.svg";

// Ahora el componente acepta props para ajustar el tamaño según donde lo uses
export const DavidLogo = ({
    textSize = "text-5xl md:text-5xl", // Tamaño por defecto pequeño para títulos
    goatSize = "w-12 h-12",            // Tamaño de la cabra ajustado
    goatTop = "-top-8",                // Posición de la cabra
    className = ""
}) => {
    return (
        // Cambiamos div por span con inline-flex para que pueda vivir dentro de un h2
        <span className={`relative inline-flex items-baseline font-sans font-bold text-[#F4BB46] ${textSize} ${className}`}>

            {/* Primera letra D */}
            <span>D</span>

            {/* Contenedor relativo para la 'a' y la cabra */}
            <span className="relative flex flex-col items-center justify-end mx-px">

                {/* SVG de la Cabra */}
                <img src={goatAbout} alt="Goat" className={`absolute ${goatTop} ${goatSize} z-10`} />

                {/* Letra 'a' */}
                <span className="z-0">a</span>
            </span>

            {/* Resto del texto */}
            <span>vid...</span>
        </span>
    );
};
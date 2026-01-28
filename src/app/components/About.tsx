import { motion } from "motion/react";
import { Code, Server, Users } from "lucide-react";
import { MatrixRain } from "./ui/MatrixRain";
import { DavidLogo } from "./ui/david";

export function About() {
  const stats = [
    {
      icon: <Code className="w-6 h-6 text-[#F4BB46]" />,
      title: "Experiencia",
      value: "6+ Meses",
      desc: "Desarrollo Full Stack / Automatizaciones"
    },
    {
      icon: <Server className="w-6 h-6 text-[#F4BB46]" />,
      title: "Proyectos",
      value: "6+",
      desc: "Supliendo necesidades y dando resultados"
    },
    {
      icon: <Users className="w-6 h-6 text-[#F4BB46]" />,
      title: "Clientes",
      value: "Optimización",
      desc: "Satisfechos y optimizados por sistemas"
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-[#2d3365] relative overflow-hidden py-24 md:py-0">

      {/* Background Image para Móvil - Oculto en Desktop */}
      <div className="md:hidden absolute inset-0 z-0">
        <div className="absolute inset-0">
          <MatrixRain />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d3365] via-[#2d3365]/90 to-[#232757]/80"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 h-full flex flex-col md:flex-row gap-35 relative z-10">

        {/* Columna Izquierda (Antes Derecha) - Contenido */}
        <motion.div
          className="w-full md:w-1/2 self-center md:py-20"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-light text-gray-100 mb-6 flex flex-wrap items-end justify-center md:justify-end gap-3 mt-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span>Sobre</span>
            {/* Insertamos el logo pasando las props para ajustarlo al título */}
            <DavidLogo
              textSize="text-3xl md:text-5xl"
              goatSize="w-12 h-12 md:w-18 md:h-18"
              goatTop="-top-6 md:-top-10"
            />
          </motion.h2>

          <div className="space-y-6 text-gray-300 md:text-gray-400 text-lg leading-relaxed mb-10 text-center md:text-right">
            <p>
              Tecnólogo en <span className="text-[#F4BB46] font-medium"> Análisis y Desarrollo de Software</span>, estudiante de <span className="text-[white] font-medium">Ingeniería de Software</span> con alta motivación y proactividad para gestionar las diferentes situaciones que sean propuestas, comprometido en brindar soluciones efectivas, con excelente adaptación para trabajar en equipo, toma de decisiones estratégicas y optimización de procesos para alcanzar resultados.
            </p>
            <p>
              Me centro en escribir código eficiente, siempre buscando la mejor solución para cada problema. Me mantengo actualizado y en orden con las tecnologías que esten a disposición para ofrecer adaptabilidad.
            </p>
          </div>

          {/* Grid de Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#232757]/80 md:bg-[#232757]/50 border border-[#F4BB46]/20 md:border-[#F4BB46]/10 p-6 rounded-xl hover:border-[#F4BB46]/30 transition-all group backdrop-blur-sm"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300 flex justify-center md:justify-start">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-1 text-center md:text-left">{stat.value}</h3>
                <p className="text-[#F4BB46] text-sm font-medium mb-1 text-center md:text-left">{stat.title}</p>
                <p className="text-gray-400 md:text-gray-500 text-xs text-center md:text-left">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Columna Derecha (Antes Izquierda) - Imagen Desktop */}
        <motion.div
          className="hidden md:block w-1/2 h-[750px] relative self-start"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Matrix Rain Effect */}
          <div className="absolute inset-0 rounded-b-2xl overflow-hidden">
            <MatrixRain />
          </div>

          {/* Overlay decorativo para mezclar con el fondo */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2d3365] via-transparent to-transparent opacity-100 pointer-events-none rounded-b-2xl h-1/4 bottom-0 top-auto"></div>
        </motion.div>

      </div>
    </section>
  );
}
import { useState } from "react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";


interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  poster?: string;
}

interface Project {
  id: number;
  title: string;
  work: string;
  description: string;
  media: ProjectMedia[];
  tags: string[];
  github: string;
  logoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "DOGS",
    work: "Proyecto personal DOGS",
    description: "Sistema de información y gestión para Guarderia Canina Campestre.",
    media: [
      { type: 'video', url: "https://res.cloudinary.com/dxjilnp8x/video/upload/v1769570358/doggs1_Hecho_con_Clipchamp_rnzzbw.mp4", poster: "https://res.cloudinary.com/dxjilnp8x/image/upload/v1769644795/d497d254-1162-4375-80a7-d21f6a6da3ca.png" },
      { type: 'video', url: "https://res.cloudinary.com/dxjilnp8x/video/upload/v1769568447/DOGS2_Hecho_con_Clipchamp_1_ame6g3.mp4" },
      { type: 'video', url: "https://res.cloudinary.com/dxjilnp8x/video/upload/v1769568452/Dogs3_Hecho_con_Clipchamp_guegfg.mp4" },
      { type: 'image', url: "https://res.cloudinary.com/dxjilnp8x/image/upload/v1769570186/Dise%C3%B1o_sin_t%C3%ADtulo_3_trgtfx.png" },
    ],
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/MrCortes23/DOGSv2",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdOFgj2N1FUDMQjCRJkBWCxLkdKKfK-XHeQ&s", // Add logo URL here
  },
  {
    id: 2,
    title: "Reportes PASTAS",
    work: "Productos Alimenticios Doria S.A.S",
    description: "Sistema colaborativo de gestión de tipos de anomalías/reportes presentados dentro de la planta de producción.",
    media: [
      { type: 'video', url: "https://res.cloudinary.com/dxjilnp8x/video/upload/v1769639209/PASTAS1_Hecho_con_Clipchamp_2_p0eloo.mp4", poster: "https://res.cloudinary.com/dxjilnp8x/image/upload/v1769644939/6736b6a9-f865-422a-94fd-3ee24d46d5fa.png" },
    ],
    tags: ["Google Apps Script", "Google Sheets", "HTML", "CSS", "JavaScript", "CLASP"],
    github: "https://github.com/MrCortes23/Unificacion-Data-Pastas-DAVIDCORTES",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdptdCHB1bOarb5mxM-jRVL2XWq6FdYKUcA&s",
  },
  {
    id: 3,
    title: "Sistema de DADAS DE BAJA",
    work: "Productos Alimenticios Doria S.A.S",
    description: "Sistema notificador y aprobador por grupos de correos, generación de solicitudes de baja de productos/elementos.",
    media: [
      { type: 'video', url: "https://res.cloudinary.com/dxjilnp8x/video/upload/v1769640154/DDBJ_Hecho_con_Clipchamp_gdwrhf.mp4", poster: "https://res.cloudinary.com/dxjilnp8x/image/upload/v1769645040/92c63ae4-cad4-4a37-8fbf-56e395ee706e.png" },
    ],
    tags: ["Google Apps Script", "Google Sheets", "HTML", "CSS", "JavaScript", "CLASP"],
    github: "https://github.com/MrCortes23/Dadas-de-baja-DAVIDCORTES",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdptdCHB1bOarb5mxM-jRVL2XWq6FdYKUcA&s",
  },
  {
    id: 4,
    title: "Protocolo Higiene, Limpieza y Desinfección",
    work: "Productos Alimenticios Doria S.A.S",
    description: "Sistema de verificación y chequeo de cada maquina de producción para realizar el protocolo de higiene, limpieza y desinfección.",
    media: [
      { type: 'video', url: "https://res.cloudinary.com/dxjilnp8x/video/upload/v1769640648/PHLYD_Hecho_con_Clipchamp_srhn2s.mp4", poster: "https://res.cloudinary.com/dxjilnp8x/image/upload/v1769645232/0228cd6c-674e-493d-bab4-f572dea617d3.png" },
    ],
    tags: ["Google Apps Script", "Google Sheets", "HTML", "CSS", "JavaScript", "CLASP"],
    github: "https://github.com/MrCortes23/Protocolo-Higiene-Limpieza-y-Desinfeccion-DAVIDCORTES",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdptdCHB1bOarb5mxM-jRVL2XWq6FdYKUcA&s",
  },
  {
    id: 5,
    title: "Sistema de SALIDA DE PRODUCTOS",
    work: "Pastas Comarrico S.A.S",
    description: "Sistema de control de salida de productos, estadísticas de salidas, generación de reportes y notificaciones de vencimiento/proximidad por correo electrónico.",
    media: [
      { type: 'video', url: "https://res.cloudinary.com/dxjilnp8x/video/upload/v1769636594/SDP1_Hecho_con_Clipchamp_r2zxj4.mp4", poster: "https://res.cloudinary.com/dxjilnp8x/image/upload/v1769645035/2468cbfa-b145-4c57-a016-3ce2549e6df3.png" },
    ],
    tags: ["Google Apps Script", "Google Sheets", "HTML", "CSS", "JavaScript", "CLASP"],
    github: "https://github.com/MrCortes23/Salida-de-producto-COMARRICO-DAVIDCORTES",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2UX3iIW0H2ZnPR-OTtRgHUHXPOtth8lOPqQ&s",
  },
  {
    id: 6,
    title: "Portafolio CABRA",
    work: "Proyecto personal PORTAFOLIO",
    description: "Portafolio personal para exhibición de proyectos.",
    media: [
      { type: 'image', url: "https://res.cloudinary.com/dxjilnp8x/image/upload/v1769913155/Dise%C3%B1o_sin_t%C3%ADtulo_4_kvwsgd.png" },
    ],
    tags: ["React", "Vite", "Tailwind CSS", "TypeScript", "Node.js"],
    github: "https://github.com/MrCortes23/Portafolio-Cabra",
    logoUrl: "https://res.cloudinary.com/dxjilnp8x/image/upload/v1769571761/goatabout_yrstid.png",
  }
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isAlt = index % 2 !== 0;

  const nextMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.media.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % project.media.length);
    }
  };

  const prevMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.media.length > 1) {
      setCurrentIndex((prev) => (prev - 1 + project.media.length) % project.media.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20 ${isAlt ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="w-full md:w-3/5 aspect-video relative group">
        <div
          className="w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-[#F4BB46]/5 border border-[#F4BB46]/10 bg-[#2d3365] relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                {project.media[currentIndex]?.type === 'video' ? (
                  <video
                    src={project.media[currentIndex].url}
                    poster={project.media[currentIndex].poster}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.media[currentIndex]?.url}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Controls Overlay */}
            <div className={`absolute inset-0 bg-black/20 opacity-0 ${isHovered && project.media.length > 1 ? 'opacity-100' : ''} transition-opacity duration-300 flex items-center justify-between px-4 pointer-events-none`}>
              <button
                onClick={prevMedia}
                className="p-2 rounded-full bg-black/60 text-white hover:bg-[#F4BB46] hover:text-[#232757] transition-all transform hover:scale-110 pointer-events-auto"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextMedia}
                className="p-2 rounded-full bg-black/60 text-white hover:bg-[#F4BB46] hover:text-[#232757] transition-all transform hover:scale-110 pointer-events-auto"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots */}
            {project.media.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {project.media.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all shadow-sm ${idx === currentIndex ? 'bg-[#F4BB46] w-4' : 'bg-white/60 hover:bg-white'}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Project Logo Overlay - Now correctly overlapping the corner */}
        {project.logoUrl && (
          <div className="absolute -top-6 -right-6 z-30 transform hover:scale-110 transition-transform duration-300">
            <div className="w-20 h-20 rounded-full bg-[transparent] p-1 shadow-xl border">
              <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center overflow-hidden">
                <img
                  src={project.logoUrl}
                  alt={`${project.title} Logo`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className={`w-full md:w-2/5 flex flex-col ${isAlt ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
        <h3 className="text-[#F4BB46] text-3xl md:text-4xl font-medium mb-4 leading-tight">
          {project.title}
        </h3>
        <h3 className="text-white text-xl md:text-1xl font-light mb-4 leading-tight">
          {project.work}
        </h3>
        <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
          {project.description}
        </p>

        <div className={`flex flex-wrap gap-2 mb-8 ${isAlt ? 'justify-end' : 'justify-start'}`}>
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-[#3a4175] text-[#F4BB46] hover:bg-[#F4BB46] hover:text-[#232757] transition-colors py-1 px-3 text-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className={`flex gap-4 ${isAlt ? 'justify-end' : 'justify-start'}`}>
          <Button size="lg" variant="outline" asChild className="border-[#F4BB46]/50 text-gray-300 hover:bg-[#F4BB46] hover:text-[#232757] transition-all min-w-[120px]">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
              <Github className="w-5 h-5" />
              <span>Repositorio</span>
            </a>
          </Button>
        </div>
      </div>
    </motion.div >
  );
}

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-32 px-6 md:px-12 lg:px-20 bg-[#232757] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4BB46]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F4BB46]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-thin text-gray-100 mb-6 tracking-tight">
            <span className="font-light">Proyectos </span><span className="text-[#F4BB46] font-medium">Implementados</span>
          </h2>
          <div className="w-80 h-1 bg-[#F4BB46] mx-auto rounded-full mb-6 opacity-60"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
            Proyectos <span className="text-white">desarrollados</span> personalmente y laboralmente.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
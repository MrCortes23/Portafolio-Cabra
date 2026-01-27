import { useState } from "react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import pastas1 from "@/assets/pastas1.jpg";
import pastas2 from "@/assets/pastas2.jpg";
import pastas3 from "@/assets/pastas3.jpg";
import dogs1 from "@/assets/dogs1.jpg";


interface Project {
  id: number;
  title: string;
  work: string;
  description: string;
  images: string[];
  tags: string[];
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "DOGS",
    work: "Proyecto personal DOGS",
    description: "Sistema de información y gestión para Guarderia Canina Campestre.",
    images: [
      dogs1
    ],
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/MrCortes23/DOGSv2",
  },
  {
    id: 2,
    title: "Reportes PASTAS",
    work: "Productos Alimenticios Doria S.A.S",
    description: "Sistema colaborativo de gestión de tipos de anomalías/reportes presentados dentro de la planta de producción.",
    images: [
      pastas1,
      pastas2,
      pastas3
    ],
    tags: ["Google Apps Script", "Google Sheets", "HTML", "CSS", "JavaScript", "CLASP"],
    github: "https://github.com/MrCortes23/Unificacion-Data-Pastas-DAVIDCORTES"
  },
  {
    id: 3,
    title: "Sistema de DADAS DE BAJA",
    work: "Productos Alimenticios Doria S.A.S",
    description: "Sistema notificador y aprobador por grupos de correos, generación de solicitudes de baja de productos/elementos.",
    images: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=80",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200&q=80"
    ],
    tags: ["Google Apps Script", "Google Sheets", "HTML", "CSS", "JavaScript", "CLASP"],
    github: "https://github.com/MrCortes23/Dadas-de-baja-DAVIDCORTES"
  },
  {
    id: 4,
    title: "Sistema de SALIDA DE PRODUCTOS",
    work: "Productos Alimenticios Doria S.A.S",
    description: "Sistema de control de salida de productos, estadísticas de salidas, generación de reportes y notificaciones de vencimiento/proximidad por correo electrónico.",
    images: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
      "https://images.unsplash.com/photo-1576091160550-217358c7db81?w=1200&q=80"
    ],
    tags: ["Google Apps Script", "Google Sheets", "HTML", "CSS", "JavaScript", "CLASP"],
    github: "https://github.com/MrCortes23/Salida-de-producto-COMARRICO-DAVIDCORTES"
  },
  {
    id: 5,
    title: "Protocolo Higiene, Limpieza y Desinfección",
    work: "Productos Alimenticios Doria S.A.S",
    description: "Sistema de verificación y chequeo de cada maquina de producción para realizar el protocolo de higiene, limpieza y desinfección.",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
    ],
    tags: ["Google Apps Script", "Google Sheets", "HTML", "CSS", "JavaScript", "CLASP"],
    github: "https://github.com/MrCortes23/Protocolo-Higiene-Limpieza-y-Desinfeccion-DAVIDCORTES"
  },
  {
    id: 6,
    title: "Portafolio CABRA",
    work: "Proyecto personal PORTAFOLIO",
    description: "Portafolio personal para exhibición de proyectos.",
    images: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80",
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c54be3855463?w=1200&q=80"
    ],
    tags: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/MrCortes23/Portafolio-Cabra"
  }
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isAlt = index % 2 !== 0;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20 ${isAlt ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Media Content - Takes up more space */}
      <div
        className="w-full md:w-3/5 aspect-video relative rounded-xl overflow-hidden shadow-2xl shadow-[#F4BB46]/5 group border border-[#F4BB46]/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full h-full bg-[#2d3365]">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={project.images[currentImage]}
              alt={project.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Controls Overlay */}
          <div className={`absolute inset-0 bg-black/20 opacity-0 ${isHovered ? 'opacity-100' : ''} transition-opacity duration-300 flex items-center justify-between px-4`}>
            <button
              onClick={prevImage}
              className="p-2 rounded-full bg-black/60 text-white hover:bg-[#F4BB46] hover:text-[#232757] transition-all transform hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="p-2 rounded-full bg-black/60 text-white hover:bg-[#F4BB46] hover:text-[#232757] transition-all transform hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {project.images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all shadow-sm ${idx === currentImage ? 'bg-[#F4BB46] w-4' : 'bg-white/60 hover:bg-white'}`}
              />
            ))}
          </div>
        </div>
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
    </motion.div>
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
            Proyectos <span className="text-[#F4BB46] font-normal">Implementados</span>
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
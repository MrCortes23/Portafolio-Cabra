import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tags: ["React", "Firebase", "Tailwind CSS"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Portfolio CMS",
    description: "Sistema de gestión de contenidos personalizado para portfolios creativos.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    github: "#",
    demo: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#232757]">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center text-gray-100">
          Proyectos Destacados
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg hover:shadow-[#F4BB46]/10 transition-shadow bg-[#2d3365] border-[#F4BB46]/20">
              <div className="h-48 overflow-hidden bg-[#3a4175]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-[#F4BB46]">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-[#3a4175] text-[#F4BB46] hover:bg-[#F4BB46] hover:text-[#232757]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild className="border-[#F4BB46]/50 text-gray-300 hover:bg-[#F4BB46] hover:text-[#232757]">
                    <a href={project.github} className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                  </Button>
                  <Button size="sm" asChild className="bg-[#F4BB46] hover:bg-[#e0a830] text-[#232757]">
                    <a href={project.demo} className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
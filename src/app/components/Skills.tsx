import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  {
    category: "Herramientas",
    skills: ["Git", "Docker", "AWS", "Figma", "Jest", "Webpack"]
  },
  {
    category: "Soft Skills",
    skills: ["Trabajo en equipo", "Comunicación", "Resolución de problemas", "Metodologías ágiles"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-[#2d3365]">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center text-gray-100">
          Habilidades & Tecnologías
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((item) => (
            <Card key={item.category} className="bg-[#232757] border-[#F4BB46]/20">
              <CardHeader>
                <CardTitle className="text-[#F4BB46]">{item.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm border-[#F4BB46]/50 text-gray-300 hover:bg-[#F4BB46] hover:text-[#232757]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
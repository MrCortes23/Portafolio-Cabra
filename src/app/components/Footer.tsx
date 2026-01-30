import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2d3365] border-t border-[#F4BB46]/20 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl text-[#F4BB46] mb-2">David Santiago Cortes Cabra</h3>
            <p className="text-sm text-gray-400">Desarrollador de Software</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/MrCortes23"
              className="hover:text-[#F4BB46] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/davidcortescabra23"
              className="hover:text-[#F4BB46] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:cabrasantiagocortes@gmail.com"
              className="hover:text-[#F4BB46] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#F4BB46]/20 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} - David Santiago Cortes Cabra - Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
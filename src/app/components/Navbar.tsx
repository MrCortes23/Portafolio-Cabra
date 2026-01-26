import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre Mí", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Contacto", href: "#contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-3 left-0 right-0 z-50 px-4 pt-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#4a4e6d]/40 backdrop-blur-md rounded-full border border-[#F4BB46]/10 px-8 py-3 shadow-lg">
          <div className="flex justify-center items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-[#F4BB46] hover:text-[#f4d03f] transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#F4BB46] hover:text-[#f4d03f] absolute right-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pt-4 pb-2 border-t border-[#F4BB46]/10 mt-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block py-2 text-[#F4BB46] hover:text-[#f4d03f] transition-colors text-center font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
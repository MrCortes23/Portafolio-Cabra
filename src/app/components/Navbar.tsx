import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre David", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Contacto", href: "#contact" }
];

interface NavbarProps {
  logoUrl?: string;
}

export function Navbar({ logoUrl }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadCV = () => {
    window.open('/cv.pdf', '_blank');
  };

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
        <div className={`bg-[#4a4e6d]/40 backdrop-blur-md border border-[#F4BB46]/10 px-8 py-3 shadow-lg ${isOpen ? 'rounded-2xl' : 'rounded-full'}`}>
          <div className="flex justify-between items-center">
            {/* Logo on the left */}
            <div className="flex items-center">
              {logoUrl && (
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#home");
                  }}
                  className="flex items-center"
                >
                  <img
                    src={logoUrl}
                    alt="Logo"
                    className="h-6 w-6 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                </a>
              )}
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex gap-12 flex-1 justify-center">
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

            <div className="hidden md:block" style={{ width: logoUrl ? '24px' : '0' }}></div>

            <div className="flex items-center gap-2 md:hidden">
              <span className="text-[white] transition-colors font-medium">CabraDev</span>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#F4BB46] hover:text-[#f4d03f]"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pt-2 pb-1 border-t border-[#F4BB46]/10">
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
              <hr className="border-[#F4BB46]/10 my-2" />
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleDownloadCV();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-[#F4BB46] hover:text-[#f4d03f] transition-colors font-semibold"
              >
                <FileText className="w-4 h-4" />
                Descarga mi CV
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
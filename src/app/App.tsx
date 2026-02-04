import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Projects } from "@/app/components/Projects";
import { Skills } from "@/app/components/Skills";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { FloatingCV } from "@/app/components/FloatingCV";
import EntranceAnimation from "@/app/components/EntranceAnimation";

export default function App() {
  return (
    <div className="min-h-screen bg-[#232757]">
      <EntranceAnimation />
      <Navbar logoUrl="https://res.cloudinary.com/dxjilnp8x/image/upload/v1769571761/goatabout_yrstid.png" /> {/* Add your logo URL here */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <FloatingCV />
    </div>
  );
}
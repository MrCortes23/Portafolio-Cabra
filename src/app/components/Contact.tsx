import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import contactImage from "@/assets/contactImage.png";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    alert("Funcionalidad de contacto pendiente de implementar");
  };

  return (
    <section id="contact" className="min-h-screen flex items-center overflow-hidden relative">
      <div className="w-full h-full flex">
        <div className="w-full md:w-1/2 h-full flex items-center justify-center px-8 md:px-12 lg:px-20 py-20 relative">
          <div className="max-w-xl w-full">
            <motion.h2
              className="mb-6 text-gray-100 text-3xl md:text-4xl lg:text-4xl text-center font-medium mt-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Contacta
              <span className="text-[#F4BB46] font-bold">meeeh</span>
            </motion.h2>

            {/* Descripción con animación */}
            <motion.p
              className="text-lg text-gray-400 mb-8 leading-relaxed text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              ¿Meeeeh quieres proponer algo? <br></br>
              Envíame un mensaje y trabajemos juntos.
            </motion.p>

            {/* Información de contacto con animación */}
            <motion.div
              className="space-y-3 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 text-gray-400 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-[#F4BB46]" />
                <span>cabrasantiagocortes@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-[#F4BB46]" />
                <span>+57 322 462 7101</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-[#F4BB46]" />
                <span>Colombia</span>
              </div>
            </motion.div>

            {/* Formulario con animación */}
            <motion.div
              className="bg-[#2d3365]/50 backdrop-blur-sm border border-[#F4BB46]/20 rounded-lg p-6 shadow-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-300">Nombre</Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    required
                    className="bg-[#3a4175] border-[#F4BB46]/30 text-gray-200 focus:border-[#F4BB46] transition-colors mt-3"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="bg-[#3a4175] border-[#F4BB46]/30 text-gray-200 focus:border-[#F4BB46] transition-colors mt-3"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Comentario..."
                    rows={5}
                    required
                    className="bg-[#3a4175] border-[#F4BB46]/30 text-gray-200 focus:border-[#F4BB46] transition-colors resize-none mt-3"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#F4BB46] hover:bg-[#e0a830] text-[#232757] font-medium shadow-lg shadow-[#F4BB46]/20 hover:shadow-[#F4BB46]/40 transition-all"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Imagen lado derecho - ocupa todo el lateral con animación */}
        <motion.div
          className="hidden md:flex md:w-[60%] md:-ml-[10%] relative z-10 items-start"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={contactImage}
            alt="Contact"
            className="w-full object-cover object-center"
          />
          {/* Overlay gradient para mejor integración */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#232757]/30"></div>
        </motion.div>

        {/* Imagen en móvil - centrada */}
        <div className="md:hidden absolute inset-0 opacity-10 pointer-events-none">
          <img
            src={contactImage}
            alt="Contact Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
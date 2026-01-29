import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    alert("Funcionalidad de contacto pendiente de implementar");
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-[#232757]">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-12 text-center text-gray-100">
          Contacto
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 mb-8">
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él.
              Envíame un mensaje y hablemos sobre cómo puedo ayudarte.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#F4BB46]" />
                <span>contacto@ejemplo.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#F4BB46]" />
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#F4BB46]" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>

          <Card className="bg-[#2d3365] border-[#F4BB46]/20">
            <CardHeader>
              <CardTitle className="text-[#F4BB46]">Envíame un mensaje</CardTitle>
              <CardDescription className="text-gray-400">Te responderé lo antes posible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-300">Nombre</Label>
                  <Input id="name" placeholder="Tu nombre" required className="bg-[#3a4175] border-[#F4BB46]/30 text-gray-200" />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" required className="bg-[#3a4175] border-[#F4BB46]/30 text-gray-200" />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={5}
                    required
                    className="bg-[#3a4175] border-[#F4BB46]/30 text-gray-200"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#F4BB46] hover:bg-[#e0a830] text-[#232757]">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
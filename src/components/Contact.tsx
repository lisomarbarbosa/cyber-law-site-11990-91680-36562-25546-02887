import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // WhatsApp integration
    const whatsappNumber = "5591980300890";
    const message = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    
    toast({
      title: "Sucesso!",
      description: "Você será redirecionado para o WhatsApp.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(91) 98030-0890",
      link: "tel:+5591980300890",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "advlisomarbarbosa@gmail.com",
      link: "mailto:advlisomarbarbosa@gmail.com",
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Belém, PA - Brasil",
      link: null,
    },
  ];

  return (
    <section id="contato" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Entre em <span className="gradient-text">Contato</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Tire suas dúvidas e proteja seus direitos no ambiente digital
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-cyber animate-slide-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      className="bg-background/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="bg-background/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descreva sua necessidade jurídica..."
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-accent text-background font-bold shadow-cyber hover:shadow-glow transition-smooth"
                  >
                    <Send className="mr-2" size={18} />
                    Enviar via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-6 animate-fade-in">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-smooth hover:shadow-cyber"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-cyber">
                          <info.icon size={24} className="text-background" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-foreground/60 mb-1">
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-lg font-semibold text-foreground hover:text-primary transition-smooth"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-lg font-semibold text-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* WhatsApp Direct Button */}
              <Card className="border-2 border-primary/30 bg-gradient-cyber backdrop-blur-sm shadow-cyber">
                <CardContent className="p-6 text-center">
                  <MessageCircle size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Atendimento Imediato</h3>
                  <p className="text-foreground/70 mb-4">
                    Fale diretamente conosco pelo WhatsApp
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-accent text-background font-bold shadow-cyber hover:shadow-glow transition-smooth"
                    onClick={() => window.open("https://wa.me/5591980300890?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informações", "_blank")}
                  >
                    <MessageCircle className="mr-2" size={18} />
                    Abrir WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <div className="h-64 rounded-2xl overflow-hidden border border-border/50 shadow-cyber">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.043449648365!2d-48.50455!3d-1.4557884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48c32f82bf875%3A0x3d7d7a01e7c4e0b5!2sBel%C3%A9m%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do escritório"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Scale } from "lucide-react";

const Hero = () => {
  const whatsappLink = "https://wa.me/5591980300890?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informações";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-hero animate-gradient-shift bg-[length:200%_200%]"></div>
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-1/4 left-10 opacity-20 animate-float">
        <Shield size={60} className="text-primary" />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <Scale size={60} className="text-secondary" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Shield size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Advocacia Digital Especializada</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Proteção Jurídica na{" "}
            <span className="gradient-text">Era Digital</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Protejo seus direitos na era digital: LGPD, crimes cibernéticos, criptoativos e recuperação de redes sociais. 
            Atendimento especializado e personalizado para você e sua empresa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-accent text-background font-bold shadow-cyber hover:shadow-glow transition-smooth group px-8 py-6 text-lg"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <MessageCircle className="mr-2 group-hover:scale-110 transition-smooth" size={20} />
              Fale Agora no WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg backdrop-blur-sm transition-smooth"
              onClick={() => {
                const element = document.querySelector("#sobre");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conheça Nosso Trabalho
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              { number: "100%", label: "Comprometido com cada cliente" },
              { number: "Atendimento Rápido", label: "Respostas pelo WhatsApp no mesmo dia" },
              { number: "Advocacia Digital", label: "Praticidade e inovação em processos online" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl gradient-card border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-lg md:text-2xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;

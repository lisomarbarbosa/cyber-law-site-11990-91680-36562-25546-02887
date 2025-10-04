import { Shield, Award, Users, TrendingUp } from "lucide-react";
import advogadoPerfil from "@/assets/advogado-novo.png";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Direito Digital em Foco",
      description: "Atuação direcionada para segurança online e proteção de dados.",
    },
    {
      icon: Award,
      title: "Transparência Total",
      description: "Explico cada passo do processo de forma simples e objetiva.",
    },
    {
      icon: Users,
      title: "Disponibilidade",
      description: "Atendimento ágil e humanizado, sempre acessível ao cliente.",
    },
    {
      icon: TrendingUp,
      title: "Soluções Personalizadas",
      description: "Estratégias jurídicas adaptadas ao seu negócio.",
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Sobre Mim
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
              Advocacia Digital de <span className="gradient-text">Excelência</span>
            </h2>
            
            {/* Main Content - Text Left, Photo Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Text Content - Left Side */}
              <div className="space-y-6 animate-fade-in">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Atuo com dedicação exclusiva no Direito Digital, oferecendo soluções práticas e eficazes 
                  para proteger você e seu negócio no ambiente online e no universo das criptomoedas.
                </p>
                
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center shadow-cyber">
                        <feature.icon size={24} className="text-background" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1 text-foreground">{feature.title}</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo - Right Side (Square) */}
              <div className="flex justify-center lg:justify-end animate-fade-in">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-cyber hover:shadow-glow transition-smooth bg-gradient-card">
                  <img
                    src={advogadoPerfil}
                    alt="Dr. Lisomar Barbosa - Advogado especialista em Direito Digital"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="p-8 md:p-12 rounded-2xl gradient-cyber border border-primary/20 text-center animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Minha Missão</h3>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Oferecer atendimento jurídico personalizado e acessível na área digital, protegendo seus dados, 
              seus ativos digitais e sua reputação online com ética, conhecimento técnico e compromisso total 
              com seus resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

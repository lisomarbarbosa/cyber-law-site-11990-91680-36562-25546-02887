import { Shield, Lock, Gavel, Users, FileText, Bitcoin, UserCheck, Database, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PracticeAreas = () => {
  const areas = [
    {
      icon: Lock,
      title: "LGPD e Proteção de Dados",
      description: "Adequação à LGPD, consultoria em privacidade, políticas de dados e DPO as a Service.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Crimes Digitais",
      description: "Defesa e acusação em casos de crimes cibernéticos, invasões, fraudes online e calúnia digital.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Gavel,
      title: "Marco Civil da Internet",
      description: "Consultoria sobre responsabilidade de provedores, remoção de conteúdo e direitos na web.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FileText,
      title: "Contratos Digitais",
      description: "Elaboração e revisão de contratos de software, SaaS, licenciamento e propriedade intelectual.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Direito do Consumidor Digital",
      description: "Defesa em e-commerce, publicidade enganosa online e direitos do consumidor no digital.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Bitcoin,
      title: "Criptoativos e Blockchain",
      description: "Proteção jurídica de criptomoedas, custódia segura de ativos digitais e consultoria em blockchain.",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: UserCheck,
      title: "Recuperação de Redes Sociais",
      description: "Recuperação de contas hackeadas, defesa contra perfis falsos e proteção da sua identidade digital.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Database,
      title: "Defesa contra Vazamento de Dados",
      description: "Atuação em casos de vazamento de informações pessoais ou empresariais, responsabilização de envolvidos e medidas de proteção imediata.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Cpu,
      title: "Consultoria em Inteligência Artificial e Novas Tecnologias",
      description: "Orientação jurídica sobre uso de IA, automação e novas tecnologias, prevenindo riscos legais e garantindo conformidade com a legislação.",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="areas" className="py-20 lg:py-32 bg-background/50 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Áreas de Atuação
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Expertise <span className="gradient-text">Multidisciplinar</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Cobertura completa em todas as vertentes do Direito Digital
            </p>
          </div>

          {/* Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <Card
                key={index}
                className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-smooth hover:shadow-cyber animate-scale-in cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Icon with gradient */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-bounce`}>
                      <area.icon size={32} className="text-white" />
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} blur-xl opacity-0 group-hover:opacity-50 transition-smooth`}></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                    {area.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;

import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LGPDErrosComuns = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/#artigos">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2" size={18} />
                Voltar para Artigos
              </Button>
            </Link>

            {/* Header */}
            <div className="mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                LGPD
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                LGPD na Prática: 5 Erros que Podem Custar Multas Milionárias
              </h1>
              <div className="flex items-center gap-6 text-foreground/60">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>28 Jan 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>7 min de leitura</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-cyber">
              <img
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&auto=format&fit=crop&q=80"
                alt="LGPD - Lei Geral de Proteção de Dados"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                A Lei Geral de Proteção de Dados (LGPD) está em vigor desde setembro de 2020, mas muitas empresas brasileiras 
                ainda cometem erros graves que podem resultar em multas de até R$ 50 milhões ou 2% do faturamento.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">1. Coletar Dados Sem Consentimento Adequado</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                O erro mais comum é coletar dados pessoais sem obter o consentimento livre, informado e inequívoco do titular. 
                Muitas empresas ainda usam checkboxes pré-marcados ou termos genéricos que não especificam claramente para 
                que os dados serão utilizados.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                <strong>Como evitar:</strong> Sempre solicite consentimento explícito, com linguagem clara e específica sobre 
                cada finalidade do tratamento de dados. O usuário deve ter a opção de aceitar ou recusar livremente.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">2. Não Ter um Encarregado de Dados (DPO)</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                A LGPD exige que empresas que tratam dados pessoais designem um Encarregado de Proteção de Dados (Data Protection Officer). 
                Muitas empresas ignoram essa obrigação ou nomeiam pessoas sem qualificação adequada.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                <strong>Como evitar:</strong> Designe um DPO qualificado e divulgue publicamente suas informações de contato. 
                O DPO deve ser o canal de comunicação entre a empresa, os titulares de dados e a ANPD.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">3. Manter Dados Além do Necessário</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Muitas empresas mantêm dados pessoais indefinidamente em seus sistemas, mesmo quando não há mais necessidade 
                para o tratamento. Isso viola o princípio da necessidade e pode gerar multas pesadas.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                <strong>Como evitar:</strong> Implemente políticas de retenção de dados com prazos claros. Elimine dados 
                quando a finalidade for alcançada ou quando o titular solicitar a exclusão.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">4. Compartilhar Dados Sem Base Legal</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Compartilhar dados pessoais com terceiros (parceiros, fornecedores, etc.) sem informar o titular ou sem 
                base legal adequada é uma violação grave da LGPD.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                <strong>Como evitar:</strong> Sempre informe os titulares sobre compartilhamento de dados e garanta que 
                existe base legal. Estabeleça contratos adequados com fornecedores que também processam dados pessoais.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">5. Não Ter Medidas de Segurança Adequadas</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Vazamentos de dados são cada vez mais comuns. Empresas que não implementam medidas técnicas e administrativas 
                de segurança adequadas estão sujeitas a multas significativas.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                <strong>Como evitar:</strong> Implemente criptografia, controle de acesso, backup regular, e treinamento 
                de equipe. Tenha um plano de resposta a incidentes pronto para agir rapidamente em caso de vazamento.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                A adequação à LGPD não é opcional. As penalidades podem ser severas e o dano à reputação pode ser irreversível. 
                Empresas devem tratar a proteção de dados como prioridade estratégica e investir em conformidade.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Se sua empresa ainda não está adequada à LGPD ou tem dúvidas sobre como implementar as melhores práticas, 
                entre em contato para uma consultoria especializada.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 rounded-2xl gradient-cyber border border-primary/20 text-center">
              <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda com LGPD?</h3>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                Proteja sua empresa contra multas e processos. Agende uma consulta para adequar seus processos à LGPD.
              </p>
              <Link to="/#contato">
                <Button size="lg" className="bg-gradient-accent text-background font-semibold shadow-cyber">
                  Agendar Consulta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default LGPDErrosComuns;

import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GolpesCriptomoedas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/#artigos">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2" size={18} />
                Voltar para Artigos
              </Button>
            </Link>

            <div className="mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Criptoativos
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Golpes com Criptomoedas: Como Se Proteger e Recuperar Seus Ativos
              </h1>
              <div className="flex items-center gap-6 text-foreground/60">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>15 Jan 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>9 min de leitura</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-cyber">
              <img
                src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=1200&auto=format&fit=crop&q=80"
                alt="Criptomoedas e segurança digital"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                O mercado de criptomoedas movimenta bilhões de reais no Brasil, mas também atrai golpistas. 
                Conheça os principais golpes e aprenda a se proteger.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Os Golpes Mais Comuns</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">1. Pirâmides Financeiras Disfarçadas</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Promessas de retornos garantidos e extraordinários são o primeiro sinal de alerta. Golpistas criam 
                plataformas que parecem legítimas, mas na verdade são esquemas Ponzi que usam o dinheiro de novos 
                investidores para pagar os antigos.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Phishing e Sites Falsos</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Criminosos criam sites idênticos a exchanges famosas para roubar suas credenciais e criptomoedas. 
                Sempre verifique o URL antes de fazer login e nunca clique em links suspeitos recebidos por e-mail ou mensagem.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Falsos Investimentos em ICOs</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Ofertas Iniciais de Moedas (ICOs) falsas prometem novos tokens revolucionários. Os golpistas arrecadam 
                o dinheiro e desaparecem, deixando os investidores sem nada.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Como Se Proteger</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Verifique a Autenticidade</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Antes de investir, pesquise sobre a empresa, leia reviews independentes e verifique se a plataforma 
                está registrada na CVM (se aplicável). Desconfie de promessas de lucros garantidos.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Use Autenticação de Dois Fatores (2FA)</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Sempre ative 2FA em suas contas de exchanges e carteiras digitais. Prefira aplicativos autenticadores 
                em vez de SMS, que pode ser interceptado.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Mantenha Suas Chaves Privadas em Segurança</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Nunca compartilhe suas chaves privadas ou seed phrases. Guarde-as offline em local seguro. 
                Considere usar hardware wallets para valores significativos.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">O Que Fazer Se For Vítima</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">1. Documente Tudo</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Faça capturas de tela de todas as transações, conversas, sites e e-mails relacionados ao golpe. 
                Essa documentação será crucial para a investigação e eventual recuperação.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Registre Boletim de Ocorrência</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Procure uma delegacia de polícia, preferencialmente especializada em crimes cibernéticos, e 
                registre um boletim de ocorrência detalhado.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Busque Assessoria Jurídica Especializada</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Um advogado especializado em direito digital e criptoativos pode ajudá-lo a rastrear os ativos, 
                identificar os responsáveis e tomar medidas legais para recuperação dos valores.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Medidas Legais Disponíveis</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                No Brasil, existem diversos mecanismos legais para buscar a recuperação de criptoativos perdidos em golpes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li>Ação de ressarcimento de danos</li>
                <li>Medidas cautelares para bloqueio de ativos</li>
                <li>Cooperação com autoridades para investigação criminal</li>
                <li>Rastreamento blockchain para identificar destino dos ativos</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                O mercado de criptomoedas oferece grandes oportunidades, mas exige cautela e conhecimento. Mantenha-se 
                informado, use medidas de segurança adequadas e não hesite em buscar ajuda profissional se suspeitar 
                de um golpe.
              </p>
            </div>

            <div className="mt-16 p-8 rounded-2xl gradient-cyber border border-primary/20 text-center">
              <h3 className="text-2xl font-bold mb-4">Foi Vítima de Golpe com Criptomoedas?</h3>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                Consultoria especializada em recuperação de criptoativos e ações contra fraudes digitais.
              </p>
              <Link to="/#contato">
                <Button size="lg" className="bg-gradient-accent text-background font-semibold shadow-cyber">
                  Buscar Ajuda Jurídica
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

export default GolpesCriptomoedas;

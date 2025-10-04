import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock, Key, Shield, AlertCircle } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CustodiaCriptoativos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6 group">
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-smooth" size={18} />
                Voltar aos Artigos
              </Button>
            </Link>

            <article className="animate-fade-in">
              <header className="mb-12">
                <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  Criptoativos
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Custódia Segura de Criptoativos: Guia Completo para Investidores
                </h1>
                <div className="flex items-center gap-4 text-sm text-foreground/60 mb-8">
                  <span>10 Dez 2024</span>
                  <span>•</span>
                  <span>10 min de leitura</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop&q=80" 
                  alt="Custódia Segura de Criptoativos"
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                />
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                  Proteger suas criptomoedas vai muito além de senhas fortes. Conheça as melhores práticas de custódia, desde cold wallets até multi-assinatura, além dos aspectos legais da posse de criptoativos no Brasil.
                </p>

                <Card className="p-6 bg-accent/10 border-accent/20 mb-8">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold mb-2">Princípio Fundamental</h3>
                      <p className="text-sm text-foreground/80">
                        "Not your keys, not your coins" - Se você não controla suas chaves privadas, você não tem controle total sobre seus criptoativos.
                      </p>
                    </div>
                  </div>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Lock className="text-primary" size={28} />
                  Tipos de Custódia
                </h2>

                <div className="space-y-8 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">1. Hot Wallets (Carteiras Quentes)</h3>
                    <p className="text-foreground/80 leading-relaxed mb-3">
                      Carteiras conectadas à internet, ideais para transações frequentes.
                    </p>
                    <div className="pl-6">
                      <p className="font-semibold mb-2">Vantagens:</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex gap-2"><span className="text-primary">✓</span> Acesso rápido e conveniente</li>
                        <li className="flex gap-2"><span className="text-primary">✓</span> Fácil de usar para iniciantes</li>
                        <li className="flex gap-2"><span className="text-primary">✓</span> Ideal para trading ativo</li>
                      </ul>
                      <p className="font-semibold mb-2">Desvantagens:</p>
                      <ul className="space-y-2">
                        <li className="flex gap-2"><span className="text-destructive">✗</span> Vulnerável a hackers</li>
                        <li className="flex gap-2"><span className="text-destructive">✗</span> Risco de phishing</li>
                        <li className="flex gap-2"><span className="text-destructive">✗</span> Dependência da segurança do provedor</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">2. Cold Wallets (Carteiras Frias)</h3>
                    <p className="text-foreground/80 leading-relaxed mb-3">
                      Dispositivos físicos (hardware wallets) ou carteiras offline, recomendadas para armazenamento de longo prazo.
                    </p>
                    <div className="pl-6">
                      <p className="font-semibold mb-2">Vantagens:</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex gap-2"><span className="text-primary">✓</span> Máxima segurança contra ataques online</li>
                        <li className="flex gap-2"><span className="text-primary">✓</span> Controle total das chaves privadas</li>
                        <li className="flex gap-2"><span className="text-primary">✓</span> Ideal para grandes quantias</li>
                      </ul>
                      <p className="font-semibold mb-2">Desvantagens:</p>
                      <ul className="space-y-2">
                        <li className="flex gap-2"><span className="text-destructive">✗</span> Menos conveniente para transações frequentes</li>
                        <li className="flex gap-2"><span className="text-destructive">✗</span> Custo inicial do hardware</li>
                        <li className="flex gap-2"><span className="text-destructive">✗</span> Risco de perda física do dispositivo</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">3. Custódia por Terceiros</h3>
                    <p className="text-foreground/80 leading-relaxed mb-3">
                      Exchanges e instituições financeiras que guardam seus ativos.
                    </p>
                    <div className="pl-6">
                      <p className="font-semibold mb-2">Vantagens:</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex gap-2"><span className="text-primary">✓</span> Não precisa gerenciar chaves privadas</li>
                        <li className="flex gap-2"><span className="text-primary">✓</span> Suporte ao cliente</li>
                        <li className="flex gap-2"><span className="text-primary">✓</span> Alguns oferecem seguros</li>
                      </ul>
                      <p className="font-semibold mb-2">Desvantagens:</p>
                      <ul className="space-y-2">
                        <li className="flex gap-2"><span className="text-destructive">✗</span> Você não controla suas chaves</li>
                        <li className="flex gap-2"><span className="text-destructive">✗</span> Risco de falência ou hack da exchange</li>
                        <li className="flex gap-2"><span className="text-destructive">✗</span> Pode haver limitações de saque</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Key className="text-primary" size={28} />
                  Melhores Práticas de Segurança
                </h2>

                <div className="space-y-4 mb-12">
                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3">1. Backup da Seed Phrase</h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">• Anote as 12-24 palavras em papel, nunca digitalmente</li>
                      <li className="flex gap-2">• Guarde em local seguro (cofre, banco)</li>
                      <li className="flex gap-2">• Considere múltiplas cópias em locais diferentes</li>
                      <li className="flex gap-2">• Nunca fotografe ou armazene em nuvem</li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3">2. Multi-Assinatura (Multisig)</h3>
                    <p className="text-foreground/80 mb-3">
                      Requer múltiplas chaves privadas para autorizar transações (ex: 2 de 3, 3 de 5).
                    </p>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">• Ideal para empresas ou grandes quantias</li>
                      <li className="flex gap-2">• Proteção contra roubo de uma única chave</li>
                      <li className="flex gap-2">• Permite herança planejada</li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3">3. Segregação de Ativos</h3>
                    <p className="text-foreground/80">
                      Divida seus criptoativos entre diferentes tipos de carteiras conforme o uso:
                    </p>
                    <ul className="space-y-2 text-foreground/80 mt-3">
                      <li className="flex gap-2">• <strong>90%</strong> em cold wallet (longo prazo)</li>
                      <li className="flex gap-2">• <strong>8%</strong> em hot wallet pessoal (uso regular)</li>
                      <li className="flex gap-2">• <strong>2%</strong> em exchange (trading ativo)</li>
                    </ul>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Shield className="text-primary" size={28} />
                  Aspectos Legais no Brasil
                </h2>

                <div className="space-y-6 mb-12">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Regulamentação em 2024</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      A Lei 14.478/2022 trouxe segurança jurídica ao mercado de criptoativos no Brasil, estabelecendo regras para prestadores de serviços e proteção aos investidores.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Tributação</h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">• Ganhos de capital são tributados em 15% a 22,5%</li>
                      <li className="flex gap-2">• Vendas mensais até R$ 35 mil são isentas</li>
                      <li className="flex gap-2">• Declaração obrigatória no Imposto de Renda</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Sucessão e Herança</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Planeje a sucessão de seus criptoativos com testamento específico ou protocolo de recuperação para herdeiros, evitando a perda permanente dos ativos.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">Checklist de Segurança</h2>

                <ul className="space-y-3 mb-12">
                  <li className="flex gap-3">
                    <span className="text-primary">☐</span>
                    <span>Migrar 90% dos ativos para cold wallet</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">☐</span>
                    <span>Fazer backup físico da seed phrase em local seguro</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">☐</span>
                    <span>Ativar autenticação de dois fatores em todas as contas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">☐</span>
                    <span>Usar e-mail dedicado exclusivamente para criptoativos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">☐</span>
                    <span>Implementar multisig para quantias acima de R$ 50 mil</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">☐</span>
                    <span>Criar protocolo de sucessão para herdeiros</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">☐</span>
                    <span>Documentar todas as transações para fins fiscais</span>
                  </li>
                </ul>

                <Card className="p-8 bg-primary/5 border-primary/20 mt-12">
                  <h3 className="text-2xl font-bold mb-4">Precisa de Consultoria Especializada?</h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Posso auxiliar na estruturação jurídica da custódia dos seus criptoativos, planejamento sucessório e adequação à legislação brasileira.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg">
                      <a href="https://wa.me/5591980300890" target="_blank" rel="noopener noreferrer">
                        Agendar Consulta
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/#contato">
                        Saiba Mais
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CustodiaCriptoativos;

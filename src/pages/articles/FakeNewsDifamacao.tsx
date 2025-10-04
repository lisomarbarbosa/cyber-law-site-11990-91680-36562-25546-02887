import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, AlertTriangle, Scale, Ban } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const FakeNewsDifamacao = () => {
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
                  Crimes Digitais
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Fake News e Difamação Online: Como Proteger Sua Reputação
                </h1>
                <div className="flex items-center gap-4 text-sm text-foreground/60 mb-8">
                  <span>22 Nov 2024</span>
                  <span>•</span>
                  <span>7 min de leitura</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1585241645927-c7a8e5840c42?w=1200&auto=format&fit=crop&q=80" 
                  alt="Fake News e Difamação Online"
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                />
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                  Notícias falsas e comentários difamatórios nas redes sociais podem destruir reputações pessoais e profissionais em questão de horas. Conheça os mecanismos legais para remover conteúdo ofensivo e buscar reparação de danos.
                </p>

                <Card className="p-6 bg-accent/10 border-accent/20 mb-8">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold mb-2">Aja Rapidamente</h3>
                      <p className="text-sm text-foreground/80">
                        Quanto mais tempo um conteúdo difamatório permanece online, mais danos pode causar. A lei permite medidas urgentes para remoção.
                      </p>
                    </div>
                  </div>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Ban className="text-primary" size={28} />
                  Diferenças Entre os Crimes
                </h2>

                <div className="space-y-6 mb-12">
                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3">Difamação (Art. 139 do CP)</h3>
                    <p className="text-foreground/80 mb-3">
                      Imputar a alguém fato ofensivo à sua reputação, mesmo que seja verdadeiro.
                    </p>
                    <p className="text-sm text-foreground/70 mb-2">
                      <strong>Pena:</strong> Detenção de 3 meses a 1 ano, e multa.
                    </p>
                    <p className="text-sm text-foreground/70">
                      <strong>Exemplo:</strong> "Fulano não paga suas contas" (mesmo que seja verdade, ofende a reputação).
                    </p>
                  </Card>

                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3">Calúnia (Art. 138 do CP)</h3>
                    <p className="text-foreground/80 mb-3">
                      Imputar falsamente a alguém a prática de crime.
                    </p>
                    <p className="text-sm text-foreground/70 mb-2">
                      <strong>Pena:</strong> Detenção de 6 meses a 2 anos, e multa.
                    </p>
                    <p className="text-sm text-foreground/70">
                      <strong>Exemplo:</strong> "Fulano roubou dinheiro da empresa" (acusação falsa de crime).
                    </p>
                  </Card>

                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3">Injúria (Art. 140 do CP)</h3>
                    <p className="text-foreground/80 mb-3">
                      Ofender a dignidade ou decoro de alguém.
                    </p>
                    <p className="text-sm text-foreground/70 mb-2">
                      <strong>Pena:</strong> Detenção de 1 a 6 meses, ou multa.
                    </p>
                    <p className="text-sm text-foreground/70">
                      <strong>Exemplo:</strong> Xingamentos, ofensas pessoais ("idiota", "incompetente", etc.).
                    </p>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Shield className="text-primary" size={28} />
                  Como Agir em Casos de Difamação Online
                </h2>

                <ol className="space-y-6 mb-12">
                  <li>
                    <h3 className="text-xl font-bold mb-3">1. Preserve as Evidências</h3>
                    <p className="text-foreground/80 leading-relaxed mb-3">
                      Antes de qualquer coisa, documente o conteúdo:
                    </p>
                    <ul className="space-y-2 text-foreground/80 pl-6">
                      <li className="flex gap-2">• Tire prints completos (com URL, data, hora e perfil do autor)</li>
                      <li className="flex gap-2">• Salve páginas completas em PDF</li>
                      <li className="flex gap-2">• Considere ata notarial (cartório) para maior robustez jurídica</li>
                      <li className="flex gap-2">• Grave vídeos se for conteúdo audiovisual</li>
                    </ul>
                  </li>

                  <li>
                    <h3 className="text-xl font-bold mb-3">2. Notificação Extrajudicial</h3>
                    <p className="text-foreground/80 leading-relaxed mb-3">
                      Envie notificação formal ao autor do conteúdo solicitando:
                    </p>
                    <ul className="space-y-2 text-foreground/80 pl-6">
                      <li className="flex gap-2">• Remoção imediata do conteúdo</li>
                      <li className="flex gap-2">• Retratação pública</li>
                      <li className="flex gap-2">• Identificação de terceiros envolvidos na disseminação</li>
                    </ul>
                    <p className="text-sm text-foreground/70 mt-3">
                      <strong>Dica:</strong> A notificação extrajudicial muitas vezes resolve o problema rapidamente e evita custos judiciais.
                    </p>
                  </li>

                  <li>
                    <h3 className="text-xl font-bold mb-3">3. Solicitação às Plataformas</h3>
                    <p className="text-foreground/80 leading-relaxed mb-3">
                      O Marco Civil da Internet permite solicitar remoção diretamente às plataformas (Facebook, Instagram, Twitter, Google):
                    </p>
                    <ul className="space-y-2 text-foreground/80 pl-6">
                      <li className="flex gap-2">• Use os canais oficiais de denúncia</li>
                      <li className="flex gap-2">• Descreva claramente por que o conteúdo é ilícito</li>
                      <li className="flex gap-2">• Anexe documentos comprobatórios</li>
                    </ul>
                  </li>

                  <li>
                    <h3 className="text-xl font-bold mb-3">4. Medida Judicial Urgente</h3>
                    <p className="text-foreground/80 leading-relaxed mb-3">
                      Se o conteúdo não for removido, procure um advogado para:
                    </p>
                    <ul className="space-y-2 text-foreground/80 pl-6">
                      <li className="flex gap-2">• Obter liminar de remoção imediata</li>
                      <li className="flex gap-2">• Identificar autores anônimos (quebra de sigilo de dados)</li>
                      <li className="flex gap-2">• Bloquear propagação do conteúdo</li>
                    </ul>
                  </li>

                  <li>
                    <h3 className="text-xl font-bold mb-3">5. Ação Criminal e Cível</h3>
                    <p className="text-foreground/80 leading-relaxed mb-3">
                      Após a remoção, você pode buscar:
                    </p>
                    <ul className="space-y-2 text-foreground/80 pl-6">
                      <li className="flex gap-2">• <strong>Criminal:</strong> Punição do autor (detenção e multa)</li>
                      <li className="flex gap-2">• <strong>Cível:</strong> Indenização por danos morais e materiais</li>
                    </ul>
                  </li>
                </ol>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Scale className="text-primary" size={28} />
                  Danos Indenizáveis
                </h2>

                <div className="space-y-4 mb-12">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Danos Morais</h3>
                    <p className="text-foreground/80 leading-relaxed mb-2">
                      Compensação pelo sofrimento psicológico, constrangimento, humilhação e abalo à reputação.
                    </p>
                    <p className="text-sm text-foreground/70">
                      <strong>Valores:</strong> Variam de R$ 5 mil a mais de R$ 100 mil, dependendo da gravidade, repercussão e capacidade econômica do ofensor.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Danos Materiais</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Comprovação de prejuízos financeiros diretos causados pela difamação (perda de clientes, cancelamento de contratos, gastos com gestão de crise, etc.).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Lucros Cessantes</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Valores que você deixou de ganhar em razão da difamação (oportunidades profissionais perdidas, redução de faturamento comprovada).
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">Fake News: Combate Especializado</h2>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  Notícias falsas possuem tratamento específico quando:
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Envolvem eleições (Lei 9.504/97 com penas agravadas)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Causam pânico ou afetam a saúde pública (Lei 13.979/2020)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Comprometem a segurança nacional</span>
                  </li>
                </ul>

                <Card className="p-6 border-accent/20 mb-12">
                  <h3 className="text-xl font-bold mb-3">Direito de Resposta</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Além da remoção, você tem direito constitucional de resposta proporcional ao agravo, podendo exigir publicação de retratação ou esclarecimento no mesmo veículo que divulgou a ofensa.
                  </p>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6">Prevenção e Gestão de Reputação</h2>

                <ul className="space-y-3 mb-12">
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Configure alertas do Google com seu nome para monitorar menções</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Mantenha perfis profissionais atualizados e com informações corretas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Produza conteúdo positivo regularmente para fortalecer sua imagem</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Tenha protocolos de resposta a crises de reputação</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Documente suas conquistas e condutas éticas</span>
                  </li>
                </ul>

                <Card className="p-8 bg-primary/5 border-primary/20 mt-12">
                  <h3 className="text-2xl font-bold mb-4">Proteja Sua Reputação</h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Se você é vítima de difamação, calúnia ou fake news, posso atuar rapidamente para remover o conteúdo e buscar reparação judicial.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg">
                      <a href="https://wa.me/5591980300890" target="_blank" rel="noopener noreferrer">
                        Atendimento Urgente
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

export default FakeNewsDifamacao;

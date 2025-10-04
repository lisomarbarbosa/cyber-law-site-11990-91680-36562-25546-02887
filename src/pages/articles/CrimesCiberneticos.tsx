import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, AlertTriangle, FileText, Phone } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CrimesCiberneticos = () => {
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
              {/* Header */}
              <header className="mb-12">
                <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  Crimes Digitais
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Crimes Cibernéticos: O Que Fazer ao Ser Vítima de Extorsão Online
                </h1>
                <div className="flex items-center gap-4 text-sm text-foreground/60 mb-8">
                  <span>20 Dez 2024</span>
                  <span>•</span>
                  <span>8 min de leitura</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop&q=80" 
                  alt="Crimes Cibernéticos e Extorsão Online"
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                />
              </header>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                  Extorsão digital, vazamento de dados pessoais e chantagem online são crimes graves que podem causar prejuízos financeiros e emocionais significativos. Entenda seus direitos e como agir rapidamente para minimizar danos.
                </p>

                <Card className="p-6 bg-accent/10 border-accent/20 mb-8">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold mb-2">Atenção: Tempo é Essencial</h3>
                      <p className="text-sm text-foreground/80">
                        Em casos de extorsão digital, cada minuto conta. Não pague resgates sem consultar um advogado especializado e registre um boletim de ocorrência imediatamente.
                      </p>
                    </div>
                  </div>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Shield className="text-primary" size={28} />
                  Tipos Comuns de Extorsão Digital
                </h2>

                <div className="space-y-6 mb-12">
                  <div>
                    <h3 className="text-xl font-bold mb-3">1. Ransomware</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Software malicioso que criptografa seus arquivos e exige pagamento em criptomoedas para liberá-los. Pode atingir indivíduos, empresas e até órgãos públicos.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">2. Sextortion</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Chantagem com conteúdo íntimo ou comprometedor, real ou fabricado, ameaçando divulgação para familiares, amigos ou redes sociais.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">3. Vazamento de Dados</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Ameaça de divulgar dados pessoais, financeiros ou corporativos obtidos através de invasões, phishing ou comprados na dark web.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">4. DDoS com Extorsão</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Ameaça de derrubar sites ou sistemas online com ataques de negação de serviço, causando prejuízos financeiros significativos.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <FileText className="text-primary" size={28} />
                  Primeiros Passos ao Ser Vítima
                </h2>

                <ol className="space-y-4 mb-12">
                  <li className="flex gap-4">
                    <span className="font-bold text-primary">1.</span>
                    <div>
                      <strong>NÃO PAGUE IMEDIATAMENTE</strong> - Pagamentos não garantem solução e podem encorajar mais crimes.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-primary">2.</span>
                    <div>
                      <strong>Preserve as Evidências</strong> - Faça capturas de tela de todas as mensagens, e-mails e comunicações do criminoso.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-primary">3.</span>
                    <div>
                      <strong>Registre Boletim de Ocorrência</strong> - Procure a Delegacia de Crimes Cibernéticos ou faça registro online.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-primary">4.</span>
                    <div>
                      <strong>Consulte um Advogado Especializado</strong> - Profissional pode avaliar o caso e orientar sobre medidas legais cabíveis.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-primary">5.</span>
                    <div>
                      <strong>Notifique Plataformas</strong> - Informe redes sociais, bancos ou serviços envolvidos sobre o incidente.
                    </div>
                  </li>
                </ol>

                <h2 className="text-3xl font-bold mt-12 mb-6">Medidas Legais Disponíveis</h2>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  A legislação brasileira prevê punições severas para crimes cibernéticos:
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>Extorsão (Art. 158 do CP):</strong> Reclusão de 4 a 10 anos e multa</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>Invasão de Dispositivo (Lei 12.737/2012):</strong> Detenção de 3 meses a 1 ano e multa</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>Violação de Dados (LGPD):</strong> Multas administrativas e responsabilização civil</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Prevenção: Como se Proteger</h2>

                <ul className="space-y-3 mb-12">
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Use autenticação de dois fatores em todas as contas importantes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Mantenha backups atualizados e offline de dados importantes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Não clique em links suspeitos ou baixe anexos de remetentes desconhecidos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Mantenha sistemas operacionais e antivírus atualizados</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Use VPN em redes Wi-Fi públicas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Eduque funcionários sobre segurança cibernética (empresas)</span>
                  </li>
                </ul>

                <Card className="p-8 bg-primary/5 border-primary/20 mt-12">
                  <div className="flex items-start gap-4">
                    <Phone className="text-primary flex-shrink-0 mt-1" size={32} />
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Precisa de Assistência Jurídica?</h3>
                      <p className="text-foreground/80 mb-6 leading-relaxed">
                        Se você foi vítima de extorsão digital ou outro crime cibernético, entre em contato para uma consulta especializada. Atuo com urgência em casos de crimes digitais.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg">
                          <a href="https://wa.me/5591980300890" target="_blank" rel="noopener noreferrer">
                            Consulta de Emergência
                          </a>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                          <Link to="/#contato">
                            Agendar Consulta
                          </Link>
                        </Button>
                      </div>
                    </div>
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

export default CrimesCiberneticos;

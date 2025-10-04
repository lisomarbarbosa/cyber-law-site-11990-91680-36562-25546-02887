import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, FileText, Users, Database } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ComplianceLGPD = () => {
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
                  LGPD
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Compliance em LGPD: Checklist Completo para Empresas
                </h1>
                <div className="flex items-center gap-4 text-sm text-foreground/60 mb-8">
                  <span>15 Nov 2024</span>
                  <span>•</span>
                  <span>12 min de leitura</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80" 
                  alt="Compliance em LGPD para Empresas"
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                />
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                  Adequar sua empresa à LGPD não precisa ser complicado. Este guia completo abrange desde o mapeamento de dados até a implementação de políticas de privacidade, garantindo conformidade legal e evitando multas milionárias.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Database className="text-primary" size={28} />
                  Fase 1: Mapeamento de Dados
                </h2>

                <Card className="p-6 border-primary/20 mb-8">
                  <h3 className="text-xl font-bold mb-4">1.1 Inventário de Dados Pessoais</h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span>Liste todos os dados pessoais coletados (nome, CPF, e-mail, telefone, endereço, dados bancários, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span>Identifique dados sensíveis (origem racial/étnica, convicções religiosas, opiniões políticas, dados de saúde, biométricos, genéticos)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span>Mapeie dados de crianças e adolescentes (requer atenção especial)</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-primary/20 mb-8">
                  <h3 className="text-xl font-bold mb-4">1.2 Fluxo de Dados</h3>
                  <p className="text-foreground/80 mb-4">Para cada tipo de dado, documente:</p>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span><strong>Origem:</strong> Como e onde os dados são coletados (formulários web, aplicativos, atendimento presencial)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span><strong>Finalidade:</strong> Por que os dados são coletados (prestação de serviço, marketing, contabilidade)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span><strong>Armazenamento:</strong> Onde os dados ficam guardados (servidores próprios, nuvem, terceiros)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span><strong>Compartilhamento:</strong> Com quem os dados são compartilhados (fornecedores, parceiros, órgãos públicos)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span><strong>Tempo de retenção:</strong> Por quanto tempo os dados são mantidos</span>
                    </li>
                  </ul>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <FileText className="text-primary" size={28} />
                  Fase 2: Base Legal
                </h2>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  Para cada tratamento de dados, identifique a base legal aplicável (Art. 7º da LGPD):
                </p>

                <div className="space-y-4 mb-12">
                  <Card className="p-4 border-border/30">
                    <h4 className="font-bold mb-2">✓ Consentimento</h4>
                    <p className="text-sm text-foreground/80">Quando o titular autoriza expressamente (ex: newsletters, marketing)</p>
                  </Card>
                  <Card className="p-4 border-border/30">
                    <h4 className="font-bold mb-2">✓ Cumprimento de Obrigação Legal</h4>
                    <p className="text-sm text-foreground/80">Exigências legais ou regulatórias (ex: emissão de nota fiscal)</p>
                  </Card>
                  <Card className="p-4 border-border/30">
                    <h4 className="font-bold mb-2">✓ Execução de Contrato</h4>
                    <p className="text-sm text-foreground/80">Necessário para prestação do serviço contratado</p>
                  </Card>
                  <Card className="p-4 border-border/30">
                    <h4 className="font-bold mb-2">✓ Legítimo Interesse</h4>
                    <p className="text-sm text-foreground/80">Interesses legítimos da empresa (com teste de proporcionalidade)</p>
                  </Card>
                  <Card className="p-4 border-border/30">
                    <h4 className="font-bold mb-2">✓ Proteção da Vida</h4>
                    <p className="text-sm text-foreground/80">Situações emergenciais de proteção à vida ou saúde</p>
                  </Card>
                  <Card className="p-4 border-border/30">
                    <h4 className="font-bold mb-2">✓ Tutela da Saúde</h4>
                    <p className="text-sm text-foreground/80">Procedimentos por profissionais de saúde</p>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Users className="text-primary" size={28} />
                  Fase 3: Governança e Responsabilidades
                </h2>

                <Card className="p-6 border-primary/20 mb-8">
                  <h3 className="text-xl font-bold mb-4">3.1 Nomeação do DPO</h3>
                  <p className="text-foreground/80 mb-4">
                    Designar um Encarregado de Proteção de Dados (DPO - Data Protection Officer):
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex gap-2">• Pode ser funcionário ou terceiro contratado</li>
                    <li className="flex gap-2">• Deve ter conhecimento técnico e jurídico</li>
                    <li className="flex gap-2">• Canal de comunicação direto com titulares e ANPD</li>
                    <li className="flex gap-2">• Divulgue publicamente identidade e contato do DPO</li>
                  </ul>
                </Card>

                <Card className="p-6 border-primary/20 mb-8">
                  <h3 className="text-xl font-bold mb-4">3.2 Comitê de Privacidade</h3>
                  <p className="text-foreground/80 mb-4">
                    Crie um comitê multidisciplinar com representantes de:
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex gap-2">• TI / Segurança da Informação</li>
                    <li className="flex gap-2">• Jurídico</li>
                    <li className="flex gap-2">• RH</li>
                    <li className="flex gap-2">• Marketing</li>
                    <li className="flex gap-2">• Áreas que lidam diretamente com dados</li>
                  </ul>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6">Fase 4: Políticas e Documentos</h2>

                <div className="space-y-6 mb-12">
                  <Card className="p-6 border-border/30">
                    <h3 className="text-lg font-bold mb-3">Política de Privacidade</h3>
                    <p className="text-sm text-foreground/80 mb-3">
                      Documento público explicando como a empresa coleta, usa e protege dados pessoais.
                    </p>
                    <p className="text-xs text-foreground/70">
                      <strong>Deve conter:</strong> tipos de dados, finalidades, bases legais, compartilhamento, direitos dos titulares, prazo de retenção, segurança e contato do DPO.
                    </p>
                  </Card>

                  <Card className="p-6 border-border/30">
                    <h3 className="text-lg font-bold mb-3">Termos de Uso</h3>
                    <p className="text-sm text-foreground/80">
                      Regras de utilização de plataformas, aplicativos ou serviços, incluindo cláusulas de privacidade.
                    </p>
                  </Card>

                  <Card className="p-6 border-border/30">
                    <h3 className="text-lg font-bold mb-3">Política de Cookies</h3>
                    <p className="text-sm text-foreground/80">
                      Se seu site usa cookies, informe quais são usados, finalidades e permita que usuários gerenciem preferências.
                    </p>
                  </Card>

                  <Card className="p-6 border-border/30">
                    <h3 className="text-lg font-bold mb-3">Contratos com Terceiros</h3>
                    <p className="text-sm text-foreground/80">
                      Revise contratos com fornecedores que acessam dados (operadores). Inclua cláusulas de proteção de dados, responsabilidades e obrigações de segurança.
                    </p>
                  </Card>

                  <Card className="p-6 border-border/30">
                    <h3 className="text-lg font-bold mb-3">Política Interna de Segurança</h3>
                    <p className="text-sm text-foreground/80">
                      Regras para funcionários sobre acesso, compartilhamento e proteção de dados pessoais.
                    </p>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">Fase 5: Segurança Técnica</h2>

                <ul className="space-y-3 mb-12">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span><strong>Criptografia:</strong> Dados sensíveis devem ser criptografados em trânsito (SSL/TLS) e em repouso</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span><strong>Controle de Acesso:</strong> Princípio do menor privilégio - apenas quem precisa tem acesso</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span><strong>Autenticação:</strong> Senhas fortes e autenticação multifator (2FA)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span><strong>Backup:</strong> Cópias de segurança regulares e testadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span><strong>Logs:</strong> Registros de acesso e modificações em dados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span><strong>Atualização:</strong> Sistemas e softwares sempre atualizados com patches de segurança</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span><strong>Firewall e Antivírus:</strong> Proteção contra invasões e malwares</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Fase 6: Gestão de Incidentes</h2>

                <Card className="p-6 border-accent/20 mb-8">
                  <h3 className="text-xl font-bold mb-4">Plano de Resposta a Incidentes</h3>
                  <p className="text-foreground/80 mb-4">
                    Defina protocolo para casos de vazamento ou violação de dados:
                  </p>
                  <ol className="space-y-3 text-foreground/80">
                    <li className="flex gap-3">
                      <span className="font-bold">1.</span>
                      <span><strong>Detecção:</strong> Identificar a violação rapidamente</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold">2.</span>
                      <span><strong>Contenção:</strong> Parar o vazamento imediatamente</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold">3.</span>
                      <span><strong>Avaliação:</strong> Determinar extensão e gravidade</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold">4.</span>
                      <span><strong>Notificação à ANPD:</strong> Em até 2 dias úteis (prazo sugerido)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold">5.</span>
                      <span><strong>Comunicação aos Titulares:</strong> Informar afetados sobre o incidente</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold">6.</span>
                      <span><strong>Remediação:</strong> Corrigir vulnerabilidades</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold">7.</span>
                      <span><strong>Documentação:</strong> Registrar tudo para auditorias</span>
                    </li>
                  </ol>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6">Fase 7: Treinamento e Cultura</h2>

                <ul className="space-y-3 mb-12">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Treinamento obrigatório em LGPD para todos os colaboradores</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Capacitações específicas para áreas que lidam diretamente com dados</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Campanhas internas de conscientização sobre privacidade</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Inclusão de privacidade nas avaliações de desempenho</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Fase 8: Auditorias e Melhorias</h2>

                <ul className="space-y-3 mb-12">
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Realizar auditorias internas anuais de compliance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Revisar políticas e procedimentos periodicamente</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Manter registro de todas as atividades de tratamento (ROPA)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Acompanhar mudanças na legislação e jurisprudência</span>
                  </li>
                </ul>

                <Card className="p-8 bg-primary/5 border-primary/20 mt-12">
                  <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda com Adequação à LGPD?</h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Posso auxiliar sua empresa na implementação completa de um programa de compliance em LGPD, desde o mapeamento até a criação de políticas e treinamentos.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg">
                      <a href="https://wa.me/5591980300890" target="_blank" rel="noopener noreferrer">
                        Solicitar Proposta
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

export default ComplianceLGPD;

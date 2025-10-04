import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, FileCheck, UserX, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ProtecaoDadosPessoais = () => {
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
                  Proteção de Dados Pessoais: Seus Direitos na Era Digital
                </h1>
                <div className="flex items-center gap-4 text-sm text-foreground/60 mb-8">
                  <span>1 Dez 2024</span>
                  <span>•</span>
                  <span>6 min de leitura</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&auto=format&fit=crop&q=80" 
                  alt="Proteção de Dados Pessoais e Direitos"
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                />
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                  A Lei Geral de Proteção de Dados (LGPD) garante direitos fundamentais sobre seus dados pessoais. Descubra como solicitar exclusão de dados, corrigir informações incorretas e exercer plenamente sua privacidade online.
                </p>

                <Card className="p-6 bg-accent/10 border-accent/20 mb-8">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold mb-2">Você Sabia?</h3>
                      <p className="text-sm text-foreground/80">
                        Toda empresa que coleta seus dados pessoais é obrigada por lei a respeitar seus direitos como titular. Não exercer esses direitos é abrir mão da sua privacidade.
                      </p>
                    </div>
                  </div>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Shield className="text-primary" size={28} />
                  Direitos do Titular de Dados
                </h2>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  A LGPD (Lei 13.709/2018) garante aos cidadãos brasileiros direitos amplos sobre seus dados pessoais:
                </p>

                <div className="space-y-6 mb-12">
                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <FileCheck className="text-primary" size={22} />
                      1. Direito de Confirmação e Acesso
                    </h3>
                    <p className="text-foreground/80 mb-3">
                      Você pode solicitar a confirmação de que uma empresa possui seus dados e exigir acesso a todas as informações armazenadas sobre você.
                    </p>
                    <p className="text-sm text-foreground/70">
                      <strong>Como exercer:</strong> Envie um e-mail formal ao controlador dos dados (geralmente o DPO - Data Protection Officer) solicitando relatório completo.
                    </p>
                  </Card>

                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <FileCheck className="text-primary" size={22} />
                      2. Direito de Correção
                    </h3>
                    <p className="text-foreground/80 mb-3">
                      Dados incompletos, desatualizados ou inexatos devem ser corrigidos mediante sua solicitação.
                    </p>
                    <p className="text-sm text-foreground/70">
                      <strong>Como exercer:</strong> Identifique o dado incorreto e solicite a correção com documentação comprobatória, se necessário.
                    </p>
                  </Card>

                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <UserX className="text-primary" size={22} />
                      3. Direito de Exclusão (Direito ao Esquecimento)
                    </h3>
                    <p className="text-foreground/80 mb-3">
                      Você pode solicitar a eliminação de dados pessoais desnecessários, excessivos ou tratados em desconformidade com a LGPD.
                    </p>
                    <p className="text-sm text-foreground/70">
                      <strong>Exceções:</strong> Dados necessários para cumprimento de obrigação legal, exercício regular de direitos ou estudos por órgão de pesquisa podem não ser excluídos.
                    </p>
                  </Card>

                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3">4. Direito de Portabilidade</h3>
                    <p className="text-foreground/80 mb-3">
                      Transferir seus dados de um fornecedor de serviços para outro em formato estruturado e de uso comum.
                    </p>
                    <p className="text-sm text-foreground/70">
                      <strong>Exemplo:</strong> Migrar seu histórico médico de uma clínica para outra.
                    </p>
                  </Card>

                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3">5. Direito de Revogação do Consentimento</h3>
                    <p className="text-foreground/80 mb-3">
                      Você pode retirar o consentimento dado anteriormente para o tratamento de dados, salvo se houver outra base legal.
                    </p>
                    <p className="text-sm text-foreground/70">
                      <strong>Importante:</strong> A revogação não afeta a legalidade do tratamento realizado antes da retirada do consentimento.
                    </p>
                  </Card>

                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3">6. Direito de Oposição</h3>
                    <p className="text-foreground/80 mb-3">
                      Opor-se ao tratamento de dados quando este for realizado sem consentimento, com base em legítimo interesse do controlador.
                    </p>
                  </Card>

                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3">7. Direito de Informação</h3>
                    <p className="text-foreground/80">
                      Ser informado sobre com quem seus dados são compartilhados, para que finalidade e por quanto tempo serão armazenados.
                    </p>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">Como Exercer Seus Direitos</h2>

                <ol className="space-y-6 mb-12">
                  <li>
                    <h3 className="text-xl font-bold mb-3">1. Identifique o Controlador</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Localize nos termos de uso ou política de privacidade da empresa quem é o controlador dos dados e como contatá-lo (geralmente há um e-mail do DPO).
                    </p>
                  </li>

                  <li>
                    <h3 className="text-xl font-bold mb-3">2. Faça uma Solicitação Formal</h3>
                    <p className="text-foreground/80 leading-relaxed mb-3">
                      Envie um e-mail especificando claramente qual direito deseja exercer:
                    </p>
                    <Card className="p-4 bg-muted/30 border-border/30">
                      <p className="text-sm text-foreground/80 italic">
                        "Prezados, com base no Art. 18 da Lei 13.709/2018 (LGPD), solicito [especificar o direito: confirmação de dados/correção/exclusão/etc.]. Meu CPF é XXX.XXX.XXX-XX. Aguardo retorno em até 15 dias."
                      </p>
                    </Card>
                  </li>

                  <li>
                    <h3 className="text-xl font-bold mb-3">3. Aguarde o Prazo Legal</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      A empresa tem até 15 dias para responder. Se houver complexidade ou volume de solicitações, o prazo pode ser estendido, mas você deve ser informado.
                    </p>
                  </li>

                  <li>
                    <h3 className="text-xl font-bold mb-3">4. Caso de Negativa ou Omissão</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Se a empresa negar injustificadamente ou ignorar sua solicitação, você pode:
                    </p>
                    <ul className="space-y-2 mt-3 text-foreground/80">
                      <li className="flex gap-2">• Registrar reclamação na ANPD (Autoridade Nacional de Proteção de Dados)</li>
                      <li className="flex gap-2">• Procurar órgãos de defesa do consumidor (Procon)</li>
                      <li className="flex gap-2">• Buscar reparação judicial com auxílio de advogado especializado</li>
                    </ul>
                  </li>
                </ol>

                <h2 className="text-3xl font-bold mt-12 mb-6">Situações Comuns</h2>

                <div className="space-y-6 mb-12">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Dados em Redes Sociais</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Mesmo em plataformas globais como Facebook, Instagram, Google, você tem direitos garantidos pela LGPD se for residente do Brasil.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Dados em Empresas Falidas</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Em caso de falência, a empresa continua obrigada a proteger e, se solicitado, excluir seus dados. Procure o administrador judicial.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Vazamento de Dados</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Se seus dados foram vazados por falha de segurança da empresa, você tem direito a ser notificado e pode exigir reparação por danos causados.
                    </p>
                  </div>
                </div>

                <Card className="p-8 bg-primary/5 border-primary/20 mt-12">
                  <h3 className="text-2xl font-bold mb-4">Seus Direitos Foram Violados?</h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Se uma empresa não respeita seus direitos sob a LGPD ou você foi vítima de vazamento de dados, posso ajudar com orientação jurídica especializada.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg">
                      <a href="https://wa.me/5591980300890" target="_blank" rel="noopener noreferrer">
                        Consulta Gratuita
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

export default ProtecaoDadosPessoais;

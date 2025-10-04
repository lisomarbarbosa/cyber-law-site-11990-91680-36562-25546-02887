import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale, TrendingUp, Shield, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const RegulamentacaoCriptomoedas = () => {
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
                  Regulamentação de Criptomoedas no Brasil: O Que Mudou em 2024
                </h1>
                <div className="flex items-center gap-4 text-sm text-foreground/60 mb-8">
                  <span>5 Nov 2024</span>
                  <span>•</span>
                  <span>8 min de leitura</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1200&auto=format&fit=crop&q=80" 
                  alt="Regulamentação de Criptomoedas no Brasil"
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                />
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                  A nova legislação brasileira sobre criptoativos trouxe segurança jurídica para investidores e empresas do setor. Entenda as principais mudanças, obrigações e como se adequar ao novo marco regulatório.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Scale className="text-primary" size={28} />
                  Marco Legal dos Criptoativos
                </h2>

                <div className="space-y-6 mb-12">
                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3">Lei 14.478/2022</h3>
                    <p className="text-foreground/80 mb-4">
                      Sancionada em dezembro de 2022 e regulamentada em 2024, estabelece regras para prestadores de serviços de ativos virtuais (VASPs) no Brasil.
                    </p>
                    <p className="text-sm text-foreground/70">
                      <strong>Principais objetivos:</strong>
                    </p>
                    <ul className="space-y-2 text-sm text-foreground/80 mt-3">
                      <li className="flex gap-2">• Proteção aos investidores</li>
                      <li className="flex gap-2">• Combate à lavagem de dinheiro e financiamento ao terrorismo</li>
                      <li className="flex gap-2">• Segurança jurídica para o mercado</li>
                      <li className="flex gap-2">• Atração de investimentos</li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3">Órgãos Reguladores</h3>
                    <div className="space-y-3 text-foreground/80">
                      <div>
                        <p className="font-semibold mb-1">Banco Central do Brasil (BCB)</p>
                        <p className="text-sm">Supervisiona exchanges, custódia e outras atividades de criptoativos</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Comissão de Valores Mobiliários (CVM)</p>
                        <p className="text-sm">Regula security tokens e ofertas públicas de criptoativos</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Receita Federal</p>
                        <p className="text-sm">Fiscaliza declaração e tributação de ganhos com criptoativos</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <FileText className="text-primary" size={28} />
                  Principais Mudanças
                </h2>

                <div className="space-y-8 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">1. Autorização para Operar</h3>
                    <p className="text-foreground/80 leading-relaxed mb-3">
                      Exchanges e demais prestadores de serviços de criptoativos precisam de autorização do Banco Central para funcionar no Brasil.
                    </p>
                    <Card className="p-4 bg-muted/30 border-border/30">
                      <p className="text-sm text-foreground/80">
                        <strong>Prazo de adequação:</strong> Empresas já em funcionamento tiveram até junho de 2024 para solicitar autorização. Novas empresas devem obtê-la antes de iniciar operações.
                      </p>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">2. Segregação Patrimonial</h3>
                    <p className="text-foreground/80 leading-relaxed mb-3">
                      Os ativos dos clientes devem ser separados do patrimônio da exchange:
                    </p>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">• Criptomoedas dos clientes não podem ser usadas pela exchange</li>
                      <li className="flex gap-2">• Em caso de falência, os ativos dos clientes são protegidos</li>
                      <li className="flex gap-2">• Reduz risco de perda total em casos como FTX</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">3. Padrões de Segurança</h3>
                    <p className="text-foreground/80 leading-relaxed mb-3">
                      Empresas devem implementar:
                    </p>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">• Políticas de segurança cibernética</li>
                      <li className="flex gap-2">• Custódia segura (cold wallets para maioria dos ativos)</li>
                      <li className="flex gap-2">• Auditorias de segurança periódicas</li>
                      <li className="flex gap-2">• Planos de continuidade de negócios</li>
                      <li className="flex gap-2">• Seguros contra perdas e roubos</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">4. Transparência e Governança</h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">• Publicação de demonstrações financeiras auditadas</li>
                      <li className="flex gap-2">• Divulgação de políticas de prevenção à lavagem de dinheiro (PLD)</li>
                      <li className="flex gap-2">• Canal direto de comunicação com investidores</li>
                      <li className="flex gap-2">• Composição societária transparente</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">5. Prevenção à Lavagem de Dinheiro</h3>
                    <p className="text-foreground/80 leading-relaxed mb-3">
                      Exchanges devem seguir regras rigorosas de compliance:
                    </p>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">• Verificação de identidade (KYC - Know Your Customer)</li>
                      <li className="flex gap-2">• Monitoramento de transações suspeitas</li>
                      <li className="flex gap-2">• Comunicação ao COAF de operações atípicas</li>
                      <li className="flex gap-2">• Manutenção de registros por no mínimo 5 anos</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <TrendingUp className="text-primary" size={28} />
                  Tributação Atualizada
                </h2>

                <div className="space-y-6 mb-12">
                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3">Imposto de Renda sobre Ganho de Capital</h3>
                    <p className="text-foreground/80 mb-4">
                      Ganhos obtidos com venda de criptomoedas são tributados como ganho de capital:
                    </p>
                    <div className="space-y-3 text-sm text-foreground/80">
                      <div className="flex justify-between items-center">
                        <span>Vendas mensais até R$ 35.000</span>
                        <span className="font-bold text-primary">Isento</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Ganhos até R$ 5 milhões/ano</span>
                        <span className="font-bold">15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Ganhos de R$ 5 mi a R$ 10 mi/ano</span>
                        <span className="font-bold">17,5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Ganhos de R$ 10 mi a R$ 30 mi/ano</span>
                        <span className="font-bold">20%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Ganhos acima de R$ 30 mi/ano</span>
                        <span className="font-bold">22,5%</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3">Declaração Obrigatória</h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">• Declarar posse de criptoativos acima de R$ 5.000</li>
                      <li className="flex gap-2">• Informar operações mensais na declaração anual</li>
                      <li className="flex gap-2">• Declarar mesmo criptoativos mantidos em exchanges estrangeiras</li>
                      <li className="flex gap-2">• Não declarar pode resultar em multas de até 3% do valor omitido</li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-primary/20">
                    <h3 className="text-xl font-bold mb-3">Pagamento do Imposto</h3>
                    <p className="text-foreground/80 mb-3">
                      O imposto deve ser pago mensalmente através de DARF até o último dia útil do mês seguinte à venda.
                    </p>
                    <p className="text-sm text-foreground/70">
                      <strong>Atenção:</strong> A responsabilidade pelo cálculo e pagamento é do contribuinte, não da exchange.
                    </p>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                  <Shield className="text-primary" size={28} />
                  Direitos dos Investidores
                </h2>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  A nova regulamentação garante proteções importantes:
                </p>

                <ul className="space-y-3 mb-12">
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Acesso a informações claras sobre riscos e funcionamento das plataformas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Proteção dos ativos em caso de falência da exchange</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Canal de atendimento e reclamação acessível</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Possibilidade de recorrer ao Banco Central em caso de problemas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Transparência nas taxas e custos de operações</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6">Como Se Adequar</h2>

                <div className="space-y-6 mb-12">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Para Investidores</h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">• Use apenas exchanges autorizadas pelo Banco Central</li>
                      <li className="flex gap-2">• Mantenha registros detalhados de todas as transações</li>
                      <li className="flex gap-2">• Declare corretamente seus ativos no IR</li>
                      <li className="flex gap-2">• Pague os impostos devidos mensalmente</li>
                      <li className="flex gap-2">• Considere consultar um contador especializado</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Para Empresas do Setor</h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">• Solicite autorização ao Banco Central</li>
                      <li className="flex gap-2">• Implemente segregação patrimonial</li>
                      <li className="flex gap-2">• Estabeleça políticas de segurança robustas</li>
                      <li className="flex gap-2">• Crie programa de compliance e PLD</li>
                      <li className="flex gap-2">• Contrate consultoria jurídica especializada</li>
                    </ul>
                  </div>
                </div>

                <Card className="p-8 bg-primary/5 border-primary/20 mt-12">
                  <h3 className="text-2xl font-bold mb-4">Precisa de Assessoria Jurídica em Criptoativos?</h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Posso auxiliar tanto investidores quanto empresas do setor cripto a se adequarem à nova regulamentação, estruturar operações e resolver questões tributárias.
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

export default RegulamentacaoCriptomoedas;

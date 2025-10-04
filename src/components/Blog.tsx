import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      title: "LGPD na Prática: 5 Erros que Podem Custar Multas Milionárias",
      excerpt: "Empresas brasileiras estão sendo multadas por não adequarem seus processos à LGPD. Descubra os erros mais comuns e como evitá-los para proteger sua empresa.",
      date: "28 Jan 2025",
      readTime: "7 min",
      category: "LGPD",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=80",
      link: "/artigos/lgpd-erros-comuns"
    },
    {
      title: "Golpes com Criptomoedas: Como Se Proteger e Recuperar Seus Ativos",
      excerpt: "Golpes envolvendo Bitcoin e outras criptomoedas crescem no Brasil. Saiba identificar fraudes, proteger suas carteiras digitais e o que fazer se for vítima.",
      date: "15 Jan 2025",
      readTime: "9 min",
      category: "Criptoativos",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&auto=format&fit=crop&q=80",
      link: "/artigos/golpes-criptomoedas"
    },
    {
      title: "Instagram Hackeado? Passo a Passo para Recuperar sua Conta",
      excerpt: "Perdeu acesso à sua conta do Instagram? Veja o passo a passo jurídico para recuperar perfis hackeados, proteger sua identidade digital e prevenir novos ataques.",
      date: "8 Jan 2025",
      readTime: "6 min",
      category: "Redes Sociais",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&auto=format&fit=crop&q=80",
      link: "/artigos/instagram-hackeado"
    },
    {
      title: "Crimes Cibernéticos: O Que Fazer ao Ser Vítima de Extorsão Online",
      excerpt: "Extorsão digital, vazamento de dados pessoais e chantagem online são crimes graves. Entenda seus direitos e como agir rapidamente para minimizar danos.",
      date: "20 Dez 2024",
      readTime: "8 min",
      category: "Crimes Digitais",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
      link: "/artigos/crimes-ciberneticos"
    },
    {
      title: "Custódia Segura de Criptoativos: Guia Completo para Investidores",
      excerpt: "Proteger suas criptomoedas vai além de senhas fortes. Conheça as melhores práticas de custódia, cold wallets, multi-assinatura e aspectos legais no Brasil.",
      date: "10 Dez 2024",
      readTime: "10 min",
      category: "Criptoativos",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80",
      link: "/artigos/custodia-criptoativos"
    },
    {
      title: "Proteção de Dados Pessoais: Seus Direitos na Era Digital",
      excerpt: "A LGPD garante direitos fundamentais sobre seus dados pessoais. Saiba como solicitar exclusão de dados, corrigir informações e exercer sua privacidade online.",
      date: "1 Dez 2024",
      readTime: "6 min",
      category: "LGPD",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80",
      link: "/artigos/protecao-dados-pessoais"
    },
    {
      title: "Fake News e Difamação Online: Como Proteger Sua Reputação",
      excerpt: "Notícias falsas e comentários difamatórios podem destruir reputações. Conheça os mecanismos legais para remover conteúdo ofensivo e buscar reparação de danos.",
      date: "22 Nov 2024",
      readTime: "7 min",
      category: "Crimes Digitais",
      image: "https://images.unsplash.com/photo-1585241645927-c7a8e5840c42?w=800&auto=format&fit=crop&q=80",
      link: "/artigos/fake-news-difamacao"
    },
    {
      title: "Compliance em LGPD: Checklist Completo para Empresas",
      excerpt: "Adequar sua empresa à LGPD não precisa ser complicado. Este checklist abrange desde o mapeamento de dados até a implementação de políticas de privacidade.",
      date: "15 Nov 2024",
      readTime: "12 min",
      category: "LGPD",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
      link: "/artigos/compliance-lgpd"
    },
    {
      title: "Regulamentação de Criptomoedas no Brasil: O Que Mudou em 2024",
      excerpt: "Nova legislação brasileira sobre criptoativos traz segurança jurídica para investidores e empresas. Entenda as principais mudanças e como se adequar.",
      date: "5 Nov 2024",
      readTime: "8 min",
      category: "Criptoativos",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&auto=format&fit=crop&q=80",
      link: "/artigos/regulamentacao-criptomoedas"
    },
  ];

  return (
    <section id="artigos" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Blog & Artigos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Conteúdo <span className="gradient-text">Especializado</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Insights, análises e novidades sobre Direito Digital
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article, index) => {
              const isExternalLink = article.link.startsWith('http');
              const linkProps = isExternalLink 
                ? { href: article.link, target: "_blank", rel: "noopener noreferrer" }
                : {};
              
              const ArticleCard = (
                <Card className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-smooth hover:shadow-cyber overflow-hidden animate-scale-in cursor-pointer h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary/90 text-xs font-medium backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-foreground/60 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-foreground/70 leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-smooth">
                      <span>Ler artigo</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
                    </div>
                  </CardContent>
                </Card>
              );

              return isExternalLink ? (
                <a key={index} {...linkProps} className="block">
                  {ArticleCard}
                </a>
              ) : (
                <Link key={index} to={article.link} className="block">
                  {ArticleCard}
                </Link>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="text-center animate-fade-in">
            <Link to="/blog">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 font-semibold px-8 backdrop-blur-sm"
              >
                Ver Todos os Artigos
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

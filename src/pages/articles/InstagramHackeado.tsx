import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const InstagramHackeado = () => {
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
                Redes Sociais
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Instagram Hackeado? Passo a Passo para Recuperar sua Conta
              </h1>
              <div className="flex items-center gap-6 text-foreground/60">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>8 Jan 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>6 min de leitura</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-cyber">
              <img
                src="https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1200&auto=format&fit=crop&q=80"
                alt="Instagram - Segurança de contas"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Ter o Instagram hackeado é mais comum do que parece. Milhares de brasileiros perdem acesso às suas 
                contas todos os dias. Veja o que fazer imediatamente.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Sinais de Que Sua Conta Foi Hackeada</h2>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li>Não consegue fazer login com sua senha</li>
                <li>Seu e-mail ou número de telefone foi alterado</li>
                <li>Publicações que você não fez aparecem no seu perfil</li>
                <li>Mensagens sendo enviadas automaticamente para seus seguidores</li>
                <li>Recebeu e-mail do Instagram sobre alterações que você não fez</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Passo a Passo para Recuperação Imediata</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">1. Use a Opção "Esqueci a Senha"</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Na tela de login, clique em "Esqueceu a senha?" e tente recuperar o acesso através do seu e-mail 
                ou número de telefone. Se ainda tiver acesso a eles, você poderá redefinir sua senha.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Solicite um Link de Login</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Se não conseguir redefinir a senha, use a opção "Precisa de mais ajuda?" para receber um link de 
                login no seu e-mail. Esse link permite acessar sua conta temporariamente.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Reverta Alterações Não Autorizadas</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Se o hacker alterou seu e-mail ou telefone, você pode reverter dentro de 48 horas. O Instagram envia 
                notificações sobre essas mudanças com opção de desfazer.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">4. Verifique sua Identidade</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Em casos mais graves, o Instagram pode pedir que você verifique sua identidade enviando uma foto 
                segurando um papel com um código específico. Isso comprova que você é o verdadeiro dono da conta.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Ações Jurídicas Disponíveis</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Responsabilização do Hacker</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                O acesso não autorizado a contas digitais é crime previsto na Lei Carolina Dieckmann (Lei 12.737/2012). 
                O invasor pode ser processado criminalmente e civilmente pelos danos causados.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Responsabilidade da Plataforma</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Se o Instagram não fornecer suporte adequado para recuperação da conta ou se houver falhas de segurança 
                comprovadas, é possível acionar a plataforma judicialmente para recuperação de danos.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Proteção de Dados Pessoais</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Se dados pessoais foram expostos ou utilizados indevidamente, você tem direitos garantidos pela LGPD 
                para solicitar medidas de proteção e reparação.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Como Prevenir Futuros Ataques</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">1. Ative a Autenticação de Dois Fatores</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Vá em Configurações → Segurança → Autenticação de dois fatores e ative. Isso adiciona uma camada 
                extra de proteção exigindo um código adicional ao fazer login.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Use Senhas Fortes e Únicas</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Crie uma senha com pelo menos 12 caracteres, misturando letras maiúsculas e minúsculas, números e 
                símbolos. Nunca use a mesma senha em diferentes serviços.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Cuidado com Links e E-mails Suspeitos</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Nunca clique em links recebidos por mensagem direta ou e-mail que pedem para você "verificar" sua conta. 
                O Instagram nunca solicita sua senha por e-mail.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">4. Revise Aplicativos Conectados</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Verifique regularmente quais aplicativos têm acesso à sua conta do Instagram e remova aqueles que 
                você não reconhece ou não usa mais.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Quando Buscar Ajuda Jurídica</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Se você tentou todos os métodos de recuperação e o Instagram não responde, ou se sua conta foi usada 
                para atividades criminosas, é hora de buscar assessoria jurídica especializada. Um advogado pode:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li>Notificar extrajudicialmente o Instagram exigindo providências</li>
                <li>Ingressar com ação judicial para recuperação da conta</li>
                <li>Representar criminalmente o invasor</li>
                <li>Buscar reparação por danos morais e materiais</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                A recuperação de contas hackeadas nem sempre é simples e pode levar tempo. Agir rapidamente e ter 
                o suporte jurídico adequado aumenta significativamente suas chances de sucesso.
              </p>
            </div>

            <div className="mt-16 p-8 rounded-2xl gradient-cyber border border-primary/20 text-center">
              <h3 className="text-2xl font-bold mb-4">Precisa Recuperar sua Conta do Instagram?</h3>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                Assessoria jurídica especializada em recuperação de redes sociais e responsabilização de invasores.
              </p>
              <Link to="/#contato">
                <Button size="lg" className="bg-gradient-accent text-background font-semibold shadow-cyber">
                  Falar com Especialista
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

export default InstagramHackeado;

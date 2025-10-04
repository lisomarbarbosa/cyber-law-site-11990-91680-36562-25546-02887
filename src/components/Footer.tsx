import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react";
import { SiTiktok, SiSubstack } from "react-icons/si";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinksTop = [
    { icon: Facebook, href: "https://www.facebook.com/people/Adv-Lisomar-Barbosa/61580298486601/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/advlisomarbarbosa", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/advlisomar-barbosa-17b634383/", label: "LinkedIn" },
  ];

  const socialLinksBottom = [
    { icon: SiTiktok, href: "https://www.tiktok.com/@advlisomarbarbosa", label: "TikTok" },
    { icon: Youtube, href: "https://www.youtube.com/@AdvLisomarBarbosa", label: "YouTube" },
    { icon: SiSubstack, href: "https://substack.com/@advlisomarbarbosa", label: "Substack" },
  ];

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Áreas de Atuação", href: "#areas" },
    { label: "Artigos", href: "#artigos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  const legalLinks = [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "LGPD", href: "#" },
  ];

  return (
    <footer className="bg-background border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <img src={logo} alt="Lisomar Barbosa Advocacia" className="h-28 w-auto mb-4" />
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                Advocacia Digital Especializada em LGPD, Proteção de Dados, Crimes Cibernéticos e Criptoativos.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  {socialLinksTop.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-smooth group"
                    >
                      <social.icon size={18} className="text-foreground/70 group-hover:text-primary transition-smooth" />
                    </a>
                  ))}
                </div>
                <div className="flex gap-3">
                  {socialLinksBottom.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-smooth group"
                    >
                      <social.icon size={18} className="text-foreground/70 group-hover:text-primary transition-smooth" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-foreground/70 hover:text-primary transition-smooth text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-smooth text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:+5591980300890" className="text-sm text-foreground/70 hover:text-primary transition-smooth">
                      (91) 98030-0890
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="mailto:advlisomarbarbosa@gmail.com" className="text-sm text-foreground/70 hover:text-primary transition-smooth break-all">
                      advlisomarbarbosa@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground/70">
                      Belém, PA<br />Brasil
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
              <p>
                © {currentYear} Lisomar Barbosa Advocacia. Todos os direitos reservados.
              </p>
              <p className="text-xs">
                Desenvolvido com tecnologia e expertise em Direito Digital
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

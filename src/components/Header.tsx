import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Áreas", href: "#areas" },
    { label: "Artigos", href: "#artigos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-cyber" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#inicio");
            }}
            className="flex items-center space-x-3 group"
          >
            <img src={logo} alt="Lisomar Barbosa Advocacia" className="h-24 w-auto transition-smooth group-hover:scale-105" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-smooth"></span>
              </a>
            ))}
            <ThemeToggle />
            <Button
              onClick={() => window.open("https://wa.me/5591980300890?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informações", "_blank")}
              className="bg-gradient-accent text-background font-semibold shadow-cyber hover:shadow-glow transition-smooth"
            >
              Agende uma Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-base font-medium text-foreground/80 hover:text-primary transition-smooth px-2 py-1"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-between px-2 py-1">
                <span className="text-base font-medium text-foreground/80">Tema</span>
                <ThemeToggle />
              </div>
              <Button
                onClick={() => window.open("https://wa.me/5591980300890?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informações", "_blank")}
                className="bg-gradient-accent text-background font-semibold shadow-cyber w-full"
              >
                Agende uma Consulta
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

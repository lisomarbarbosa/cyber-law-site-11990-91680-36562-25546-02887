import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import diegoSoaresImg from "@/assets/testimonials/dhyservice.jpeg";
import diegoLimaImg from "@/assets/testimonials/lan-telecom.jpeg";
import pauloHenriqueImg from "@/assets/testimonials/paulo-henrique.jpeg";
import washingtonLimaImg from "@/assets/testimonials/washington-lima.jpeg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Diego Soares",
      role: "CEO, Dhyservice",
      image: diegoSoaresImg,
      text: "O suporte jurídico em Direito Digital foi essencial para proteger nossos contratos e dados estratégicos. Trouxe segurança e tranquilidade para a gestão da empresa.",
      rating: 5,
    },
    {
      name: "Diego Lima",
      role: "Diretor, Lan Telecom",
      image: diegoLimaImg,
      text: "A consultoria garantiu que a Lan Telecom estivesse totalmente adequada à LGPD. O trabalho foi rápido, claro e nos trouxe confiança para expandir nossos serviços.",
      rating: 5,
    },
    {
      name: "Paulo Henrique",
      role: "Servidor Público",
      image: pauloHenriqueImg,
      text: "Como servidor público, precisei de orientação sobre responsabilidade digital e encontrei um atendimento técnico, objetivo e comprometido. Foi fundamental para evitar problemas futuros.",
      rating: 5,
    },
    {
      name: "Washington Lima",
      role: "Empreendedor Digital",
      image: washingtonLimaImg,
      text: "Consegui resolver uma situação de fraude digital que estava afetando meu negócio online. Profissionalismo e resultados que realmente fazem a diferença.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 opacity-10">
        <Quote size={200} className="text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Quote size={200} className="text-secondary rotate-180" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Depoimentos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              O Que Dizem Nossos <span className="gradient-text">Clientes</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Confiança construída através de resultados
            </p>
          </div>

          {/* Testimonial Card */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-cyber animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary/20">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center shadow-cyber">
                    <Quote size={20} className="text-background" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 max-w-2xl italic">
                  "{current.text}"
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1">{current.name}</h4>
                  <p className="text-foreground/60">{current.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

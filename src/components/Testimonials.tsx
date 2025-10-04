import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, TechStart Ltda",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
      text: "A consultoria em LGPD foi essencial para adequarmos nossa empresa. Profissionalismo impecável e resultados acima das expectativas.",
      rating: 5,
    },
    {
      name: "Carlos Mendes",
      role: "Diretor de TI, Digital Corp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
      text: "Expertise incomparável em crimes digitais. Conseguimos resolver um caso complexo de invasão com total profissionalismo.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Empreendedora Digital",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
      text: "Atendimento personalizado e soluções práticas. Recomendo fortemente para qualquer questão relacionada a Direito Digital.",
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

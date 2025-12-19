"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "María González",
      business: "Boutique de Moda",
      text: "Impulso Marketing Studio transformó completamente nuestra presencia en redes. En solo 3 meses triplicamos nuestras ventas online.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      business: "Gimnasio Fitness Pro",
      text: "Excelente servicio. Las campañas de Meta Ads nos trajeron más de 50 leads calificados en el primer mes. Totalmente recomendados.",
      rating: 5,
    },
    {
      name: "Laura Martínez",
      business: "Inmobiliaria del Sur",
      text: "Profesionales, creativos y con resultados medibles. Nuestro ROI mejoró un 200% desde que trabajamos con ellos.",
      rating: 5,
    },
    {
      name: "Diego Fernández",
      business: "Restaurante La Esquina",
      text: "El community manager que nos asignaron entiende perfectamente nuestra marca. Las interacciones en Instagram crecieron un 300%.",
      rating: 5,
    },
    {
      name: "Ana Silva",
      business: "Tienda de Tecnología",
      text: "Los reportes son claros y fáciles de entender. Siempre sé exactamente cómo está funcionando mi inversión publicitaria.",
      rating: 4,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const averageRating = 4.8;

  return (
    <section
      id="testimonios"
      className="py-16 md:py-24 section-bg-default"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white ">
            Lo que dicen nuestros clientes
          </h2>

          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(averageRating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold">{averageRating}</span>
            <span className="text-muted-foreground">de 5 estrellas</span>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-lg mb-4 leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.business}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

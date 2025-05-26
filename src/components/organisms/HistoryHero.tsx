'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HistoryHeroProps {
  title: string;
  subtitle: string;
  description: string;
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
  locale: string;
  className?: string;
}

export function HistoryHero({
  title,
  subtitle,
  description,
  cta,
  locale,
  className = '',
}: HistoryHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Utilisation de l'effet de défilement natif au lieu de Framer Motion
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || !textRef.current) return;
      
      const scrollPos = window.scrollY;
      const viewportHeight = window.innerHeight;
      const progress = Math.min(scrollPos / (viewportHeight * 0.5), 1);
      
      // Appliquer les effets de parralaxe et de fade-out au défilement
      if (textRef.current) {
        textRef.current.style.opacity = `${1 - progress}`;
        textRef.current.style.transform = `translateY(${-50 * progress}px) scale(${1 - 0.1 * progress})`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = title.split(' ');
  
  // Function to smoothly scroll to the next section
  const scrollToNextSection = () => {
    if (ref.current) {
      const nextSection = ref.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'relative h-screen flex flex-col items-center justify-center overflow-hidden',
        'bg-black text-white',
        className
      )}
    >
      {/* Overlay pour assombrir l'image de fond */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Image de fond avec effet parallaxe via CSS */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700 ease-apple-spring"
        style={{ transform: 'translateY(var(--parallax-y, 0))' }}
      >
        <Image
          src="/images/history/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Contenu du hero */}
      <div className="container relative z-20 px-4 mx-auto">
        <div
          ref={textRef}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Titre avec animation mot par mot */}
          <div className="overflow-hidden mb-6">
            <h1 className="sr-only">{title}</h1>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-4 text-4xl md:text-6xl lg:text-7xl font-bold">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="block animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Sous-titre avec fade in */}
          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 italic text-gray-200 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            {subtitle}
          </p>

          {/* Description avec fade in plus lent */}
          <p
            className="text-lg max-w-2xl mx-auto mb-8 text-gray-300 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            {description}
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1s' }}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200"
              asChild
            >
              <a href={`/${locale}${cta.primary.href}`}>
                {cta.primary.text}
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white/10"
              asChild
            >
              <a href={`/${locale}${cta.secondary.href}`}>
                {cta.secondary.text}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-float opacity-0 animate-fade-in"
        style={{ animationDelay: '2s' }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white w-12 h-12"
          onClick={scrollToNextSection}
        >
          <ArrowDown className="h-5 w-5" />
          <span className="sr-only">Défiler vers le bas</span>
        </Button>
      </motion.div>

      {/* Background gradient overlay to add depth */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </motion.div>
  );
}

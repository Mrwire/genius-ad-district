'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/atoms/Container';

// Composant inspiré de l'esthétique Apple pour la section hero
export function AppleStoryHero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Effet pour animer basé sur le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        setScrollY(window.scrollY);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculer l'opacité basée sur le scroll
  const opacity = Math.max(1 - scrollY / 700, 0);
  const scale = Math.max(1 - scrollY / 2000, 0.8);
  
  // Textes qui apparaissent progressivement avec le vocabulaire ESPRIT
  const storyPhrases = [
    "En 1999, notre atelier de 20m² était déjà animé par l'EXCELLENCE.",
    "Nos premiers projets SUR-MESURE ont marqué le paysage créatif marocain dès nos débuts.",
    "Notre PASSION : allier créativité et maîtrise technique.",
    "Des premiers sites web aux solutions digitales actuelles, l'INNOVATION guide notre démarche.",
    "Aujourd'hui, notre infrastructure de 2 600 m² reflète notre engagement continu depuis 1999."
  ];

  // Gérer l'animation séquentielle des textes
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % storyPhrases.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute h-full w-full object-cover scale-110"
          style={{ transform: `scale(${scale + 0.1}) translateY(${scrollY * 0.15}px)` }}
        >
          <source src="/videos/video-bg-ourstory.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        {/* Gradient supplémentaire pour le style Apple */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90 z-0" />
      </div>
      
      {/* Conteneur pour les textes animés */}
      <Container className="relative h-full flex flex-col items-center justify-center z-10 text-white">
        {/* Tagline permanente en haut */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-center mt-24 md:mt-0"
        >
          GENIUS est né d'une conviction
        </motion.h1>
        
        {/* Sous-titre typique d'Apple */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 italic mt-4 text-center max-w-xl"
        >
          La créativité n'a de valeur que si elle change la donne
        </motion.p>
        
        {/* Conteneur pour les phrases de storytelling qui se succèdent */}
        <div className="h-28 md:h-24 flex items-center justify-center mt-12 md:mt-16">
          {storyPhrases.map((phrase, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: currentPhraseIndex === index ? 1 : 0,
                y: currentPhraseIndex === index ? 0 : 20 
              }}
              transition={{ duration: 0.8 }}
              className="absolute text-lg md:text-2xl max-w-2xl mx-auto text-center font-light"
            >
              {phrase}
            </motion.p>
          ))}
        </div>
        
        {/* Indicateur de scroll comme Apple */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-2 bg-white rounded-full mt-2"
              animate={{ 
                y: [0, 12, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut" 
              }}
            />
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

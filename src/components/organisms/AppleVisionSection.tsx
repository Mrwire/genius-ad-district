'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/atoms/Container';
import { RocketIcon, Lightbulb, GlobeIcon, LeafIcon } from 'lucide-react';

interface VisionPoint {
  title: string;
  description: string;
  icon: React.ElementType;
}

export function AppleVisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimationControls();
  const [activePoint, setActivePoint] = useState(0);

  // Données pour les points de vision inspirés des keynotes Apple avec un wording optimisé
  const visionPoints: VisionPoint[] = [
    {
      title: "EXCELLENCE dans l'innovation",
      description: "Notre pôle R&D d'excellence repousse les limites de l'intelligence artificielle générative, des expériences immersives et des interfaces neuronales. Ces technologies de pointe transformeront radicalement l'expérience client dans les 5 prochaines années.",
      icon: Lightbulb
    },
    {
      title: "SUR-MESURE à l'échelle africaine",
      description: "Notre expertise Made in Morocco for Africa s'exporte désormais sur tout le continent. Notre maîtrise des contextes locaux et notre infrastructure de 2 600 m² nous permettent de déployer des solutions sur mesure adaptées aux marchés panafricains.",
      icon: GlobeIcon
    },
    {
      title: "RESPECT & durabilité",
      description: "Du concept à la production, notre engagement pour un impact positif est total. Notre Quality Control Manager supervise un circuit de production durable avec matériaux éco-certifiés et processus à empreinte carbone réduite, au service de la planète et des générations futures.",
      icon: LeafIcon
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      
      // Auto-cycle through points every 5 seconds
      const interval = setInterval(() => {
        setActivePoint(prev => (prev + 1) % visionPoints.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isInView, controls, visionPoints.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-gray-100 to-white"
    >
      {/* Cercles de fond style Apple */}
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-blue-50 blur-3xl opacity-40" />
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-blue-50 blur-3xl opacity-40" />
      
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* En-tête de la section */}
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 className="inline-block mb-3 px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
              GENIUS VISION 2030
            </motion.h2>
            <motion.h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              L'avenir à notre image
            </motion.h3>
            <motion.p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              De notre laboratoire d'idées de 20 m² à notre infrastructure de 2 600 m², nous avons toujours façonné le futur. Maintenant, nous écrivons la prochaine révolution créative du continent.
            </motion.p>
          </motion.div>

          {/* Section principale */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Colonne d'image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
            >
              <img
                src="/item_images/projet/our_story.png"
                alt="Notre histoire GENIUS"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Effet de brillance Apple */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
            </motion.div>

            {/* Colonne de texte avec points de vision */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="space-y-8"
            >
              {visionPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  variants={itemVariants}
                  className={`p-6 rounded-xl transition-all duration-500 ${
                    activePoint === index 
                      ? 'bg-blue-50 border-l-4 border-blue-500 transform scale-105' 
                      : 'bg-white/50 hover:bg-blue-50/50'
                  }`}
                  onClick={() => setActivePoint(index)}
                >
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full ${
                      activePoint === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <point.icon className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className={`text-xl font-semibold mb-2 ${
                        activePoint === index ? 'text-blue-700' : 'text-gray-800'
                      }`}>
                        {point.title}
                      </h4>
                      <p className="text-gray-600">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Citation de style Apple */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-center mt-24"
          >
            <blockquote className="text-2xl md:text-3xl font-light italic text-gray-600 max-w-4xl mx-auto">
              <span className="text-blue-500">"</span>
              La créativité n'a de valeur que si elle change la donne. C'est pourquoi chaque projet chez GENIUS n'est pas seulement une réalisation, mais un jalon vers l'avenir que nous construisons ensemble.
              <span className="text-blue-500">"</span>
            </blockquote>
            <p className="mt-4 text-gray-500">— L'ESPRIT GENIUS depuis 1999, Vision 2030</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

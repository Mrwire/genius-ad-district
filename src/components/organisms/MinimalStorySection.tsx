'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/atoms/Container';

interface StorySectionProps {
  title: string;
  description: string;
  points: Array<{ description: string }>;
  imageSrc: string;
  imageAlt: string;
  imageRight?: boolean;
  darkMode?: boolean;
}

export function MinimalStorySection({
  title,
  description,
  points,
  imageSrc,
  imageAlt,
  imageRight = false,
  darkMode = false
}: StorySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
      className={`py-24 md:py-32 overflow-hidden ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
    >
      <Container>
        <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${imageRight ? '' : 'md:flex-row-reverse'}`}>
          {/* Colonne de texte */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
              variants={itemVariants}
            >
              {title}
            </motion.h2>

            <motion.p 
              className={`text-lg md:text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              variants={itemVariants}
            >
              {description}
            </motion.p>

            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
            >
              {points.map((point, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <span className={`${darkMode ? 'text-primary-400' : 'text-primary-600'} mr-3 mt-1.5 text-lg`}>•</span>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-base md:text-lg`}>
                    {point.description}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Colonne d'image */}
          <div className={`order-1 ${imageRight ? 'md:order-2' : 'md:order-1'}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
            >
              <Image 
                src={imageSrc} 
                alt={imageAlt} 
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Effet de brillance comme sur les produits Apple */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              
              {/* Bordure fine style Apple */}
              <div className="absolute inset-0 border border-gray-200/10 rounded-2xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

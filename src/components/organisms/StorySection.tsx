'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
// import { AspectRatio } from '@/components/ui/aspect-ratio';

interface StoryPoint {
  title?: string;
  description: string;
}

interface StorySectionProps {
  title: string;
  description: string;
  points: StoryPoint[];
  image: string;
  imageAlt: string;
  className?: string;
  imagePosition?: 'left' | 'right';
  darkMode?: boolean;
}

export function StorySection({
  title,
  description,
  points,
  image,
  imageAlt,
  className = '',
  imagePosition = 'right',
  darkMode = false,
}: StorySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Détermine les classes en fonction de la position de l'image et du mode sombre
  const sectionClass = cn(
    'py-16 md:py-24',
    darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900',
    className
  );
  
  const textClass = cn(
    'space-y-6',
    darkMode ? 'text-gray-200' : 'text-gray-600'
  );
  
  const titleClass = cn(
    'text-3xl md:text-4xl font-bold',
    darkMode ? 'text-white' : 'bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700'
  );
  
  const cardClass = cn(
    'p-5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg',
    darkMode 
      ? 'bg-white/10 hover:bg-white/15 border-gray-800' 
      : 'bg-white border-gray-100 hover:border-gray-200'
  );

  const pointTextClass = cn(
    darkMode ? 'text-gray-200' : 'text-gray-600'
  );

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div ref={sectionRef} className={sectionClass}>
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${imagePosition === 'left' ? 'md:flex-row-reverse' : ''}`}>
          {/* Contenu texte */}
          <motion.div
            className={textClass}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2 className={titleClass} variants={itemVariants}>
              {title}
            </motion.h2>
            
            <motion.p 
              className="text-lg leading-relaxed" 
              variants={itemVariants}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="space-y-4 mt-8"
              variants={containerVariants}
            >
              {points.map((point, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className={cardClass}>
                    {point.title && (
                      <h3 className="text-lg font-semibold mb-2">
                        {point.title}
                      </h3>
                    )}
                    <p className={pointTextClass}>
                      {point.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'left' ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full pb-[75%]"> {/* Ratio 4:3 */}
                <div className="absolute inset-0">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            
            {/* Effet de design sur l'image */}
            <div className={cn(
              "absolute -bottom-5 -right-5 h-24 w-24 rounded-full z-10 hidden md:block",
              darkMode ? "bg-primary-500" : "bg-gray-900"
            )}></div>
            
            {darkMode && (
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/30 to-transparent rounded-2xl"></div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

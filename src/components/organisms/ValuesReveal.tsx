'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
// Implémentation simplifiée d'AspectRatio

interface ValueItem {
  letter: string;
  fullName: string;
  description: string;
  color: string;
}

interface ValuesRevealProps {
  title: string;
  subtitle: string;
  wordTitle: string;
  values: ValueItem[];
  className?: string;
}

// Configuration des couleurs pour chaque valeur dans le style Apple
const valueColors = {
  primary: 'from-gray-900 to-gray-800',
  E: 'from-blue-600 to-blue-400',
  S: 'from-pink-600 to-pink-400',
  P: 'from-purple-600 to-purple-400',
  R: 'from-green-600 to-green-400',
  I: 'from-orange-600 to-orange-400',
  T: 'from-cyan-600 to-cyan-400',
};

export function ValuesReveal({
  title,
  subtitle,
  wordTitle,
  values,
  className = '',
}: ValuesRevealProps) {
  const [activeValue, setActiveValue] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const handleLetterClick = (letter: string) => {
    // Activer l'effet d'animation sur la lettre sélectionnée
    setActiveValue(activeValue === letter ? null : letter);
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        'py-16 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden',
        className
      )}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Mot principal "ESPRIT" avec ses lettres interactives */}
        <motion.div 
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-xl mb-10 text-center font-medium text-gray-600">{wordTitle}</h3>
          
          <div className="flex justify-center items-center space-x-2 md:space-x-4">
            {values.map((value, index) => (
              <motion.div
                key={value.letter}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                className="relative"
              >
                <motion.button
                  onClick={() => handleLetterClick(value.letter)}
                  className={cn(
                    "w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center",
                    "font-bold text-2xl md:text-4xl text-white",
                    "transition-all duration-300 cursor-pointer",
                    "bg-gradient-to-br shadow-lg",
                    activeValue === value.letter 
                      ? valueColors[value.letter as keyof typeof valueColors]
                      : valueColors.primary,
                    activeValue === value.letter && "scale-110"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {value.letter}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Zone de détail qui apparaît lorsqu'une lettre est cliquée */}
        <AnimatePresence mode="wait">
          {activeValue && (
            <motion.div
              key={activeValue}
              className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              {values
                .filter((value) => value.letter === activeValue)
                .map((value) => (
                  <div key={value.letter} className="p-8 md:p-10 grid md:grid-cols-5 gap-8">
                    <div className="col-span-5 md:col-span-3">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <h3 className={cn(
                          "text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r",
                          valueColors[value.letter as keyof typeof valueColors]
                        )}>
                          {value.fullName}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </motion.div>
                    </div>
                    
                    <div className="col-span-5 md:col-span-2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <div className="relative w-full pb-[100%] bg-gray-100 rounded-xl overflow-hidden"> {/* Ratio 1:1 */}
                          <div className={cn(
                            "absolute inset-0 flex items-center justify-center",
                            "bg-gradient-to-br",
                            valueColors[value.letter as keyof typeof valueColors]
                          )}>
                            <span className="text-8xl font-bold text-white opacity-90">
                              {value.letter}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

interface AnimatedTimelineProps {
  items: TimelineItem[];
}

export function AnimatedTimeline({ items }: AnimatedTimelineProps) {
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 }); 

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div 
      ref={timelineRef}
      className="relative"
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {/* Ligne de la timeline */}
      <div className="absolute left-1/2 w-1 h-full bg-gray-200 -translate-x-1/2"></div>
      
      <div className="space-y-16">
        {items.map((step, index) => (
          <motion.div
            key={index}
            className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-between`}
            variants={item}
            onViewportEnter={() => setActiveIndex(index)}
          >
            {/* Côté gauche (année) */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-100 text-primary-800 text-xl font-bold relative z-10">
                {step.year}
              </div>
            </div>
            
            {/* Point sur la ligne */}
            <div className="absolute left-1/2 w-6 h-6 -translate-x-1/2 bg-primary-600 rounded-full border-4 border-white z-20"></div>
            
            {/* Côté droit (contenu) */}
            <motion.div 
              className={`w-5/12 ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {step.image && (
                  <div className="mt-4 relative h-48 rounded-md overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Affichage mobile (une colonne) */}
      <div className="md:hidden mt-16 space-y-8">
        {items.map((step, index) => (
          <motion.div 
            key={`mobile-${index}`}
            className="relative pl-12"
            variants={item}
          >
            <div className="absolute left-0 top-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {step.year}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {step.image && (
                <div className="mt-4 relative h-48 rounded-md overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

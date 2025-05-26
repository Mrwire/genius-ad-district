'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Container } from '@/components/atoms/Container';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface AppleTimelineProps {
  items: TimelineItem[];
}

export function AppleTimeline({ items }: AppleTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ['start end', 'end start'] 
  });
  
  const lineHeight = useTransform(
    scrollYProgress, 
    [0, 1], 
    ['0%', '100%']
  );

  return (
    <section className="py-24 md:py-32 bg-white text-black overflow-hidden">
      <Container>
        {/* En-tête inspiré du style Apple */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Notre chronologie
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto"
          >
            Chaque étape de notre parcours a défini notre identité et façonné notre vision de la communication.
          </motion.p>
        </div>
        
        {/* Timeline conteneur */}
        <div ref={containerRef} className="relative mt-20">
          {/* Ligne de timeline verticale avec animation de progression */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-600 to-primary-400" 
              style={{ height: lineHeight }}
            />
          </div>
          
          {/* Éléments de timeline */}
          <div className="relative z-10 space-y-20 md:space-y-32">
            {items.map((item, index) => (
              <TimelineItem 
                key={index} 
                item={item} 
                index={index}
                isVisible={isInView} 
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
  isVisible: boolean;
}

function TimelineItem({ item, index, isVisible }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Cercle sur la ligne de timeline */}
      <div className="absolute left-4 md:left-1/2 transform md:translate-x-[-50%] w-[15px] h-[15px] rounded-full bg-white border-4 border-primary-500 shadow-lg" />
      
      {/* Contenu */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
        transition={{ duration: 0.7, delay: 0.1 * index }}
        className={`pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}
      >
        <div className={`bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 ${isEven ? 'text-right' : 'text-left'}`}>
          <div className="inline-block bg-gradient-to-r from-primary-600 to-primary-400 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
            {item.year}
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
          {item.description && (
            <p className="text-gray-600">{item.description}</p>
          )}
          
          {/* Effet de reflet subtil à la Apple */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-white/20 opacity-[0.03] pointer-events-none rounded-xl" />
        </div>
      </motion.div>
    </div>
  );
}

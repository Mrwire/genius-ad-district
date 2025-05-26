'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/atoms/Container';
import { ArrowRight } from 'lucide-react';

interface GlassmorphicCTAProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  locale: string;
}

export function GlassmorphicCTA({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  locale
}: GlassmorphicCTAProps) {
  return (
    <section className="relative py-24 md:py-32 bg-[#0A0A0A] text-white overflow-hidden">
      {/* Éléments d'arrière-plan flous à la Apple */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#007AFF]/20 blur-[80px] -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-[#0055FF]/10 blur-[100px] -z-10" />
      
      <Container>
        <div className="relative">
          {/* Effet de grille subtil d'Apple */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px] pointer-events-none" />
          
          {/* Carte glassmorphic */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative backdrop-blur-lg bg-white/[0.03] border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden"
          >
            {/* Reflet supérieur */}
            <div className="absolute -inset-x-1 -top-1 h-40 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
            
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                {title}
              </motion.h2>
              
              {description && (
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-xl text-gray-300"
                >
                  {description}
                </motion.p>
              )}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="pt-4"
              >
                <Link href={`/${locale}${buttonLink}`}>
                  <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#007AFF] rounded-full overflow-hidden transition-all duration-300 ease-out hover:bg-[#0055FF] hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl">
                    {/* Lueur intérieure */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/20 via-transparent to-transparent" />
                    
                    <span className="relative z-10 flex items-center">
                      {buttonText}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    
                    {/* Effet de pression */}
                    <div className="absolute inset-0 bg-black opacity-0 group-active:opacity-20 transition-opacity duration-200" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

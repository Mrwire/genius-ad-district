'use client';

import React from 'react';
import GalleryScript from './GalleryScript';
import EnhancedHeader from '@/components/organisms/EnhancedHeader';
import { Footer } from '@/components/organisms/Footer';
import { Typography } from '@/components/atoms/Typography';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

export default function GalleryPage() {
  const locale = useLocale() as 'fr' | 'en';
  
  const title = {
    fr: 'NOTRE GALERIE',
    en: 'OUR GALLERY'
  };
  
  const subtitle = {
    fr: 'Découvrez notre portfolio d\'œuvres créatives et nos réalisations récentes',
    en: 'Explore our portfolio of creative works and recent achievements'
  };
  
  return (
    <div className="min-h-screen bg-black text-white">
      <EnhancedHeader transparent={false} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="bg-gradient-to-b from-gray-900 to-black w-full h-full opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Typography variant="h1" className="mb-6">
                {title[locale]}
              </Typography>
              
              <Typography variant="body" color="muted" className="text-xl max-w-2xl mx-auto">
                {subtitle[locale]}
              </Typography>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <motion.div 
            className="absolute left-4 right-4 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </section>
        
        {/* Gallery Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4 relative z-10 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Typography variant="h2" className="mb-4">
                {locale === 'fr' ? 'EXPLOREZ NOS PROJETS' : 'EXPLORE OUR PROJECTS'}
              </Typography>
              
              <Typography variant="body" color="muted" className="text-lg max-w-2xl mx-auto">
                {locale === 'fr' 
                  ? 'Découvrez notre portfolio de projets innovants et créatifs' 
                  : 'Discover our portfolio of innovative and creative projects'}
              </Typography>
            </motion.div>
          </div>
          
          {/* Nouveau composant de galerie */}
          <GalleryScript />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

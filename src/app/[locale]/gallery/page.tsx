'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import EnhancedGallery from '@/components/organisms/EnhancedGallery';

export default function GalleryPage() {
  const t = useTranslations('Gallery');
  
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="bg-gradient-to-b from-gray-900 to-black w-full h-full opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t('title')}
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {t('subtitle')}
              </p>
            </div>
          </div>
          
          <div className="absolute left-4 right-4 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </section>
        
        {/* Enhanced Gallery Component */}
        <EnhancedGallery 
          showFilters={true}
          title={t('worksTitle')}
          subtitle={t('worksSubtitle')}
        />
      </main>
    </div>
  );
}

'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

// Components effectivement utilisés dans la homepage
import { CaseStudySection } from '@/components/organisms/CaseStudySection';
import { EnhancedCTA } from '@/components/organisms/EnhancedCTA';
import FeaturedProjects from '@/components/organisms/FeaturedProjects';
// import FeaturesSectionWithHoverEffects supprimé
import { ModernMantraSection } from '@/components/sections/ModernMantraSection';
// import ProjectSearchSection supprimé
import SubsidiariesShowcase from '@/components/sections/SubsidiariesShowcase';
import { BackgroundPaths } from "@/components/ui/background-paths";
import { TestBackground } from "@/components/ui/test-background";
import { ModernNavbar } from '@/components/ui/navbar-demo';
import BaseLayout from '@/components/templates/BaseLayout';

// Ré-imports des composants manquants
import { MindsetSection } from '@/components/organisms/MindsetSection';
import UltraSpectacularValuesSection from '@/components/organisms/UltraSpectacularValuesSection';
import HexagonEcosystem from '@/components/organisms/HexagonEcosystem';
import ShadcnSpiritSection from '@/components/organisms/ShadcnSpiritSection';
import ShadcnExpertiseGrid from '@/components/organisms/ShadcnExpertiseGrid';
// import EnhancedTabLayout supprimé

export default function HomePage() {
  const tHero = useTranslations('home.hero');

  return (
    <BaseLayout>
      <div className="relative min-h-screen bg-black text-white" data-theme="genius">
        <ModernNavbar currentFiliale="genius" />

        <main className="flex flex-col">
        {/* 01 - Background Paths Hero Section */}
        <BackgroundPaths
          title={tHero('title')}
          subtitle={tHero('subtitle')}
          buttonText={tHero('cta')}
        />
        
        {/* 02 - Modern Mantra Section - "Genius, it's not just a word" */}
        <ModernMantraSection />
        
        {/* 03 - Ultra Spectacular Values Section - Effet WOW Ultime */}
        <UltraSpectacularValuesSection />
        
        {/* 04 - Removed duplicate section */}

        {/* 05 - L'écosystème Genius - Visualisation hiérarchique en hexagones */}
        <HexagonEcosystem />

        {/* Système d'alerte supprimé */}
        
        {/* 06 - Spirit/Keywords Section */}
        <ShadcnSpiritSection />
        
        {/* 07 - Expertise Grid */}
        <ShadcnExpertiseGrid />
        
        {/* Section NOS EXPERTISES supprimée */}
        
        {/* Section d'alerte shadcn-ui supprimée */}
        
        {/* 09 - Mindset Section */}
        <MindsetSection />
        

        
        {/* Section Nos expertises (EnhancedTabLayout) supprimée */}
        
        {/* Section Project Search supprimée */}
        
        {/* 14 - 21st.dev UI Component Explorer - Supprimé */}
        
        {/* 15 - Featured Projects Section */}
        <FeaturedProjects />
        
        {/* 15 - Enhanced CTA Section */}
        <EnhancedCTA />
        </main>
      </div>
    </BaseLayout>
  );
}

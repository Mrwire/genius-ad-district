'use client';

// Importation des composants UI communs
import { ModernNavbar } from '@/components/ui/navbar-demo';
import BaseLayout from '@/components/templates/BaseLayout';

// Importation des nouveaux composants inspirés d'Apple
import { AppleStoryHero } from '@/components/organisms/AppleStoryHero';
import { MinimalStorySection } from '@/components/organisms/MinimalStorySection';
import { GroupSynergySection } from '@/components/organisms/GroupSynergySection';
import { AppleTimeline } from '@/components/organisms/AppleTimeline';
import { GlassmorphicCTA } from '@/components/organisms/GlassmorphicCTA';
import { AppleOriginsSection } from '@/components/organisms/AppleOriginsSection';
import { AppleVisionSection } from '@/components/organisms/AppleVisionSection';

// Interface pour les props de la page
interface AppleHistoryPageProps {
  timelineData: Array<{
    year: string;
    title: string;
    description: string;
  }>;
  originsPoints: Array<{ description: string }>;
  ascentPoints: Array<{ description: string }>;
  futurePoints: Array<{ description: string }>;
  resourcesPoints: Array<{ description: string }>;
  locale: string;
}

export function AppleHistoryPage({
  timelineData,
  originsPoints,
  ascentPoints,
  futurePoints,
  resourcesPoints,
  locale
}: AppleHistoryPageProps) {
  return (
    <BaseLayout>
      <div className="relative min-h-screen bg-white" data-theme="genius">
        {/* Navbar */}
        <ModernNavbar currentFiliale="genius" />

        {/* Hero section avec storytelling */}
        <AppleStoryHero />

        {/* Section Nos origines - Design créatif inspiré d'Apple */}
        <AppleOriginsSection originsPoints={originsPoints} />

        {/* Section L'ascension premium - Design minimaliste */}
        <MinimalStorySection
          title="L'ascension premium"
          description="Une passion pour l'excellence a porté Genius au sommet des agences marocaines, avec une approche d'intégration verticale rare dans le secteur."
          points={ascentPoints}
          imageSrc="/images/history/ascent.jpg"
          imageAlt="L'ascension premium"
          imageRight={true}
        />

        {/* Section Resources Today - Design minimaliste en mode sombre */}
        <MinimalStorySection
          title="Notre infrastructure"
          description="Aujourd'hui, GENIUS opère depuis une infrastructure moderne de 2 600 m² avec une équipe complète de spécialistes techniques et créatifs organisée selon une hiérarchie précise garantissant qualité et efficacité à chaque niveau de production."
          points={resourcesPoints}
          imageSrc="/images/history/resources.jpg"
          imageAlt="Notre infrastructure de 2 600 m²"
          imageRight={false}
          darkMode={true}
        />
        
        {/* Section Group Synergy - Inspirée d'Apple */}
        <GroupSynergySection />

        {/* Timeline avec animation au scroll */}
        <AppleTimeline items={timelineData} />

        {/* Nouvelle section Vision avec design Apple Keynote */}
        <AppleVisionSection />

        {/* Section CTA - Design glassmorphic */}
        <GlassmorphicCTA
          title="Faisons partie de la même histoire"
          description="De notre atelier de 20m² à notre infrastructure de 2 600m², l'ESPRIT GENIUS a transformé le paysage créatif. Votre marque est-elle prête à vivre cette expérience d'EXCELLENCE, de PASSION et d'INNOVATION ?"
          buttonText="Créons ensemble"
          buttonLink="/contact"
          locale={locale}
        />
      </div>
    </BaseLayout>
  );
}

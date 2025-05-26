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

export function AppleHistoryPageClient({
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

        {/* Section Nos origines - Design minimaliste */}
        <MinimalStorySection
          title="Nos origines"
          description="1999, Casablanca. Deux esprits iconoclastes fusionnent design et technologie pour réinventer la communication au Maroc."
          points={originsPoints}
          imageSrc="/images/history/origins.jpg"
          imageAlt="Nos origines"
          imageRight={false}
        />

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
          title="Resources Today"
          description="Nos ressources et nos expertises se sont considérablement développées au fil des années, formant un écosystème complet au service de l'excellence."
          points={resourcesPoints}
          imageSrc="/images/history/resources.jpg"
          imageAlt="Nos ressources aujourd'hui"
          imageRight={false}
          darkMode={true}
        />
        
        {/* Section Group Synergy - Inspirée d'Apple */}
        <GroupSynergySection />

        {/* Timeline avec animation au scroll */}
        <AppleTimeline items={timelineData} />

        {/* Section Future - Design minimaliste */}
        <MinimalStorySection
          title="Aujourd'hui & demain"
          description="En constante évolution, Genius continue d'explorer les frontières de la créativité et de l'innovation pour anticiper les besoins de demain."
          points={futurePoints}
          imageSrc="/images/history/future.jpg"
          imageAlt="Aujourd'hui & demain"
          imageRight={true}
        />

        {/* Section CTA - Design glassmorphic */}
        <GlassmorphicCTA
          title="Écrivons la suite ensemble"
          description="Vous souhaitez ajouter votre chapitre à notre histoire ? Découvrez comment nous pouvons collaborer pour créer le futur de la communication."
          buttonText="Parlons-en"
          buttonLink="/contact"
          locale={locale}
        />
      </div>
    </BaseLayout>
  );
}

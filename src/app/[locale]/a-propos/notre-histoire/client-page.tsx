'use client';

// Import common UI components
import { ModernNavbar } from '@/components/ui/navbar-demo';
import BaseLayout from '@/components/templates/BaseLayout';

// Import Apple-inspired components
import { AppleStoryHero } from '@/components/organisms/AppleStoryHero';
import { MinimalStorySection } from '@/components/organisms/MinimalStorySection';
import { GlassmorphicCTA } from '@/components/organisms/GlassmorphicCTA';

// Interface for page props
interface AppleHistoryPageProps {
  originsPoints: Array<{ description: string }>;
  locale: string;
}

export function AppleHistoryPageClient({
  originsPoints = [],
  locale = 'fr'
}: AppleHistoryPageProps) {
  return (
    <BaseLayout>
      <div className="relative min-h-screen bg-white" data-theme="genius">
        {/* Navbar */}
        <ModernNavbar currentFiliale="genius" />

        {/* Hero section with storytelling */}
        <AppleStoryHero />

        {/* Our Origins section - Minimalist design */}
        <MinimalStorySection
          title="Our Origins"
          description="1999, Casablanca. Two innovative minds merged design and technology to reinvent communication in Morocco."
          points={originsPoints}
          imageSrc="/images/history/origins.jpg"
          imageAlt="Our Origins"
        />

        {/* CTA Section - Glassmorphic design */}
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

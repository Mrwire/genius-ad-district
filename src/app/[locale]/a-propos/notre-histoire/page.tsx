import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

// Importer le nouveau composant template à la place du composant client
import { AppleHistoryPage } from '@/components/templates/AppleHistoryPage';

export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  const t = await getTranslations('about.history');

  return {
    title: t('title'),
    description: t('subtitle'),
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
      type: 'website',
      locale: locale,
      url: `/${locale}/a-propos/notre-histoire`,
    },
  };
}

export default async function HistoryPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations('about.history');
  
  // Données pour la timeline exactement comme dans le fichier our_history.md
  const timelineData = [
    {
      year: '1999',
      title: 'Fondation de Genius Ad District',
      description: '',
    },
    {
      year: '2005',
      title: 'Ouverture de l\'atelier de production MPS',
      description: '',
    },
    {
      year: '2012',
      title: 'Lancement du pôle Digital & Web',
      description: '',
    },
    {
      year: '2018',
      title: 'Création du studio Gaming & Esport',
      description: '',
    },
    {
      year: '2025',
      title: 'Expansion « Made in Morocco for Africa »',
      description: '',
    },
  ];

  // Données pour la section "Nos origines"
  const originsPoints = [
    { description: 'Atelier graphique de 20 m² transformé en laboratoire d\'idées' },
    { description: 'Premiers clients conquis par des campagnes « out of the box »' },
    { description: 'Adoption précoce du numérique : Flash, 3D, premiers sites web' },
    { description: 'Philosophie « Think different » assumée dès le premier jour' },
  ];

  // Données pour la section "Ascension" avec des informations organisationnelles réelles
  const ascentPoints = [
    { 
      description: 'Ouverture de l\'atelier MPS dirigé par un Technical Manager Manufacturing et Workshop Manager spécialisés'
    },
    { 
      description: 'Intégration verticale complète avec des équipes spécialisées en Welding, Machinery et Turn/Mill Operations'
    },
    { 
      description: 'Développement d\'une expertise événementielle avec une équipe dédiée aux déploiements terrain et solutions sur mesure'
    },
    { 
      description: 'Mise en place d\'un système de Quality Control rigoureux et une équipe d\'Inventory Management pour une excellence opérationnelle'
    },
  ];

  // Données pour la section "Aujourd'hui & demain"
  const futurePoints = [
    { 
      description: 'R&D continue en IA créative et expériences immersives'
    },
    { 
      description: 'Engagement fort en développement durable & production responsable'
    },
    { 
      description: 'Ambition d\'exporter le savoir-faire marocain à l\'échelle africaine et mondiale'
    },
  ];

  // Données pour Resources Today avec la structure organisationnelle et les ressources réelles
  const resourcesPoints = [
    { description: 'Infrastructure moderne de 2 600 m² comprenant ateliers de production, studios créatifs et espaces techniques spécialisés' },
    { description: 'Organisation hiérarchique optimisée avec Technical Manager, Workshop Manager, Operations Manager et Quality Control Manager' },
    { description: 'Équipe de techniciens spécialisés en manufacturing, welding, et opérations techniques avancées' },
    { description: 'Département créatif et stratégique complet : designers, développeurs, spécialistes marketing et équipe commerciale dirigée par un Sales Manager' }
  ];
  
  // Utiliser notre nouveau composant template au lieu du composant client
  return (
    <AppleHistoryPage 
      timelineData={timelineData}
      originsPoints={originsPoints}
      ascentPoints={ascentPoints}
      futurePoints={futurePoints}
      resourcesPoints={resourcesPoints}
      locale={locale}
    />
  );
}


import { Metadata } from 'next';
import { AppleProjectsPage } from '@/components/templates/AppleProjectsPage';

export const dynamic = 'force-static';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isFrench = locale === 'fr';

  return {
    title: isFrench ? 'Projets – Genius Ad District' : 'Projects – Genius Ad District',
    description: isFrench
      ? 'Une sélection de nos réalisations corporate, entertainment et gaming produites avec nos studios intégrés.'
      : 'A selection of corporate, entertainment and gaming projects produced with our integrated studios.',
  };
}

export default function ProjectsPage({ params: { locale } }: { params: { locale: string } }) {
  return <AppleProjectsPage locale={locale} />;
}

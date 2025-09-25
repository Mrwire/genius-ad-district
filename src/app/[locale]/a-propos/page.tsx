import { Metadata } from 'next';
import { AppleAboutOverviewPage } from '@/components/templates/AppleAboutOverviewPage';

export const dynamic = 'force-static';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isFrench = locale === 'fr';

  return {
    title: isFrench ? 'À propos – Genius Ad District' : 'About – Genius Ad District',
    description: isFrench
      ? "Découvrez la vision, l'histoire et l'écosystème intégré de Genius Ad District."
      : 'Discover the vision, history and integrated ecosystem of Genius Ad District.',
  };
}

export default function AboutOverviewPage({ params: { locale } }: { params: { locale: string } }) {
  return <AppleAboutOverviewPage locale={locale} />;
}

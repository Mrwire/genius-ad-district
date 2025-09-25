import { Metadata } from 'next';
import { AppleValuesPage } from '@/components/templates/AppleValuesPage';

export const dynamic = 'force-static';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isFrench = locale === 'fr';

  return {
    title: isFrench ? 'Nos valeurs – Genius Ad District' : 'Our values – Genius Ad District',
    description: isFrench
      ? "Les convictions qui guident nos créations, nos partenariats et notre manière de travailler."
      : 'The convictions guiding our creations, partnerships and ways of working.',
  };
}

export default function ValuesPage({ params: { locale } }: { params: { locale: string } }) {
  return <AppleValuesPage locale={locale} />;
}

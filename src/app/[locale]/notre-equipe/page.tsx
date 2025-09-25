import { Metadata } from 'next';
import { AppleTeamPage } from '@/components/templates/AppleTeamPage';

export const dynamic = 'force-static';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isFrench = locale === 'fr';

  return {
    title: isFrench ? 'Notre équipe – Genius Ad District' : 'Our team – Genius Ad District',
    description: isFrench
      ? "Découvrez les talents multidisciplinaires qui façonnent les expériences Genius Ad District."
      : 'Meet the multidisciplinary talents shaping Genius Ad District experiences.',
  };
}

export default function TeamPage({ params: { locale } }: { params: { locale: string } }) {
  return <AppleTeamPage locale={locale} />;
}

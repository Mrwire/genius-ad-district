import { Metadata } from 'next';
import { AppleExpertisePage } from '@/components/templates/AppleExpertisePage';

export const dynamic = 'force-static';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isFrench = locale === 'fr';

  return {
    title: isFrench ? 'Expertises – Genius Ad District' : 'Expertise – Genius Ad District',
    description: isFrench
      ? "Une chaîne intégrée qui réunit conseil, création, production et innovation pour des expériences premium."
      : 'An integrated chain uniting consulting, creation, production and innovation for premium experiences.',
  };
}

export default function ExpertisePage({ params: { locale } }: { params: { locale: string } }) {
  return <AppleExpertisePage locale={locale} />;
}

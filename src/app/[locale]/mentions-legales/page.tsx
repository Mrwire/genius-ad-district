import { Metadata } from 'next';
import { AppleLegalPage } from '@/components/templates/AppleLegalPage';

const legalContent = {
  fr: {
    title: 'Mentions légales',
    intro:
      "Le présent site est édité par Genius Ad District afin de présenter ses expertises, ses réalisations et ses filiales. Vous trouverez ci-dessous l'ensemble des informations obligatoires conformément à la législation marocaine en vigueur.",
    lastUpdate: 'Janvier 2025',
    sections: [
      {
        title: 'Éditeur du site',
        paragraphs: [
          'Genius Ad District – Société à responsabilité limitée',
          'Siège social : 31 Rue Sebta, Quartier Gauthier, Casablanca, Maroc',
          'Capital social : 1 000 000 MAD',
          'R.C. Casablanca n° 245879 – ICE 001526655000076 – IF 15438267',
          'Contact : hello@genius-morocco.com – Tél. +212 (0)5 22 26 45 32',
        ],
      },
      {
        title: 'Direction de la publication',
        paragraphs: [
          'Directeur de la publication : Yassine Aissaoui, Président Fondateur',
          'Responsable éditorial : Samia Benkirane, Directrice Générale',
        ],
      },
      {
        title: 'Hébergement du site',
        paragraphs: [
          'Vercel Inc.',
          '340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis',
          'www.vercel.com',
        ],
      },
      {
        title: 'Propriété intellectuelle',
        paragraphs: [
          "L'ensemble des contenus présents sur ce site (textes, images, vidéos, éléments graphiques, logos, icônes, sons) est la propriété exclusive de Genius Ad District ou de ses partenaires, sauf mention contraire.",
          'Toute reproduction, représentation, modification ou adaptation, totale ou partielle, de ces contenus, par quelque procédé que ce soit, sans autorisation écrite préalable, est strictement interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle et les conventions internationales applicables.',
        ],
      },
      {
        title: 'Protection des données personnelles',
        paragraphs: [
          "Les informations collectées via les formulaires du site sont utilisées uniquement pour répondre à vos demandes. Elles sont traitées par les équipes de Genius Ad District conformément à la loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.",
          'Vous disposez d’un droit d’accès, de rectification et d’opposition concernant vos données. Pour l’exercer, merci d’adresser un email à privacy@genius-morocco.com.',
        ],
      },
      {
        title: 'Crédits et remerciements',
        paragraphs: [
          'Direction artistique : Studio interne Genius Ad District',
          'Développement et intégration : Genius Tech Lab',
          'Photographies et vidéos : Génériques ou propriété des clients, utilisées avec autorisation.',
        ],
      },
    ],
  },
  en: {
    title: 'Legal notice',
    intro:
      'This website is published by Genius Ad District to showcase its expertise, portfolio and subsidiaries. The following mandatory information complies with Moroccan law.',
    lastUpdate: 'January 2025',
    sections: [
      {
        title: 'Publisher',
        paragraphs: [
          'Genius Ad District – Limited liability company',
          'Head office: 31 Rue Sebta, Quartier Gauthier, Casablanca, Morocco',
          'Share capital: MAD 1,000,000',
          'Trade register Casablanca #245879 – ICE 001526655000076 – Tax ID 15438267',
          'Contact: hello@genius-morocco.com – Tel. +212 (0)5 22 26 45 32',
        ],
      },
      {
        title: 'Editorial responsibility',
        paragraphs: [
          'Publication director: Yassine Aissaoui, Founder & President',
          'Editorial manager: Samia Benkirane, Managing Director',
        ],
      },
      {
        title: 'Hosting provider',
        paragraphs: ['Vercel Inc.', '340 S Lemon Ave #4133, Walnut, CA 91789, USA', 'www.vercel.com'],
      },
      {
        title: 'Intellectual property',
        paragraphs: [
          'All content available on this website (texts, images, videos, graphics, logos, icons, audio) is the exclusive property of Genius Ad District or its partners, unless otherwise stated.',
          'Any reproduction, representation, modification or adaptation, in whole or in part, by any means without prior written consent is strictly prohibited and may constitute infringement under applicable intellectual property laws.',
        ],
      },
      {
        title: 'Personal data',
        paragraphs: [
          'Information collected through the website forms is used exclusively to process your requests. Data is handled by Genius Ad District teams in accordance with Moroccan law n°09-08 on personal data protection.',
          'You may exercise your rights of access, rectification and objection by contacting privacy@genius-morocco.com.',
        ],
      },
      {
        title: 'Credits',
        paragraphs: [
          'Art direction: Genius Ad District in-house studio',
          'Development and integration: Genius Tech Lab',
          'Photography & videos: Generic assets or client-owned content used with permission.',
        ],
      },
    ],
  },
};

export const dynamic = 'force-static';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const content = legalContent[locale as 'fr' | 'en'] ?? legalContent.fr;

  return {
    title: `${content.title} – Genius Ad District`,
    description: content.intro,
  };
}

export default function LegalNoticePage({ params: { locale } }: { params: { locale: string } }) {
  const language = legalContent[locale as 'fr' | 'en'] ? (locale as 'fr' | 'en') : 'fr';
  const content = legalContent[language];

  return (
    <AppleLegalPage
      locale={locale}
      title={content.title}
      intro={content.intro}
      sections={content.sections}
      lastUpdate={content.lastUpdate}
    />
  );
}

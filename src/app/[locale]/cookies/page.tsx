import { Metadata } from 'next';
import { AppleLegalPage } from '@/components/templates/AppleLegalPage';

const cookiesContent = {
  fr: {
    title: 'Politique de cookies',
    intro:
      "Cette politique explique le fonctionnement des cookies et traceurs utilisés sur le site genius-morocco.com. Elle vous permet de paramétrer vos préférences et de comprendre leur utilité.",
    lastUpdate: 'Janvier 2025',
    sections: [
      {
        title: '1. Qu’est-ce qu’un cookie ?',
        paragraphs: [
          "Un cookie est un fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la consultation d'un site web. Il permet notamment de reconnaître l'appareil concerné et d'enregistrer des informations temporaires.",
        ],
      },
      {
        title: '2. Cookies strictement nécessaires',
        paragraphs: [
          "Ils garantissent le bon fonctionnement du site (navigation, sécurité, accès à votre espace). Ils sont indispensables et ne nécessitent pas votre consentement.",
        ],
      },
      {
        title: '3. Cookies de mesure d’audience',
        paragraphs: [
          "Ces cookies nous aident à comprendre l'utilisation du site (pages consultées, temps passé, parcours). Ils sont paramétrés de manière anonyme et ne permettent pas de vous identifier directement.",
          "Vous pouvez les accepter ou les refuser via le centre de préférences affiché lors de votre première visite.",
        ],
      },
      {
        title: '4. Cookies marketing et réseaux sociaux',
        paragraphs: [
          "Ils permettent de personnaliser les contenus, d'afficher des publicités pertinentes ou de partager nos pages sur les réseaux sociaux.",
          "Nous ne déposons ces cookies qu'après avoir obtenu votre consentement explicite.",
        ],
      },
      {
        title: '5. Paramétrage',
        paragraphs: [
          "Vous pouvez à tout moment modifier vos préférences en cliquant sur le bouton “Paramétrer les cookies” disponible en bas de page.",
          "Vous pouvez également configurer votre navigateur pour bloquer tout ou partie des cookies. Attention : certaines fonctionnalités pourraient être dégradées.",
        ],
      },
    ],
  },
  en: {
    title: 'Cookie policy',
    intro:
      'This policy explains how cookies and trackers are used on genius-morocco.com. It helps you manage your preferences and understand their purpose.',
    lastUpdate: 'January 2025',
    sections: [
      {
        title: '1. What is a cookie?',
        paragraphs: [
          'A cookie is a text file stored on your device (computer, tablet, smartphone) when browsing a website. It helps recognise the device and temporarily stores information.',
        ],
      },
      {
        title: '2. Strictly necessary cookies',
        paragraphs: [
          'They ensure the proper functioning of the website (navigation, security, access to your account). They are essential and do not require your consent.',
        ],
      },
      {
        title: '3. Analytics cookies',
        paragraphs: [
          'These cookies help us understand how the website is used (pages viewed, time spent, journey). They are configured anonymously and do not directly identify you.',
          'You can accept or refuse them through the preference centre displayed during your first visit.',
        ],
      },
      {
        title: '4. Marketing & social cookies',
        paragraphs: [
          'They allow us to personalise content, deliver relevant advertising or share our pages on social media.',
          'We only set these cookies after receiving your explicit consent.',
        ],
      },
      {
        title: '5. Managing preferences',
        paragraphs: [
          'You can modify your preferences at any time by clicking the “Manage cookies” button available at the bottom of each page.',
          'You may also configure your browser to block some or all cookies. Please note that certain features may be affected.',
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
  const content = cookiesContent[locale as 'fr' | 'en'] ?? cookiesContent.fr;

  return {
    title: `${content.title} – Genius Ad District`,
    description: content.intro,
  };
}

export default function CookiesPage({ params: { locale } }: { params: { locale: string } }) {
  const language = cookiesContent[locale as 'fr' | 'en'] ? (locale as 'fr' | 'en') : 'fr';
  const content = cookiesContent[language];

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

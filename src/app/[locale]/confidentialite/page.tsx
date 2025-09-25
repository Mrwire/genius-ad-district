import { Metadata } from 'next';
import { AppleLegalPage } from '@/components/templates/AppleLegalPage';

const privacyContent = {
  fr: {
    title: 'Politique de confidentialité',
    intro:
      "Cette politique détaille les engagements de Genius Ad District en matière de protection des données personnelles collectées via le site genius-morocco.com et l'ensemble de ses sous-domaines.",
    lastUpdate: 'Janvier 2025',
    sections: [
      {
        title: '1. Nature des données collectées',
        paragraphs: [
          "Nous collectons les informations que vous nous transmettez via les formulaires de contact, de téléchargement ou d'inscription (nom, prénom, entreprise, email, téléphone, fonction).",
          "Des données de navigation (adresse IP, logs, préférences de langue, pages consultées) peuvent également être recueillies pour améliorer l'expérience utilisateur.",
        ],
      },
      {
        title: '2. Finalités du traitement',
        paragraphs: [
          "Répondre à vos demandes et vous accompagner dans vos projets de communication.",
          "Vous adresser, avec votre accord, des contenus éditoriaux, invitations et actualités du groupe.",
          "Analyser la performance du site et la pertinence de nos contenus afin de les améliorer en continu.",
        ],
      },
      {
        title: '3. Base légale et durée de conservation',
        paragraphs: [
          "Les traitements reposent sur votre consentement ou notre intérêt légitime à développer notre activité.",
          "Les données sont conservées pendant une durée maximale de 36 mois à compter du dernier échange ou de la dernière interaction avec nos équipes.",
        ],
      },
      {
        title: '4. Destinataires et sous-traitants',
        paragraphs: [
          "Seules les équipes internes de Genius Ad District concernées par votre demande y ont accès.",
          "Nous pouvons recourir à des prestataires techniques pour l'hébergement, l'envoi d'emails ou l'analyse d'audience. Ils agissent conformément à nos instructions et aux lois applicables.",
        ],
      },
      {
        title: '5. Vos droits',
        paragraphs: [
          "Conformément à la loi n° 09-08, vous disposez d'un droit d'accès, de rectification, de suppression, d'opposition et de portabilité de vos données.",
          "Pour exercer ces droits, contactez privacy@genius-morocco.com ou par courrier à Genius Ad District – Délégué à la protection des données, 31 Rue Sebta, Casablanca.",
        ],
      },
      {
        title: '6. Sécurité des données',
        paragraphs: [
          "Nous mettons en œuvre des mesures techniques et organisationnelles adaptées pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation.",
          "En cas d'incident de sécurité majeur, nous vous informerons dans les meilleurs délais et collaborerons avec les autorités compétentes.",
        ],
      },
    ],
  },
  en: {
    title: 'Privacy policy',
    intro:
      'This policy details the commitments of Genius Ad District regarding personal data collected through genius-morocco.com and its subdomains.',
    lastUpdate: 'January 2025',
    sections: [
      {
        title: '1. Data collected',
        paragraphs: [
          'We collect information submitted via contact, download or registration forms (first name, last name, company, email, phone number, job title).',
          'Browsing data (IP address, logs, language preferences, pages visited) may also be collected to enhance user experience.',
        ],
      },
      {
        title: '2. Purposes of processing',
        paragraphs: [
          'Respond to your requests and support your communication projects.',
          'Send, with your consent, editorial content, invitations and updates from the group.',
          'Measure website performance and content relevance in order to improve them continuously.',
        ],
      },
      {
        title: '3. Legal basis and retention',
        paragraphs: [
          'Processing is based on your consent or on our legitimate interest in developing our business.',
          'Data is stored for a maximum period of 36 months from the last interaction with our teams.',
        ],
      },
      {
        title: '4. Recipients and processors',
        paragraphs: [
          'Only the relevant Genius Ad District teams involved in your request have access to the information.',
          'We may engage service providers for hosting, emailing or analytics. They operate under our instructions and in compliance with applicable laws.',
        ],
      },
      {
        title: '5. Your rights',
        paragraphs: [
          'Under Moroccan law n°09-08, you have the rights to access, rectify, delete, oppose and port your data.',
          'To exercise these rights, contact privacy@genius-morocco.com or send a letter to Genius Ad District – Data Protection Officer, 31 Rue Sebta, Casablanca.',
        ],
      },
      {
        title: '6. Data security',
        paragraphs: [
          'We implement appropriate technical and organisational measures to protect your data from unauthorised access, loss, alteration or disclosure.',
          'In the event of a major security incident, we will notify you as soon as possible and cooperate with the relevant authorities.',
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
  const content = privacyContent[locale as 'fr' | 'en'] ?? privacyContent.fr;

  return {
    title: `${content.title} – Genius Ad District`,
    description: content.intro,
  };
}

export default function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  const language = privacyContent[locale as 'fr' | 'en'] ? (locale as 'fr' | 'en') : 'fr';
  const content = privacyContent[language];

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

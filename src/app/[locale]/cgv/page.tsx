import { Metadata } from 'next';
import { AppleLegalPage } from '@/components/templates/AppleLegalPage';

const termsContent = {
  fr: {
    title: 'Conditions générales de vente',
    intro:
      "Les présentes conditions générales encadrent les prestations proposées par Genius Ad District à ses clients. Elles sont communiquées lors de toute proposition commerciale et peuvent être adaptées selon la nature du projet.",
    lastUpdate: 'Janvier 2025',
    sections: [
      {
        title: '1. Objet',
        paragraphs: [
          "Les CGV définissent les conditions dans lesquelles Genius Ad District fournit des prestations de conseil, création, production, événementiel, digital et toutes prestations associées.",
        ],
      },
      {
        title: '2. Commande et devis',
        paragraphs: [
          "Toute intervention fait l'objet d'un devis détaillé précisant la nature des prestations, les délais, le budget et les conditions de règlement.",
          "Le devis accepté et signé, accompagné le cas échéant d'un acompte, vaut bon de commande ferme et définitif.",
        ],
      },
      {
        title: '3. Conditions financières',
        paragraphs: [
          "Sauf mention contraire, les prix sont exprimés en dirhams marocains et hors taxes. Les frais techniques, de déplacement ou droits tiers sont refacturés sur justificatifs.",
          "Les règlements s'effectuent selon l'échéancier indiqué sur le devis. Tout retard de paiement entraîne l'application de pénalités conformément à la législation en vigueur.",
        ],
      },
      {
        title: '4. Propriété intellectuelle',
        paragraphs: [
          "Les créations réalisées par Genius Ad District demeurent sa propriété jusqu'au règlement complet des prestations.",
          "La cession des droits d'exploitation (durée, territoires, supports) fait l'objet d'une clause spécifique sur le devis ou le contrat.",
        ],
      },
      {
        title: '5. Confidentialité',
        paragraphs: [
          "Chaque partie s'engage à conserver strictement confidentielles les informations, documents et données échangés dans le cadre du projet.",
        ],
      },
      {
        title: '6. Responsabilité',
        paragraphs: [
          "Genius Ad District s'engage à mettre en œuvre tous les moyens nécessaires à la bonne réalisation des prestations.",
          "Sa responsabilité ne saurait être engagée en cas de force majeure ou de non-respect des obligations du client (retards de validation, fourniture de contenus, autorisations).",
        ],
      },
      {
        title: '7. Résiliation',
        paragraphs: [
          "En cas de résiliation par le client, les travaux réalisés et engagés restent dus. Les acomptes perçus demeurent acquis à Genius Ad District.",
        ],
      },
      {
        title: '8. Loi applicable et litiges',
        paragraphs: [
          "Les présentes CGV sont soumises au droit marocain. Tout litige sera porté devant les juridictions compétentes de Casablanca, après tentative de résolution amiable.",
        ],
      },
    ],
  },
  en: {
    title: 'General terms of sale',
    intro:
      'These general terms govern the services provided by Genius Ad District to its clients. They are shared with each commercial proposal and may be adjusted depending on the project.',
    lastUpdate: 'January 2025',
    sections: [
      {
        title: '1. Purpose',
        paragraphs: [
          'The terms define how Genius Ad District delivers consulting, creative, production, event, digital and related services.',
        ],
      },
      {
        title: '2. Orders and quotations',
        paragraphs: [
          'Each assignment is subject to a detailed quotation outlining the scope, timelines, budget and payment schedule.',
          'Acceptance and signature of the quotation, along with any requested deposit, constitute a firm order.',
        ],
      },
      {
        title: '3. Financial terms',
        paragraphs: [
          'Unless otherwise stated, prices are expressed in Moroccan dirhams and exclusive of taxes. Technical expenses, travel costs or third-party rights are re-invoiced based on actuals.',
          'Payments follow the schedule specified in the quotation. Late payments will incur penalties in accordance with applicable regulations.',
        ],
      },
      {
        title: '4. Intellectual property',
        paragraphs: [
          'Creative assets produced by Genius Ad District remain its property until full payment is received.',
          'Rights transfer (duration, territories, media) is specified in the quotation or contract.',
        ],
      },
      {
        title: '5. Confidentiality',
        paragraphs: [
          'Each party undertakes to keep confidential any information, documents or data exchanged during the project.',
        ],
      },
      {
        title: '6. Liability',
        paragraphs: [
          'Genius Ad District undertakes to implement all necessary means to deliver the services as agreed.',
          'The agency cannot be held liable in cases of force majeure or if the client fails to meet its obligations (delayed validations, provision of content, permits).',
        ],
      },
      {
        title: '7. Termination',
        paragraphs: [
          'If the client terminates the agreement, work carried out and committed costs remain due. Deposits already received are retained by Genius Ad District.',
        ],
      },
      {
        title: '8. Governing law',
        paragraphs: [
          'These terms are governed by Moroccan law. Any dispute will be submitted to the competent courts of Casablanca after an attempt at amicable resolution.',
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
  const content = termsContent[locale as 'fr' | 'en'] ?? termsContent.fr;

  return {
    title: `${content.title} – Genius Ad District`,
    description: content.intro,
  };
}

export default function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  const language = termsContent[locale as 'fr' | 'en'] ? (locale as 'fr' | 'en') : 'fr';
  const content = termsContent[language];

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

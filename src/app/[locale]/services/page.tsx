import { getTranslations } from 'next-intl/server';

export default async function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Services' });

  const blocks = [
    { title: t?.('branding') || 'Branding', desc: t?.('brandingDesc') || 'Identité de marque et systèmes visuels.' },
    { title: t?.('digital') || 'Digital & Web', desc: t?.('digitalDesc') || 'Sites web premium et produits digitaux.' },
    { title: t?.('events') || 'Événementiel', desc: t?.('eventsDesc') || 'Événements corporate et grand public.' },
    { title: t?.('production') || 'Production & Impression', desc: t?.('productionDesc') || 'Fabrication et impression haute qualité.' },
    { title: t?.('strategy') || 'Stratégie & Marketing', desc: t?.('strategyDesc') || 'Stratégies 360 orientées résultats.' },
    { title: t?.('space') || "Design d'Espace", desc: t?.('spaceDesc') || 'Espaces expérientiels et showrooms.' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
          {t?.('title') || (locale === 'fr' ? 'Nos Expertises' : 'Our Services')}
        </h1>
        <p className="text-white/70 text-lg mb-12 max-w-2xl">
          {t?.('subtitle') || (locale === 'fr' ? 'Une offre intégrée et premium pour accélérer vos projets.' : 'An integrated, premium offering to accelerate your projects.')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((b, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-white/70">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <p className="text-white/60">
            {t?.('ctaLead') || (locale === 'fr' ? 'Besoin d’un accompagnement ?' : 'Need guidance?')}
          </p>
          <a href={`/${locale}/contact`} className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors">
            {t?.('cta') || (locale === 'fr' ? 'Parler à un expert' : 'Talk to an expert')}
          </a>
        </div>
      </main>
    </div>
  );
}


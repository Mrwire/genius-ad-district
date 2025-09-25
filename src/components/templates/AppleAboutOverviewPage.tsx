"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface AppleAboutOverviewPageProps {
  locale: string;
}

const milestones = [
  { year: '1999', labelFr: 'Naissance à Casablanca', labelEn: 'Born in Casablanca' },
  { year: '2005', labelFr: 'Création de MPS, atelier intégré', labelEn: 'Launch of MPS integrated workshop' },
  { year: '2012', labelFr: 'Pivot digital & social media', labelEn: 'Digital & social media pivot' },
  { year: '2018', labelFr: 'Lancement de Gamius Esport', labelEn: 'Launch of Gamius Esport' },
  { year: '2025', labelFr: 'Vision « Made in Morocco for Africa »', labelEn: 'Vision “Made in Morocco for Africa”' },
];

const subsidiaries = [
  {
    slug: 'mps',
    titleFr: 'MPS – Manufacturing Performance Studio',
    titleEn: 'MPS – Manufacturing Performance Studio',
    copyFr: 'Atelier de fabrication intégré : menuiserie, métal, impression grand format, finitions premium.',
    copyEn: 'Integrated manufacturing studio: joinery, metal, large format printing, premium finishing.',
  },
  {
    slug: 'labrigad',
    titleFr: "LABRIG'Ad – Brand Experience",
    titleEn: "LABRIG'Ad – Brand Experience",
    copyFr: 'Dispositifs retail & activations brand-to-consumer avec design immersif et logistique terrain.',
    copyEn: 'Retail environments and brand-to-consumer activations with immersive design and field logistics.',
  },
  {
    slug: 'gamius',
    titleFr: 'Gamius – Gaming & Esport',
    titleEn: 'Gamius – Gaming & Esport',
    copyFr: 'Production de tournois, contenus live et expériences communautaires nouvelle génération.',
    copyEn: 'Production of tournaments, live content and next-gen community experiences.',
  },
  {
    slug: 'moujeleell',
    titleFr: 'Mouje & Leell – Creative Boutique',
    titleEn: 'Mouje & Leell – Creative Boutique',
    copyFr: 'Design, branding et campagnes lifestyle avec une signature artistique distinctive.',
    copyEn: 'Design, branding and lifestyle campaigns with a distinctive artistic signature.',
  },
];

export function AppleAboutOverviewPage({ locale }: AppleAboutOverviewPageProps) {
  const isFrench = locale === 'fr';

  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            {isFrench ? 'À propos' : 'About'}
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold">
            {isFrench ? 'Genius Ad District en un regard' : 'Genius Ad District at a glance'}
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/70 max-w-3xl mx-auto">
            {isFrench
              ? "Groupe de communication intégré, créateur d'expériences hybrides où la stratégie rencontre le design, la tech et la production."
              : 'Integrated communication group crafting hybrid experiences where strategy meets design, tech and production.'}
          </p>
        </motion.div>
      </div>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            {isFrench ? 'Timeline' : 'Timeline'}
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-5">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="rounded-2xl border border-white/10 bg-black/40 p-4 text-center">
                <p className="text-sm font-semibold text-white">{milestone.year}</p>
                <p className="mt-2 text-xs text-white/60">
                  {isFrench ? milestone.labelFr : milestone.labelEn}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-10"
        >
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                {isFrench ? 'Notre vision' : 'Our vision'}
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                {isFrench
                  ? 'Faire du Maroc un hub créatif rayonnant en Afrique et au-delà'
                  : 'Position Morocco as a creative hub for Africa and beyond'}
              </h2>
              <p className="mt-6 text-sm text-white/70 leading-relaxed">
                {isFrench
                  ? "Nous créons des expériences premium pour les marques internationales, institutions et acteurs culturels en combinant stratégie, créativité et capacité industrielle."
                  : 'We build premium experiences for global brands, institutions and cultural players by combining strategy, creativity and industrial capacity.'}
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/60 p-8 text-sm text-white/70">
              {isFrench
                ? "+20 ans d'expertise, 2600 m² d'ateliers, une équipe pluridisciplinaire de 160 talents et un réseau de partenaires sélectionnés."
                : '20+ years of expertise, 2,600 sqm workshops, a multidisciplinary team of 160 talents and a curated partner ecosystem.'}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                {isFrench ? 'Écosystème' : 'Ecosystem'}
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                {isFrench
                  ? 'Nos filiales, un réseau complémentaire'
                  : 'Subsidiaries working as one network'}
              </h2>
              <p className="mt-6 text-sm text-white/70 leading-relaxed">
                {isFrench
                  ? "Chaque filiale apporte son savoir-faire pour offrir des solutions intégrées : manufacturing, retail, gaming, design."
                  : 'Each subsidiary brings its expertise to deliver integrated solutions: manufacturing, retail, gaming, design.'}
              </p>
            </div>
            <div className="flex-1 grid gap-4">
              {subsidiaries.map((subsidiary) => (
                <Link
                  key={subsidiary.slug}
                  href={`/${locale}/filiales/${subsidiary.slug}`}
                  className="rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:bg-white/10"
                >
                  <p className="text-sm font-medium text-white">
                    {isFrench ? subsidiary.titleFr : subsidiary.titleEn}
                  </p>
                  <p className="mt-2 text-xs text-white/60">
                    {isFrench ? subsidiary.copyFr : subsidiary.copyEn}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10"
        >
          <h2 className="text-3xl font-semibold">
            {isFrench ? 'Envie de construire avec nous ?' : 'Ready to build with us?'}
          </h2>
          <p className="mt-4 text-sm text-white/70">
            {isFrench
              ? 'Contactez nos équipes pour imaginer des expériences sur mesure et des dispositifs innovants.'
              : 'Contact our teams to imagine bespoke experiences and innovative setups.'}
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="mailto:hello@genius-morocco.com"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20"
            >
              {isFrench ? 'Échanger avec nous' : 'Start a conversation'}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AppleAboutOverviewPage;

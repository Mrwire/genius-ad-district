"use client";

import { motion } from 'framer-motion';

interface AppleExpertisePageProps {
  locale: string;
}

const expertiseClusters = [
  {
    id: 'strategy',
    titleFr: 'Stratégie & Conseil',
    titleEn: 'Strategy & Consulting',
    highlightsFr: [
      'Plateformes de marque 360°',
      'Positionnement & architecture de marque',
      'Brand content & social media intelligence',
    ],
    highlightsEn: [
      '360° brand platforms',
      'Brand positioning & architecture',
      'Brand content & social intelligence',
    ],
  },
  {
    id: 'events',
    titleFr: 'Expériences & Événementiel',
    titleEn: 'Experiences & Events',
    highlightsFr: [
      'Sommet corporate & conventions',
      'Scénographie immersive',
      'Roadshows, tournées et activations terrain',
    ],
    highlightsEn: [
      'Corporate summits & conventions',
      'Immersive scenography',
      'Roadshows, tours & field activations',
    ],
  },
  {
    id: 'production',
    titleFr: 'Production & Fabrication',
    titleEn: 'Production & Fabrication',
    highlightsFr: [
      'Atelier intégré MPS de 2 600 m²',
      'Menuiserie, métal, impression grand format',
      'Prototypage et installations permanentes',
    ],
    highlightsEn: [
      'Integrated 2,600 sqm MPS workshop',
      'Joinery, metalwork, large format printing',
      'Prototyping and permanent installations',
    ],
  },
  {
    id: 'digital',
    titleFr: 'Digital, Tech & Gaming',
    titleEn: 'Digital, Tech & Gaming',
    highlightsFr: [
      'Plateformes web & e-commerce',
      'Expériences immersives XR',
      'Productions gaming & esports avec Gamius',
    ],
    highlightsEn: [
      'Web & e-commerce platforms',
      'XR immersive experiences',
      'Gaming & esports productions with Gamius',
    ],
  },
];

const innovationHighlights = [
  {
    labelFr: 'Design lab & prototypage rapide',
    labelEn: 'Design lab & rapid prototyping',
    detailFr: "Tests matériaux, éclairages et interactions en conditions réelles.",
    detailEn: 'Material, lighting and interaction tests in real-life conditions.',
  },
  {
    labelFr: 'Data & insights',
    labelEn: 'Data & insights',
    detailFr: "Outils propriétaires pour analyser les audiences et optimiser les parcours.",
    detailEn: 'Proprietary tools to analyse audiences and optimise journeys.',
  },
  {
    labelFr: 'Sustainable design',
    labelEn: 'Sustainable design',
    detailFr: "Approche éco-conçue : sourcing local, matériaux recyclés, réemploi des structures.",
    detailEn: 'Eco-design approach: local sourcing, recycled materials, structure re-use.',
  },
];

export function AppleExpertisePage({ locale }: AppleExpertisePageProps) {
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
            {isFrench ? 'Nos expertises' : 'Our expertise'}
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold">
            {isFrench
              ? 'De la stratégie à la production, une chaîne intégrée'
              : 'From strategy to production, an integrated chain'}
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/70 max-w-3xl mx-auto">
            {isFrench
              ? "Nous accompagnons les marques du brief à la livraison grâce à des expertises internalisées et des studios collaboratifs."
              : 'We support brands from brief to delivery thanks to in-house capabilities and collaborative studios.'}
          </p>
        </motion.div>
      </div>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {expertiseClusters.map((cluster, index) => (
            <motion.div
              key={cluster.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {isFrench ? cluster.titleFr : cluster.titleEn}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {(isFrench ? cluster.highlightsFr : cluster.highlightsEn).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-10"
        >
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                {isFrench ? 'Innovation' : 'Innovation'}
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                {isFrench
                  ? 'Des laboratoires pour explorer, tester et délivrer'
                  : 'Labs to explore, test and deliver'}
              </h2>
              <p className="mt-6 text-sm text-white/70 leading-relaxed">
                {isFrench
                  ? "Nos équipes activent des pilotes sur l'IA générative, le data design, les expériences immersives et la production durable pour anticiper les usages."
                  : 'Our teams launch pilots on generative AI, data design, immersive experiences and sustainable production to anticipate new uses.'}
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/60 p-8 text-sm text-white/70">
              {isFrench
                ? "Une gouvernance projet senior assure la cohérence créative et la performance business, quelle que soit l'ampleur du dispositif."
                : 'Senior project governance ensures creative coherence and business performance regardless of project scale.'}
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {innovationHighlights.map((item) => (
              <div key={item.labelFr} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="text-sm font-medium text-white">
                  {isFrench ? item.labelFr : item.labelEn}
                </p>
                <p className="mt-3 text-xs text-white/60">
                  {isFrench ? item.detailFr : item.detailEn}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default AppleExpertisePage;

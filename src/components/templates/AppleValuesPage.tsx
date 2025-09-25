"use client";

import { motion } from 'framer-motion';

interface AppleValuesPageProps {
  locale: string;
}

const valueBlocks = [
  {
    id: 'audace',
    titleFr: 'Audace maîtrisée',
    titleEn: 'Controlled Boldness',
    descriptionFr: "Nous cherchons l'effet waouh sans jamais sacrifier la cohérence stratégique ni la pertinence culturelle.",
    descriptionEn: 'We pursue wow effects without compromising strategic coherence or cultural relevance.',
  },
  {
    id: 'craft',
    titleFr: 'Excellence craft',
    titleEn: 'Craft Excellence',
    descriptionFr: "Chaque détail compte. Du storyboard au montage final, la qualité est non négociable.",
    descriptionEn: 'Every detail matters. From storyboard to final delivery, quality is non-negotiable.',
  },
  {
    id: 'responsable',
    titleFr: 'Impact responsable',
    titleEn: 'Responsible Impact',
    descriptionFr: "Nous développons des expériences qui respectent les communautés, les territoires et l'environnement.",
    descriptionEn: 'We design experiences that respect communities, territories and the environment.',
  },
  {
    id: 'collectif',
    titleFr: 'Puissance collective',
    titleEn: 'Collective Power',
    descriptionFr: "La collaboration inter-filiales est notre force : conseil, production, digital et entertainment se parlent en permanence.",
    descriptionEn: 'Cross-subsidiary collaboration is our strength: consulting, production, digital and entertainment work in sync.',
  },
];

const commitments = [
  {
    titleFr: 'Design centré sur l\'humain',
    titleEn: 'Human-centered design',
    detailFr: "Nous intégrons les attentes des audiences dès la conception pour créer des expériences mémorables.",
    detailEn: 'We integrate audience expectations from the start to craft memorable experiences.',
  },
  {
    titleFr: 'Technologie utile',
    titleEn: 'Purposeful technology',
    detailFr: "L'innovation est toujours au service d'une expérience fluide et inclusive.",
    detailEn: 'Innovation always serves a seamless and inclusive experience.',
  },
  {
    titleFr: 'Transmission & mentoring',
    titleEn: 'Transmission & mentoring',
    detailFr: "Nous faisons grandir la nouvelle génération de talents créatifs et techniques.",
    detailEn: 'We elevate the next generation of creative and technical talent.',
  },
];

export function AppleValuesPage({ locale }: AppleValuesPageProps) {
  const isFrench = locale === 'fr';

  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_65%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-40 pb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] text-white/60"
        >
          {isFrench ? 'Nos valeurs' : 'Our values'}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-4xl md:text-6xl font-semibold"
        >
          {isFrench
            ? 'Des convictions qui façonnent chaque projet'
            : 'Convictions that shape every single project'}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-base md:text-lg text-white/70"
        >
          {isFrench
            ? "Notre culture mêle ambition créative, rigueur opérationnelle et sens des responsabilités pour servir durablement les marques."
            : 'Our culture blends creative ambition, operational rigor and responsibility to deliver long-lasting brand impact.'}
        </motion.p>
      </div>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {valueBlocks.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {isFrench ? value.titleFr : value.titleEn}
              </p>
              <p className="mt-4 text-sm text-white/70">
                {isFrench ? value.descriptionFr : value.descriptionEn}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
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
                {isFrench ? 'Manifesto' : 'Manifesto'}
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                {isFrench
                  ? 'Créer des expériences iconiques et responsables'
                  : 'Design iconic and responsible experiences'}
              </h2>
              <p className="mt-6 text-sm text-white/70 leading-relaxed">
                {isFrench
                  ? "Nous croyons aux idées qui marquent durablement, à l'innovation utile et aux collaborations sincères avec nos clients et partenaires."
                  : 'We believe in ideas that leave a long-lasting mark, in purposeful innovation and in sincere collaboration with our clients and partners.'}
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/60 p-8 text-sm text-white/70">
              {isFrench
                ? "Chaque filiale porte les valeurs du groupe et les adapte à son terrain d'expression : retail, événementiel, entertainment ou production."
                : 'Every subsidiary embraces the group values and adapts them to its specific playground: retail, events, entertainment or production.'}
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {commitments.map((item) => (
              <div key={item.titleFr} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="text-sm font-medium text-white">
                  {isFrench ? item.titleFr : item.titleEn}
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

export default AppleValuesPage;

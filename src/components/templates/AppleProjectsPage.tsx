"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface AppleProjectsPageProps {
  locale: string;
}

const flagshipProjects = [
  {
    title: 'Africa Business Summit',
    industry: 'Corporate',
    descriptionFr: "Un sommet phygital réunissant 1 500 dirigeants avec scénographie immersive et diffusion live multi-plateformes.",
    descriptionEn: 'A phygital summit gathering 1,500 leaders with immersive scenography and multi-platform live broadcast.',
    impactFr: 'Satisfaction participants 97 %, couverture media internationale',
    impactEn: '97% attendee satisfaction, international media coverage',
  },
  {
    title: 'RedOne Experience',
    industry: 'Entertainment',
    descriptionFr: "Tournée nationale avec scénographie modulable, contenus immersifs et activations social media temps réel.",
    descriptionEn: 'National tour with modular scenography, immersive content and real-time social activations.',
    impactFr: '12 villes, 120 000 participants, 80M impressions social',
    impactEn: '12 cities, 120,000 attendees, 80M social impressions',
  },
  {
    title: 'Gamius Masters',
    industry: 'Esport',
    descriptionFr: "Compétition esport premium alliant plateforme de streaming propriétaire, production broadcast et fan experience.",
    descriptionEn: 'Premium esport competition blending proprietary streaming platform, broadcast production and fan experience.',
    impactFr: 'Audience live x3 vs édition précédente, +40 partenaires activés',
    impactEn: 'Live audience x3 vs previous edition, 40+ partners engaged',
  },
];

const projectStacks = [
  {
    titleFr: 'Design & storytelling',
    titleEn: 'Design & storytelling',
    bulletsFr: [
      'Narration de marque & creative writing',
      'Design system & art direction',
      'Motion & content premium',
    ],
    bulletsEn: [
      'Brand storytelling & creative writing',
      'Design systems & art direction',
      'Motion & premium content',
    ],
  },
  {
    titleFr: 'Production & logistique',
    titleEn: 'Production & logistics',
    bulletsFr: [
      'Atelier intégré pour décors et stands',
      'Opérations terrain & coordination multi-sites',
      'Gestion budgétaire temps réel',
    ],
    bulletsEn: [
      'In-house workshop for sets and booths',
      'On-field operations & multi-site coordination',
      'Real-time budget management',
    ],
  },
  {
    titleFr: 'Data & amplification',
    titleEn: 'Data & amplification',
    bulletsFr: [
      'Dashboard KPI unifié',
      'Activation media & influence',
      'Post-event analytics & ROI tracking',
    ],
    bulletsEn: [
      'Unified KPI dashboard',
      'Media & influence activation',
      'Post-event analytics & ROI tracking',
    ],
  },
];

export function AppleProjectsPage({ locale }: AppleProjectsPageProps) {
  const isFrench = locale === 'fr';

  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] text-white/60"
        >
          {isFrench ? 'Réalisations' : 'Case studies'}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-4xl md:text-6xl font-semibold"
        >
          {isFrench
            ? 'Des projets signature qui marquent durablement'
            : 'Signature projects that leave a lasting mark'}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-base md:text-lg text-white/70 max-w-3xl mx-auto"
        >
          {isFrench
            ? "Chaque réalisation combine storytelling, craft premium et dispositif opérationnel millimétré pour générer un impact mesurable."
            : 'Every case study blends storytelling, premium craft and precise operations to drive measurable impact.'}
        </motion.p>
      </div>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {flagshipProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl text-left"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{project.industry}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-sm text-white/70">
                {isFrench ? project.descriptionFr : project.descriptionEn}
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-4 text-xs text-white/60">
                {isFrench ? project.impactFr : project.impactEn}
              </div>
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
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                {isFrench ? 'Méthodologie' : 'Methodology'}
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                {isFrench
                  ? 'Un framework agile pensé pour les marques en mouvement'
                  : 'An agile framework engineered for modern brands'}
              </h2>
              <p className="mt-6 text-sm text-white/70 leading-relaxed">
                {isFrench
                  ? "Nous combinons design sprints, production intégrée et pilotage data pour livrer vite et bien."
                  : 'We combine design sprints, integrated production and data governance to deliver fast and flawlessly.'}
              </p>
              <div className="mt-8 inline-flex rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white/80">
                {isFrench ? 'Temps moyen de déploiement : 6 semaines' : 'Average deployment time: 6 weeks'}
              </div>
            </div>
            <div className="grid gap-4">
              {projectStacks.map((stack) => (
                <div key={stack.titleFr} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                  <p className="text-sm font-medium text-white">
                    {isFrench ? stack.titleFr : stack.titleEn}
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-white/60">
                    {(isFrench ? stack.bulletsFr : stack.bulletsEn).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs text-white/50">
            <span>#experiential</span>
            <span>#retail</span>
            <span>#esport</span>
            <span>#corporate</span>
            <span>#phygital</span>
          </div>
        </motion.div>
      </section>

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-semibold">
            {isFrench ? 'Prêt à imaginer votre prochain projet ?' : 'Ready to imagine your next project?'}
          </h2>
          <p className="mt-4 text-sm text-white/70">
            {isFrench
              ? 'Parlons objectifs business, audiences, production et amplification. Nous concevons des dispositifs sur mesure.'
              : 'Let’s talk business goals, audiences, production and amplification. We design tailor-made setups.'}
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="mailto:hello@genius-morocco.com"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20"
            >
              {isFrench ? 'Co-créer un projet' : 'Co-create a project'}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AppleProjectsPage;

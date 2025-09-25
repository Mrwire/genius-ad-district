"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface AppleTeamPageProps {
  locale: string;
}

const executives = [
  {
    name: 'Yassine Aissaoui',
    roleFr: 'Fondateur & Président',
    roleEn: 'Founder & President',
    descriptionFr: "Visionnaire du groupe, Yassine orchestre l'évolution de Genius Ad District et fédère les talents autour d'une ambition commune : créer l'impact.",
    descriptionEn: 'Visionary leader of the group, Yassine orchestrates the evolution of Genius Ad District and rallies talent around a shared ambition: creating impact.',
    focusFr: 'Stratégie globale & innovation',
    focusEn: 'Global strategy & innovation',
  },
  {
    name: 'Samia Benkirane',
    roleFr: 'Directrice Générale',
    roleEn: 'Managing Director',
    descriptionFr: "Chef d'orchestre opérationnel, Samia incarne l'excellence de service et la précision d'exécution au quotidien.",
    descriptionEn: 'Operational conductor, Samia embodies service excellence and flawless execution every day.',
    focusFr: 'Opérations & relation clients',
    focusEn: 'Operations & client partnership',
  },
  {
    name: 'Othmane Aissaoui',
    roleFr: 'Directeur Général Adjoint',
    roleEn: 'Deputy Managing Director',
    descriptionFr: "Architecte des expériences phygitales, Othmane aligne les expertises tech, gaming et entertainment du groupe.",
    descriptionEn: 'Architect of phygital experiences, Othmane aligns the group\'s tech, gaming and entertainment capabilities.',
    focusFr: 'Innovation phygitale & entertainment',
    focusEn: 'Phygital innovation & entertainment',
  },
];

const studioPillars = [
  {
    id: 'brand',
    titleFr: 'Brand Leadership',
    titleEn: 'Brand Leadership',
    descriptionFr: "Des stratèges seniors qui sculptent des plateformes de marque audacieuses, nourries par la data et la culture locale.",
    descriptionEn: 'Senior strategists who sculpt bold brand platforms rooted in data and local culture.',
  },
  {
    id: 'experience',
    titleFr: 'Experiential Labs',
    titleEn: 'Experiential Labs',
    descriptionFr: "Scénographes, producers et techniciens coordonnés autour d'expériences immersives premium.",
    descriptionEn: 'Scenographers, producers and technicians orchestrating premium immersive experiences.',
  },
  {
    id: 'content',
    titleFr: 'Content Atelier',
    titleEn: 'Content Atelier',
    descriptionFr: "Créatifs, designers et réalisateurs unissent craft et technologies pour produire des contenus iconiques.",
    descriptionEn: 'Creatives, designers and directors blend craft and technology to produce iconic content.',
  },
  {
    id: 'tech',
    titleFr: 'Tech & Innovation',
    titleEn: 'Tech & Innovation',
    descriptionFr: "Développeurs, experts data et spécialistes gaming construisent des expériences digitales évolutives.",
    descriptionEn: 'Developers, data experts and gaming specialists build scalable digital experiences.',
  },
];

const cultureMoments = [
  {
    labelFr: 'Growth Mindset',
    labelEn: 'Growth Mindset',
    detailFr: "Nous créons des équipes apprenantes où chaque projet est une opportunité de progression collective.",
    detailEn: 'We cultivate learning teams where every project is an opportunity for collective growth.',
  },
  {
    labelFr: 'Craft obsession',
    labelEn: 'Craft obsession',
    detailFr: "Le souci du détail s'applique au design, aux mots, aux matériaux et aux gestes techniques.",
    detailEn: 'An obsession for detail applies to design, wording, materials and technical gestures.',
  },
  {
    labelFr: 'Esprit de tribe',
    labelEn: 'Tribe Spirit',
    detailFr: "Nous valorisons l'écoute, la diversité des talents et l'entraide dans chaque filiale.",
    detailEn: 'We value listening, diverse talents and mutual support across every subsidiary.',
  },
  {
    labelFr: 'Impact positif',
    labelEn: 'Positive Impact',
    detailFr: "Nos initiatives placent l'humain, les territoires et la responsabilité au cœur de l'action.",
    detailEn: 'Our initiatives put people, territories and responsibility at the heart of every action.',
  },
];

export function AppleTeamPage({ locale }: AppleTeamPageProps) {
  const isFrench = locale === 'fr';

  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" aria-hidden="true" />
      <div className="relative z-10 px-6 pt-40 pb-24 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.4em] text-white/60 text-xs md:text-sm">
            {isFrench ? 'L\'équipe' : 'The Team'}
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
            {isFrench
              ? 'Les femmes et les hommes derrière les expériences Genius'
              : 'The people crafting every Genius experience'}
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/70 max-w-3xl mx-auto">
            {isFrench
              ? "Une équipe pluridisciplinaire rassemblant stratèges, créatifs, producteurs, ingénieurs et makers pour transformer les idées en expériences mémorables."
              : 'A multidisciplinary collective of strategists, creatives, producers, engineers and makers transforming bold ideas into memorable experiences.'}
          </p>
        </motion.div>
      </div>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {executives.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-white/50">
                    {isFrench ? 'Leadership' : 'Leadership'}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold">{leader.name}</h3>
                  <p className="mt-1 text-white/60">
                    {isFrench ? leader.roleFr : leader.roleEn}
                  </p>
                </div>
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <Image
                    src="/item_images/logo/genius_black.png"
                    alt={leader.name}
                    fill
                    className="object-contain p-3 invert"
                  />
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/70">
                {isFrench ? leader.descriptionFr : leader.descriptionEn}
              </p>
              <div className="mt-6 rounded-2xl bg-white/5 p-4 text-sm text-white/80">
                {isFrench ? leader.focusFr : leader.focusEn}
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
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10"
        >
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <p className="uppercase tracking-[0.4em] text-xs text-white/50">
                {isFrench ? 'Studios intégrés' : 'Integrated studios'}
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
                {isFrench
                  ? 'Quatre piliers qui unissent stratégie, création, production et innovation'
                  : 'Four pillars blending strategy, creation, production and innovation'}
              </h2>
              <p className="mt-6 text-white/70 text-base">
                {isFrench
                  ? "Chaque mission assemble les talents exacts : planners, creative technologists, art directors, producers, ingénieurs IA, scénographes… Une mécanique agile au service des marques."
                  : 'Every mission activates the right talents: planners, creative technologists, art directors, producers, AI engineers, scenographers… An agile machine serving ambitious brands.'}
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/60 p-8 text-white/70">
              <p className="text-sm leading-relaxed">
                {isFrench
                  ? "+160 talents répartis entre Casablanca et Paris, unis par une même obsession du résultat et du détail."
                  : '+160 talents across Casablanca and Paris united by the same obsession for results and detail.'}
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {studioPillars.map((pillar) => (
              <div key={pillar.id} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{pillar.titleFr}</p>
                <p className="mt-3 text-sm text-white/70">
                  {isFrench ? pillar.descriptionFr : pillar.descriptionEn}
                </p>
              </div>
            ))}
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
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                {isFrench ? 'Culture' : 'Culture'}
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                {isFrench ? 'Une culture d\'excellence humaine' : 'A culture of human excellence'}
              </h2>
              <p className="mt-6 text-sm text-white/70 leading-relaxed">
                {isFrench
                  ? "Nous investissons dans des programmes de formation internes, des rituels d'inspiration hebdomadaires et des immersions culturelles pour garder une longueur d'avance."
                  : 'We invest in internal training programs, weekly inspiration rituals and cultural immersions to stay ahead of the curve.'}
              </p>
              <div className="mt-8">
                <Link
                  href="mailto:hello@genius-morocco.com"
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20"
                >
                  {isFrench ? 'Rencontrer nos équipes' : 'Meet our teams'}
                </Link>
              </div>
            </div>
            <div className="flex-1 grid gap-4">
              {cultureMoments.map((moment) => (
                <div key={moment.labelFr} className="rounded-2xl border border-white/10 bg-black/50 p-5">
                  <p className="text-sm font-medium text-white">
                    {isFrench ? moment.labelFr : moment.labelEn}
                  </p>
                  <p className="mt-2 text-xs text-white/60">
                    {isFrench ? moment.detailFr : moment.detailEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default AppleTeamPage;

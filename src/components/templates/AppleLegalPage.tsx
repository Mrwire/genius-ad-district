"use client";

import { motion } from 'framer-motion';

interface LegalSection {
  title: string;
  paragraphs: string[];
}

interface AppleLegalPageProps {
  locale: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  lastUpdate: string;
}

export function AppleLegalPage({ locale, title, intro, sections, lastUpdate }: AppleLegalPageProps) {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            {locale === 'fr' ? 'Information officielle' : 'Official Information'}
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold">{title}</h1>
          <p className="mt-6 text-sm text-white/70 leading-relaxed">{intro}</p>
          <p className="mt-4 text-xs text-white/40">{locale === 'fr' ? 'Dernière mise à jour :' : 'Last update:'} {lastUpdate}</p>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 space-y-12">
        {sections.map((section, index) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            <div className="mt-4 space-y-4 text-sm text-white/70 leading-relaxed">
              {section.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}

export default AppleLegalPage;

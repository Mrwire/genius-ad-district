'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '@/components/atoms/Container';
import { Paintbrush, Factory, MapPin } from 'lucide-react';

export function GroupSynergySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Données des cartes de synergie avec informations réelles
  const synergyCards = [
    {
      title: 'GENIUS',
      action: 'crée',
      description: 'Agence créative principale avec des experts en design, stratégie et digital. Dirigée par des Manager créatifs et Technical Manager spécialisés.',
      icon: Paintbrush,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'MPS',
      action: 'produit',
      description: 'Atelier de production de 2 600 m² avec Workshop Manager, Technical Manager Manufacturing, et une équipe complète de techniciens spécialisés et ingénieurs.',
      icon: Factory,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'LABRIG\'AD',
      action: 'déploie',
      description: 'Équipe terrain avec Layout Designer, Operations Technicians et Quality Control Manager pour garantir une implémentation parfaite de chaque projet sur site.',
      icon: MapPin,
      color: 'from-amber-500 to-red-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-black text-white overflow-hidden">
      <Container>
        {/* Titre de section stylisé comme Apple */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Un groupe, trois forces
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto"
          >
            Cette synergie garantit cohérence, réactivité et excellence opérationnelle, du concept à l'expérience finale.
          </motion.p>
        </div>

        {/* Cartes de synergie inspirées d'Apple */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-16">
          {synergyCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
              className="group relative bg-gray-900 rounded-2xl p-8 overflow-hidden shadow-lg border border-white/10 h-full"
            >
              {/* Dégradé d'arrière-plan interactif */}
              <div className={`absolute -inset-1 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r ${card.color} blur-md rounded-2xl -z-10`} />
              
              {/* Cercle d'icône */}
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 border border-white/10">
                <card.icon className="h-7 w-7 text-white" />
              </div>

              {/* Contenu de la carte */}
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-lg font-medium text-primary-400 mb-4">{card.action}</p>
              <p className="text-gray-300">{card.description}</p>

              {/* Effet de reflet Apple */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.07] pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Citation d'équipe */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-2xl md:text-3xl font-light italic text-gray-200 max-w-4xl mx-auto">
            <span className="text-primary-400">"</span>
            GENIUS crée · MPS produit · LABRIG'Ad déploie. Cette synergie parfaite nous permet de maîtriser l'intégralité de la chaîne de valeur.
            <span className="text-primary-400">"</span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

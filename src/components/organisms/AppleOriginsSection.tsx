'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/atoms/Container';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { 
  ArrowRight, 
  Lightbulb, 
  Sparkles, 
  Monitor, 
  Workflow 
} from 'lucide-react';

interface OriginsPoint {
  description: string;
  icon: any;
  detail: string;
}

interface AppleOriginsSectionProps {
  originsPoints: Array<{ description: string }>;
}

export function AppleOriginsSection({ originsPoints }: AppleOriginsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Transformation des points en objets plus riches avec des icônes et des détails
  const enhancedPoints: OriginsPoint[] = [
    {
      description: originsPoints[0].description,
      icon: Lightbulb,
      detail: "En 1999, dans un modeste atelier de 20m² au cœur de Casablanca, l'histoire de GENIUS a commencé. Dans cet espace restreint, nous avons transformé les contraintes en avantages, faisant de ce laboratoire d'idées le berceau d'une vision revolutionnaire de la communication au Maroc."
    },
    {
      description: originsPoints[1].description,
      icon: Sparkles,
      detail: "Dès nos débuts, nous avons conquis nos premiers clients avec des campagnes « out of the box » qui ont défié les conventions. Notre engagement envers l'EXCELLENCE et le SUR-MESURE nous a permis de créer des solutions uniques qui ont véritablement marqué le paysage publicitaire marocain."
    },
    {
      description: originsPoints[2].description,
      icon: Monitor,
      detail: "Avec PASSION et INNOVATION, nous avons embrasé le numérique bien avant qu'il ne devienne incontournable. Nos premiers sites web, animations Flash et créations 3D témoignent de notre volonté d'être précurseurs dans un marché alors dominé par les médias traditionnels."
    },
    {
      description: originsPoints[3].description,
      icon: Workflow,
      detail: "Inspirés par l'esprit d'innovation de Steve Jobs, nous avons adopté une philosophie « Think different » dès le premier jour. Ce RESPECT pour la créativité audacieuse et cette maîtrise de la TECHNOLOGIE forment l'ESPRIT fondamental qui continue de définir GENIUS plus de 25 ans après sa création."
    }
  ];

  // Animation variants pour les différents éléments
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      transition: { duration: 0.3, ease: "easeIn" }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // Données pour l'onglet "Timeline" basé sur l'histoire et l'infrastructure réelle de GENIUS
  const timelineItems = [
    {
      year: '1999',
      title: 'Fondation de Genius',
      description: 'Création de Genius Ad District à Casablanca. Deux esprits iconoclastes fusionnent design et technologie pour réinventer la communication au Maroc dans un atelier de 20m².'
    },
    {
      year: '2005',
      title: 'MPS voit le jour',
      description: 'Ouverture de l\'atelier de production MPS avec une équipe technique complète : Manager, Technical Sales, Technical Manager Manufacturing, et des spécialistes dédiés aux opérations de production.'
    },
    {
      year: '2012',
      title: 'Infrastructure d\'excellence',
      description: 'Développement d\'un site de production de 2 600 m² doté de ressources humaines et matérielles de pointe : Workshop Manager, Welding Engineer, Machinery Manager et une équipe de techniciens spécialisés.'
    },
    {
      year: '2018',
      title: 'Synergie intégrée',
      description: 'Perfectionnement de notre écosystème avec des équipes complémentaires : Quality Control Manager, Inventory Manager, Layout Designer et Sales Manager, permettant une chaîne de valeur entièrement intégrée.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      <Container>
        {/* Titre de section et tabs à la Apple */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Nos origines
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              1999, Casablanca. Deux esprits iconoclastes fusionnent design et technologie pour réinventer la communication au Maroc. Aujourd'hui, une infrastructure de 2 600 m² et une équipe complète de spécialistes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Tabs
              defaultValue="overview"
              onValueChange={setActiveTab}
              className="w-full max-w-md mx-auto"
            >
              <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-full h-12 p-1">
                <TabsTrigger 
                  value="overview" 
                  className="rounded-full text-gray-700 font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200"
                >
                  Vue d'ensemble
                </TabsTrigger>
                <TabsTrigger 
                  value="timeline" 
                  className="rounded-full text-gray-700 font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200"
                >
                  Chronologie
                </TabsTrigger>
                <TabsTrigger 
                  value="gallery" 
                  className="rounded-full text-gray-700 font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200"
                >
                  Infrastructure
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
        </div>

        {/* Contenu des tabs */}
        <div className="mt-12">
          {/* Tab 1: Vue d'ensemble */}
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Colonne d'image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative rounded-2xl overflow-hidden aspect-video shadow-xl"
              >
                <Image
                  src="/item_images/projet/our_story.png"
                  alt="Notre histoire GENIUS"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>

              {/* Colonne de texte */}
              <motion.div 
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <div className="space-y-6">
                  {enhancedPoints.map((point, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      whileHover="hover"
                      onClick={() => setActiveCard(activeCard === index ? null : index)}
                      className="cursor-pointer"
                    >
                      <Card 
                        className={cn(
                          "transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300",
                          activeCard === index ? "bg-gradient-to-r from-blue-50 to-indigo-50" : "bg-white"
                        )}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={cn(
                              "p-2 rounded-lg",
                              activeCard === index ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white" : "bg-gray-100 text-gray-700"
                            )}>
                              <point.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className={cn(
                                "text-base md:text-lg font-medium",
                                activeCard === index ? "text-blue-700" : "text-gray-900"
                              )}>
                                {point.description}
                              </p>
                              <AnimatePresence>
                                {activeCard === index && (
                                  <motion.p 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-gray-600 mt-2 text-sm"
                                  >
                                    {point.detail}
                                  </motion.p>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Colonne d'image */}
              <div className="order-1 md:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
                >
                  <Image 
                    src="/images/history/origins.jpg"
                    alt="Nos origines"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Effet de brillance comme sur les produits Apple */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                  
                  {/* Bordure fine style Apple */}
                  <div className="absolute inset-0 border border-gray-200/10 rounded-2xl pointer-events-none" />
                  
                  {/* Point lumineux */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 h-32 w-32 rounded-full bg-blue-400/30 blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </div>
          )}

          {/* Tab 2: Chronologie */}
          {activeTab === 'timeline' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative py-8">
                {/* Ligne de timeline verticale */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200">
                  <motion.div 
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-600 to-indigo-400" 
                    initial={{ height: "0%" }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
                
                {/* Éléments de timeline */}
                <div className="relative space-y-12">
                  {timelineItems.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                      {/* Cercle sur la ligne de timeline */}
                      <div className="absolute left-4 md:left-1/2 transform md:translate-x-[-50%] w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500 shadow-lg" />
                      
                      {/* Contenu */}
                      <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 text-left'}`}>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                            {item.year}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 3: Galerie */}
          {activeTab === 'gallery' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover="hover"
                  transition={{ delay: item * 0.1 }}
                  className="relative overflow-hidden rounded-xl aspect-[3/2] shadow-md"
                >
                  <Image
                    src={`/images/history/gallery-${item}.jpg`}
                    alt={`Photo d'archive ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium text-sm">Début des années 2000 - Les premières créations</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Citation à la Steve Jobs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <blockquote className="text-2xl md:text-3xl font-light italic text-gray-700">
            <span className="text-blue-600">"</span>
            Genius est né d'une conviction simple : la créativité n'a de valeur que si elle change la donne.
            <span className="text-blue-600">"</span>
          </blockquote>
          <p className="mt-4 text-gray-500">— ESPRIT Genius, depuis 1999</p>
        </motion.div>
      </Container>
    </section>
  );
}

'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import SubsidiaryHeader from '@/components/organisms/SubsidiaryHeader';
import { Footer } from '@/components/organisms/Footer';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Get the subsidiary data
const subsidiaryData = {
  id: 'moujeleell',
  name: 'Mouje & Leell',
  fullName: 'Mobilier de Luxe & Solutions Architecturales',
  description: 'Mobilier sur mesure et solutions de design innovantes pour architectes et professionnels.',
  color: 'moujeleell',
  heroImage: '/subsidiaries/moujeleell-hero.jpg',
  services: [
    {
      title: 'Mobilier Sur Mesure',
      description: 'Création de mobilier personnalisé selon vos spécifications et besoins uniques.',
      icon: '🪑'
    },
    {
      title: 'Solutions pour Architectes',
      description: 'Outils de conception et visualisation 3D pour vos projets architecturaux.',
      icon: '🏗️'
    },
    {
      title: 'Design d\'Intérieur',
      description: 'Services de conseil en design d\'intérieur pour espaces résidentiels et commerciaux.',
      icon: '🎨'
    },
    {
      title: 'Matériaux Durables',
      description: 'Sélection de matériaux éco-responsables pour un design durable et respectueux de l\'environnement.',
      icon: '🌱'
    }
  ],
  projects: [
    {
      title: 'Collection Hôtellerie',
      description: 'Mobilier sur mesure pour un complexe hôtelier 5 étoiles à Marrakech.',
      image: '/subsidiaries/moujeleell-project1.jpg'
    },
    {
      title: 'Bureaux Corporatifs',
      description: 'Aménagement complet des espaces de travail pour siège social multinational.',
      image: '/subsidiaries/moujeleell-project2.jpg'
    },
    {
      title: 'Résidence Privée',
      description: 'Conception et réalisation de mobilier exclusif pour villa de luxe.',
      image: '/subsidiaries/moujeleell-project3.jpg'
    }
  ],
  materials: [
    'Bois Massif', 'Marbre', 'Métal', 'Verre Trempé',
    'Cuir', 'Textiles Haut de Gamme', 'Matériaux Recyclés', 'Finitions Écologiques'
  ],
  softwareFeatures: [
    'Modélisation 3D', 'Visualisation en Réalité Augmentée', 'Personnalisation en Temps Réel',
    'Simulation de Matériaux', 'Devis Automatisés', 'Collaboration Multi-utilisateurs'
  ]
};

export default function MoujeleellPage() {
  const { locale } = useParams();
  
  return (
    <div className="min-h-screen bg-black text-white" data-subsidiary="moujeleell">
      <SubsidiaryHeader subsidiarySlug="moujeleell" transparent={true} />
      
      <main className="flex flex-col">
        {/* Hero Section - Coming Soon Shop */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ 
              backgroundImage: `url(${subsidiaryData.heroImage})`,
              opacity: 0.2,
            }}
          />
          
          {/* Construction-themed overlay */}
          <div className="absolute inset-0 z-5 opacity-30 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-yellow-500/20 to-transparent" />
            <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-l from-yellow-500/20 to-transparent" />
            
            {/* Construction patterns */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-full h-full max-w-5xl border-8 border-dashed border-yellow-500 transform rotate-3" />
            </div>
            
            {/* Coming soon text - diagonal */}
            <div className="absolute top-1/4 right-0 transform rotate-45 origin-top-right">
              <div className="bg-moujeleell/60 py-2 px-16 text-white font-bold text-xl">
                BIENTÔT DISPONIBLE
              </div>
            </div>
          </div>
          
          <div className="container px-4 mx-auto relative z-20">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="inline-block mb-6 px-4 py-1 border-2 border-moujeleell rounded-full text-moujeleell font-medium"
              >
                <span className="animate-pulse inline-block mr-2 w-2 h-2 bg-moujeleell rounded-full"></span>
                En Construction
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {subsidiaryData.name}
              </motion.h1>
              
              <motion.p 
                className="text-2xl text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {subsidiaryData.fullName}
              </motion.p>
              
              <motion.p 
                className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Notre boutique en ligne de mobilier haut de gamme est en cours de développement. 
                Bientôt, vous pourrez concevoir et commander des meubles sur mesure grâce à notre 
                plateforme de personnalisation exclusive.
              </motion.p>
              
              <motion.div
                className="flex flex-col md:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Link href="/contact?service=moujeleell">
                  <Button 
                    className="bg-moujeleell hover:bg-moujeleell/80 text-white w-full md:w-auto"
                    size="lg"
                  >
                    Être notifié au lancement
                    Voir nos projets
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Technologies Section */}
        <section className="py-16 bg-gray-900">
          <div className="container px-4 mx-auto">
            <Typography variant="h6" className="text-center text-moujeleell mb-8">
              NOS TECHNOLOGIES
            </Typography>
            <div className="mb-6">
              <Typography variant="h4" className="text-xl font-medium mb-3">
                Matériaux Premium
              </Typography>
              <div className="flex flex-wrap gap-2 justify-center">
                {subsidiaryData.materials.map((material: string, index: number) => (
                  <span 
                    key={index}
                    className="text-sm bg-moujeleell/10 text-moujeleell px-3 py-1 rounded-full"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <Typography variant="h4" className="text-xl font-medium mb-3">
                Fonctionnalités de notre Plateforme
              </Typography>
              <div className="flex flex-wrap gap-2 justify-center">
                {subsidiaryData.softwareFeatures.map((feature: string, index: number) => (
                  <span 
                    key={index}
                    className="text-sm bg-moujeleell/10 text-moujeleell px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Digital Approach Section */}
        <section className="py-20 bg-black">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Typography variant="h6" className="text-moujeleell mb-4">
                  NOTRE APPROCHE
                </Typography>
                <Typography variant="h3" className="font-bold mb-6">
                  L'Innovation Digitale au Service de vos Objectifs
                </Typography>
                <Typography variant="body" color="muted" className="mb-6 text-lg">
                  Mouje & Leell allie expertise technique et vision stratégique pour développer des solutions digitales qui répondent précisément à vos objectifs business.
                </Typography>
                <Typography variant="body" color="muted" className="text-lg mb-6">
                  Notre équipe multidisciplinaire analyse vos besoins, conçoit des architectures robustes et développe des solutions scalables avec une attention particulière à l'expérience utilisateur.
                </Typography>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex flex-col items-center text-center p-4 bg-moujeleell bg-opacity-5 rounded-lg">
                    <span className="text-4xl mb-3">🔍</span>
                    <Typography variant="h6" className="mb-2">
                      Analyse
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-moujeleell bg-opacity-5 rounded-lg">
                    <span className="text-4xl mb-3">🎨</span>
                    <Typography variant="h6" className="mb-2">
                      Design
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-moujeleell bg-opacity-5 rounded-lg">
                    <span className="text-4xl mb-3">⚙️</span>
                    <Typography variant="h6" className="mb-2">
                      Développement
                    </Typography>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-moujeleell bg-opacity-5 rounded-lg">
                    <span className="text-4xl mb-3">📊</span>
                    <Typography variant="h6" className="mb-2">
                      Optimisation
                    </Typography>
                  </div>
                </div>
              </motion.div>
              <div className="relative">
                <motion.div 
                  className="relative rounded-lg overflow-hidden shadow-2xl border border-moujeleell/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <img
                    src="/subsidiaries/moujeleell-approach.jpg"
                    alt="Digital Approach"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  {/* Design elements */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-moujeleell/20 to-transparent opacity-70" />
                </motion.div>
                {/* Decorative code elements */}
                <div className="absolute -top-5 -right-5 bg-black text-moujeleell p-3 rounded-lg text-xs font-mono rotate-3 shadow-xl">
                  &lt;code&gt;
                </div>
                <div className="absolute -bottom-5 -left-5 bg-black text-moujeleell p-3 rounded-lg text-xs font-mono -rotate-3 shadow-xl">
                  &lt;/code&gt;
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20 bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Typography 
                variant="h2" 
                className="font-bold mb-6"
              >
                Nos Services
              </Typography>
              <Typography variant="body" color="muted" className="text-lg">
                Mouje & Leell propose une gamme complète de services digitaux pour répondre à tous vos besoins.
              </Typography>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subsidiaryData.services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-black p-8 rounded-lg border border-gray-800 hover:border-moujeleell transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <Typography variant="h4" className="mb-3">
                    {service.title}
                  </Typography>
                  <Typography variant="body" color="muted">
                    {service.description}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Typography 
                variant="h2" 
                className="font-bold mb-6"
              >
                Projets Récents
              </Typography>
              <Typography variant="body" color="muted" className="text-lg">
                Découvrez nos solutions digitales récentes et comment nous avons aidé nos clients à se transformer digitalement.
              </Typography>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subsidiaryData.projects.map((project, index) => (
                <motion.div 
                  key={index}
                  className="group relative overflow-hidden rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div 
                    className="aspect-[4/3] bg-cover bg-center" 
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  {/* Custom digital-themed overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-moujeleell/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Typography variant="h5" className="mb-2">
                      {project.title}
                    </Typography>
                    <Typography variant="body" color="muted">
                      {project.description}
                    </Typography>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/filiales/moujeleell/case-studies">
                <Button variant="secondary" className="border-moujeleell text-moujeleell hover:bg-moujeleell/10">
                  Voir tous nos projets
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-moujeleell bg-opacity-10">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <Typography variant="h2" className="font-bold mb-6">
                Lancez votre Projet Digital
              </Typography>
              <Typography variant="body" color="muted" className="text-lg mb-8">
                Que vous ayez besoin d'un site web, d'une application mobile ou d'une stratégie digitale complète, notre équipe est prête à transformer votre vision en réalité.
              </Typography>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact?service=moujeleell">
                  <Button 
                    size="lg" 
                    className="bg-moujeleell hover:bg-moujeleell-dark text-white w-full sm:w-auto"
                  >
                    Demander un Devis
                  </Button>
                </Link>
                <Link href="/filiales/moujeleell/services">
                  <Button 
                    variant="secondary"
                    size="lg"
                    className="border-white/10 hover:bg-white/5 w-full sm:w-auto"
                  >
                    Explorer nos Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer variant="subsidiary" subsidiaryColor="moujeleell" />
    </div>
  );
}

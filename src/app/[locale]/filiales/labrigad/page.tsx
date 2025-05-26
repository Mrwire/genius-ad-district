'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { ModernNavbar } from '@/components/ui/navbar-demo';
import { Footer } from '@/components/organisms/Footer';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Get the subsidiary data
const subsidiaryData = {
  id: 'labrigad',
  name: 'LABRIG\'Ad',
  fullName: 'Agence de Création & Communication',
  description: 'Expertise en campagnes 360°, branding, publicité et stratégie créative.',
  color: 'labrigad',
  heroImage: '/subsidiaries/labrigad-hero.jpg',
  services: [
    {
      title: 'Branding & Identity',
      description: 'Création d\'identités visuelles distinctives et stratégies de marque complètes.',
      icon: '🎨'
    },
    {
      title: 'Creative Campaigns',
      description: 'Conception et déploiement de campagnes 360° intégrées et percutantes.',
      icon: '💡'
    },
    {
      title: 'Art Direction',
      description: 'Direction artistique soignée pour tous les supports de communication.',
      icon: '📐'
    },
    {
      title: 'Content Creation',
      description: 'Production de contenu visuel et rédactionnel pour tous canaux de communication.',
      icon: '📷'
    }
  ],
  projects: [
    {
      title: 'Rebranding Marque Nationale',
      description: 'Refonte complète d\'identité pour marque marocaine emblématique.',
      image: '/subsidiaries/labrigad-project1.jpg'
    },
    {
      title: 'Campagne Produit Innovant',
      description: 'Stratégie et exécution 360° pour lancement de produit.',
      image: '/subsidiaries/labrigad-project2.jpg'
    },
    {
      title: 'Communication Institutionnelle',
      description: 'Plateforme visuelle pour institution financière majeure.',
      image: '/subsidiaries/labrigad-project3.jpg'
    }
  ]
};

export default function LabrigadPage() {
  const { locale } = useParams();
  
  return (
    <div className="min-h-screen bg-black text-white" data-subsidiary="labrigad">
      <ModernNavbar currentFiliale="labrigad" />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ 
              backgroundImage: `url(${subsidiaryData.heroImage})`,
              opacity: 0.3,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
          
          <div className="container px-4 mx-auto relative z-20">
            <div className="max-w-2xl">
              <motion.p 
                className="text-lg mb-3 text-labrigad"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {subsidiaryData.fullName}
              </motion.p>
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {subsidiaryData.name}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-10 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {subsidiaryData.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/contact?service=labrigad">
                  <Button 
                    size="lg" 
                    className="bg-labrigad hover:bg-labrigad-dark text-white"
                  >
                    Contactez-nous
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section className="py-20 bg-black">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Typography variant="h6" className="text-labrigad mb-4">
                    NOTRE PHILOSOPHIE
                  </Typography>
                  <Typography variant="h3" className="font-bold mb-6">
                    L'Audace Créative au Service de Votre Marque
                  </Typography>
                  <Typography variant="body" color="muted" className="mb-6 text-lg">
                    LABRIG'Ad conjugue stratégie et créativité pour concevoir des communications qui résonnent avec vos audiences et démarquent votre marque dans un environnement saturé.
                  </Typography>
                  <Typography variant="body" color="muted" className="text-lg">
                    Notre approche audacieuse mais réfléchie nous permet de créer des solutions de communication qui sont à la fois innovantes et efficaces, alignées avec vos objectifs commerciaux.
                  </Typography>
                </motion.div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="aspect-square bg-labrigad bg-opacity-10 rounded-lg flex items-center justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-6xl">💡</span>
                </motion.div>
                <motion.div 
                  className="aspect-square bg-labrigad bg-opacity-10 rounded-lg flex items-center justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="text-6xl">🎯</span>
                </motion.div>
                <motion.div 
                  className="aspect-square bg-labrigad bg-opacity-10 rounded-lg flex items-center justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-6xl">🔄</span>
                </motion.div>
                <motion.div 
                  className="aspect-square bg-labrigad bg-opacity-10 rounded-lg flex items-center justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="text-6xl">✨</span>
                </motion.div>
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
                LABRIG'Ad propose une gamme complète de services créatifs pour donner vie à votre vision.
              </Typography>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subsidiaryData.services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-black p-8 rounded-lg border border-gray-800"
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
                Découvrez nos créations récentes et comment nous avons aidé nos clients à se démarquer.
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-labrigad bg-opacity-10">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <Typography variant="h2" className="font-bold mb-6">
                Une Idée à Concrétiser?
              </Typography>
              <Typography variant="body" color="muted" className="text-lg mb-8">
                Contactez-nous pour discuter de votre projet créatif et découvrez comment LABRIG'Ad peut transformer votre vision en réalité impactante.
              </Typography>
              <Link href="/contact?service=labrigad">
                <Button 
                  size="lg" 
                  className="bg-labrigad hover:bg-labrigad-dark text-white"
                >
                  Demander un Devis
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer variant="subsidiary" subsidiaryColor="labrigad" />
    </div>
  );
}

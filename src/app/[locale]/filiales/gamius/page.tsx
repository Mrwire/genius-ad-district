'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import SubsidiaryHeader from '@/components/organisms/SubsidiaryHeader';
import { Footer } from '@/components/organisms/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Import dynamique du composant BrownCatExperience pour éviter les erreurs de rendu côté serveur
const BrownCatExperience = dynamic(
  () => import('@/components/organisms/BrownCatExperience'),
  { ssr: false }
);

export default function GamiusPage() {
  const { locale } = useParams();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  // Détecter l'interaction initiale pour le son
  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        
        // Jouer un son d'ambiance pour l'immersion
        try {
          const ambientSound = new Audio('/sounds/gamius-ambient.mp3');
          ambientSound.volume = 0.3;
          ambientSound.loop = true;
          ambientSound.play().catch(e => console.log('Audio autoplay blocked by browser'));
        } catch (e) {
          console.log('Audio not supported');
        }
      }
    };
    
    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [hasInteracted]);
  
  const handleGameComplete = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.location.href = 'https://gamiusgroup.ma';
    }, 2000);
  };

  
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" data-subsidiary="gamius">
      <SubsidiaryHeader subsidiarySlug="gamius" transparent={true} />
      
      {/* Logo fixe en haut pour remplacer celui du header */}
      <div className="fixed top-0 left-0 z-50 w-full flex justify-center items-center py-2 px-4 bg-yellow-400">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-32 h-auto bg-white rounded-md p-1 shadow-md">
            <img 
              src="/item_images/logo_filiale_rectangulaire/logo_gamius_black.png" 
              alt="Gamius Logo"
              className="w-full h-auto object-contain" 
            />
          </div>
          
          <div className="text-black font-medium text-sm">
            Experience interactive par Genius AD District
          </div>
        </div>
      </div>
      
      <main className="flex flex-col relative min-h-[calc(100vh-5rem)]">
        {/* Expérience de jeu 3D immersive avec chat */}
        <BrownCatExperience backgroundColor="#f9d423" />
        
        {/* Information sur l'expérience */}
        <div className="absolute top-24 right-8 bg-black/70 backdrop-blur-sm p-3 rounded-lg z-20 border border-yellow-400/30">
          <p className="text-white/90 text-xs">
            {locale === 'fr' ? 'Déplacez votre souris pour interagir avec le chat noir' : 'Move your mouse to interact with the black cat'}
          </p>
        </div>
        
        {/* Information flottante minimale */}
        <div className="absolute bottom-24 left-8 bg-black/50 backdrop-blur-sm p-3 rounded-full shadow-lg z-10">
          <button 
            onClick={handleGameComplete}
            className="flex items-center justify-center w-12 h-12 bg-gamius hover:bg-gamius/80 rounded-full transition-all duration-300 transform hover:scale-110"
            title={locale === 'fr' ? 'Visiter le site Gamius' : 'Visit Gamius Website'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </main>
      
      {/* Footer simplifié */}
      <div className="py-4 px-6 text-center text-white/80 text-sm bg-black/50 backdrop-blur-sm">
        Made with love by Genius 2025
      </div>
    </div>
  );
}
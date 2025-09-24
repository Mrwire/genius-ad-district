"use client";

import React from 'react';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Garder uniquement les liens nécessaires et actifs
const footerLinks = [
  {
    title: 'Entreprise',
    links: [
      { label: 'Notre histoire', href: '/about' },
      { label: 'Nos valeurs', href: '/about#values' },
      { label: 'Notre équipe', href: '/about#team' },
      { label: 'Expertise', href: '/services' },
      { label: 'Projets', href: '/gallery' },
    ],
  },
  {
    title: 'Filiales',
    links: [
      { label: 'MPS', href: '/filiales/mps' },
      { label: 'Labrigad', href: '/filiales/labrigad' },
      { label: 'Gamius', href: '/filiales/gamius' },
      { label: 'Mouje-Leell', href: '/filiales/moujeleell' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Politique de confidentialité', href: '/confidentialite' },
      { label: 'Politique de cookies', href: '/cookies' },
      { label: 'CGV', href: '/cgv' },
    ],
  },
];

export const AppleFooter = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Logo et description */}
    
        
        {/* Liens simplifiés */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-medium text-white/80 mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm flex items-center group transition-colors duration-200"
                    >
                      {link.label}
                      <ChevronRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar simplifié */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Genius Ad District. Tous droits réservés.
          </p>
          <div className="flex space-x-6 items-center mt-4 md:mt-0">
            <a 
              href="https://www.linkedin.com/company/genius-ad-district/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-xs transition-colors duration-200"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/genius.ad.district.morocco/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-xs transition-colors duration-200"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppleFooter;

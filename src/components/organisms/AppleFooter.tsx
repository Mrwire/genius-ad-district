"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useLocale } from 'next-intl';

export const AppleFooter = () => {
  const locale = useLocale();
  const localizedLocale = locale === 'en' ? 'en' : 'fr';

  const localizedPath = (path: string) => `/${localizedLocale}${path}`;

  const footerLinks = [
    {
      title: localizedLocale === 'fr' ? 'Entreprise' : 'Company',
      links: [
        { label: localizedLocale === 'fr' ? 'Notre histoire' : 'Our history', href: localizedPath('/notre-histoire') },
        { label: localizedLocale === 'fr' ? 'Nos valeurs' : 'Our values', href: localizedPath('/nos-valeurs') },
        { label: localizedLocale === 'fr' ? 'Notre équipe' : 'Our team', href: localizedPath('/notre-equipe') },
        { label: localizedLocale === 'fr' ? 'Expertise' : 'Expertise', href: localizedPath('/expertise') },
        { label: localizedLocale === 'fr' ? 'Projets' : 'Projects', href: localizedPath('/projets') },
      ],
    },
    {
      title: localizedLocale === 'fr' ? 'Filiales' : 'Subsidiaries',
      links: [
        { label: 'MPS', href: localizedPath('/filiales/mps') },
        { label: "LABRIG'Ad", href: localizedPath('/filiales/labrigad') },
        { label: 'Gamius', href: localizedPath('/filiales/gamius') },
        { label: 'Mouje & Leell', href: localizedPath('/filiales/moujeleell') },
      ],
    },
    {
      title: localizedLocale === 'fr' ? 'Légal' : 'Legal',
      links: [
        { label: localizedLocale === 'fr' ? 'Mentions légales' : 'Legal notice', href: localizedPath('/mentions-legales') },
        {
          label: localizedLocale === 'fr' ? 'Politique de confidentialité' : 'Privacy policy',
          href: localizedPath('/confidentialite'),
        },
        { label: localizedLocale === 'fr' ? 'Politique de cookies' : 'Cookie policy', href: localizedPath('/cookies') },
        { label: localizedLocale === 'fr' ? 'CGV' : 'Terms of sale', href: localizedPath('/cgv') },
      ],
    },
  ];

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

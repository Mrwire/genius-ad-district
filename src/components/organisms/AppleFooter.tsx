"use client";

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { ChevronRight } from 'lucide-react';

export const AppleFooter = () => {
  const locale = useLocale();
  const tNavbar = useTranslations('navbar.menu');
  const tFooter = useTranslations('footer');

  const footerLinks = [
    {
      title: tFooter('sections.company.title'),
      links: [
        { label: tNavbar('about.links.history'), href: `/${locale}/a-propos/notre-histoire` },
        { label: tNavbar('about.links.values'), href: `/${locale}/a-propos/nos-valeurs` },
        { label: tNavbar('about.links.team'), href: `/${locale}/a-propos/notre-equipe` },
        { label: tNavbar('about.links.expertise'), href: `/${locale}/a-propos/expertises` },
        { label: tNavbar('projects.label'), href: `/${locale}/projets` },
      ],
    },
    {
      title: tFooter('sections.subsidiaries.title'),
      links: [
        { label: tNavbar('subsidiaries.links.mps'), href: `/${locale}/filiales/mps` },
        { label: tNavbar('subsidiaries.links.labrigad'), href: `/${locale}/filiales/labrigad` },
        { label: tNavbar('subsidiaries.links.gamius'), href: `/${locale}/filiales/gamius` },
        { label: tNavbar('subsidiaries.links.moujeleell'), href: `/${locale}/filiales/moujeleell` },
      ],
    },
    {
      title: tFooter('sections.legal.title'),
      links: [
        { label: tFooter('sections.legal.links.legalNotice'), href: `/${locale}/mentions-legales` },
        { label: tFooter('sections.legal.links.privacy'), href: `/${locale}/confidentialite` },
        { label: tFooter('sections.legal.links.cookies'), href: `/${locale}/cookies` },
        { label: tFooter('sections.legal.links.terms'), href: `/${locale}/cgv` },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

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
            {tFooter('bottom.copyright', { year: currentYear })}
          </p>
          <div className="flex space-x-6 items-center mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/genius-ad-district/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-xs transition-colors duration-200"
              aria-label={tFooter('social.linkedin')}
            >
              {tFooter('social.linkedin')}
            </a>
            <a
              href="https://www.instagram.com/genius.ad.district.morocco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-xs transition-colors duration-200"
              aria-label={tFooter('social.instagram')}
            >
              {tFooter('social.instagram')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppleFooter;

'use client';

import { useState, useEffect } from 'react';
import { Info, Building2, Briefcase, Code2, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { useParams } from 'next/navigation';
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from 'next/link';

// Interface pour les sous-sites des filiales
export interface FilialeSite {
  name: string;
  slug: string;
  logoPath: string;
  primaryColor: string;
}

// Définition des filiales et leurs informations
export const filiales: Record<string, FilialeSite> = {
  genius: {
    name: 'Genius AD District',
    slug: 'genius',
    logoPath: '/item_images/logo/genius_black.png',
    primaryColor: '#000000',
  },
  mps: {
    name: 'MPS',
    slug: 'mps',
    logoPath: '/item_images/logo/MPS-logo-421x245.png',
    primaryColor: '#0066FF',
  },
  labrigad: {
    name: 'LABRIG\'AD',
    slug: 'labrigad',
    logoPath: '/item_images/logo/labrigad-logo-600x244.png',
    primaryColor: '#FF3300',
  },
  gamius: {
    name: 'Gamius',
    slug: 'gamius',
    logoPath: '/item_images/logo/gamiusgroup-631x311.png',
    primaryColor: '#9933FF',
  },
  moujeleell: {
    name: 'Mouje & Leell',
    slug: 'moujeleell',
    logoPath: '/item_images/logo/genius_black.png', // Remplacer par le bon logo quand disponible
    primaryColor: '#00CC66',
  },
};

interface ModernNavbarProps {
  className?: string;
  currentFiliale?: string;
}

// Icônes SVG animées pour le menu hamburger
const AnimatedMenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="relative w-6 h-6">
    <span className={cn(
      "block absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out",
      isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"
    )} />
    <span className={cn(
      "block absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out",
      isOpen ? "opacity-0" : "opacity-100"
    )} />
    <span className={cn(
      "block absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out",
      isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"
    )} />
  </div>
);

// Mapping des icônes pour les éléments du menu
const menuIcons: Record<string, React.ReactNode> = {
  'À propos': <Info className="w-5 h-5 mr-2" />,
  'Filiales': <Building2 className="w-5 h-5 mr-2" />,
  'Services': <Briefcase className="w-5 h-5 mr-2" />,
  'Expertises': <Code2 className="w-5 h-5 mr-2" />,
  'Projets': <Layers className="w-5 h-5 mr-2" />,
};

export function ModernNavbar({ className, currentFiliale = 'genius' }: ModernNavbarProps) {
  // État pour le menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Obtenir les informations de la locale depuis les paramètres d'URL
  const { locale = 'fr' } = useParams();
  
  // Obtenir les données de la filiale actuelle
  const filialeData = filiales[currentFiliale] || filiales.genius;
  
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Structure du menu basée sur le sitemap
  const navItems = [
    {
      name: locale === 'fr' ? 'À propos' : 'About',
      url: null, // Make non-clickable
      icon: Info,
      submenu: [
        { name: locale === 'fr' ? 'Notre histoire' : 'Our History', url: `/${locale}/a-propos/notre-histoire` },
        { name: locale === 'fr' ? 'Notre équipe' : 'Our Team', url: `/${locale}/a-propos/notre-equipe` },
        { name: locale === 'fr' ? 'Nos valeurs' : 'Our Values', url: `/${locale}/a-propos/nos-valeurs` },
        { name: locale === 'fr' ? 'Expertises' : 'Expertise', url: `/${locale}/a-propos/expertises` },
      ],
    },
    {
      name: locale === 'fr' ? 'Filiales' : 'Subsidiaries',
      url: null, // Make non-clickable
      icon: Building2,
      submenu: [
        { name: 'MPS', url: `/${locale}/filiales/mps` },
        { name: "LABRIG'Ad", url: `/${locale}/filiales/labrigad` },
        { name: 'Gamius', url: `/${locale}/filiales/gamius` },
        { name: 'Mouje & Leell', url: `/${locale}/filiales/moujeleell` },
      ]
    },
    {
      name: locale === 'fr' ? 'Services' : 'Services',
      url: `/${locale}/services`,
      icon: Briefcase
    },
    {
      name: locale === 'fr' ? 'Projets' : 'Projects',
      url: `/${locale}/gallery`,
      icon: Layers
    },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`}>
              <Image 
                src={filialeData.logoPath}
                alt={filialeData.name}
                width={140}
                height={60}
                className="h-8 w-auto invert"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group px-2">
                {item.url ? (
                  <Link 
                    href={item.url}
                    className="py-2 px-3 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-colors"
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown className="inline-block ml-1 w-4 h-4" />
                    )}
                  </Link>
                ) : (
                  <button
                    className="py-2 px-3 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-colors flex items-center"
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown className="inline-block ml-1 w-4 h-4" />
                    )}
                  </button>
                )}
                
                {item.submenu && (
                  <div className="absolute left-0 w-48 z-50 top-full -mt-2">
                    {/* Ce div est un "pont" invisible plus large qui comble l'espace entre le bouton et le sous-menu */}
                    <div className="h-3 w-full"></div>
                    <div className="bg-black/95 backdrop-blur-xl border border-white/20 rounded-md shadow-lg overflow-hidden opacity-0 scale-95 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 group-hover:delay-75 z-50">
                      <div className="py-1">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.url}
                            className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Language Switcher - Desktop (properly positioned on right) */}
          <div className="hidden md:flex items-center space-x-2 ml-auto">
            <Link 
              href="/fr"
              className={cn(
                "px-3 py-1 text-sm border border-white/20 rounded-md hover:bg-white/10 transition-colors",
                locale === 'fr' ? "bg-white text-black border-white" : "text-white"
              )}
            >
              FR
            </Link>
            <Link 
              href="/en"
              className={cn(
                "px-3 py-1 text-sm border border-white/20 rounded-md hover:bg-white/10 transition-colors",
                locale === 'en' ? "bg-white text-black border-white" : "text-white"
              )}
            >
              EN
            </Link>
          </div>
          
          {/* Mobile menu button - centered */}
          <div className="flex md:hidden items-center justify-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              aria-expanded={mobileMenuOpen}
            >
              <AnimatedMenuIcon isOpen={mobileMenuOpen} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu overlay - full screen */}
      <div 
        className={cn(
          "fixed inset-0 left-0 top-0 w-full h-screen bg-black/95 z-40 transition-all duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="container mx-auto px-4 py-6 h-full overflow-y-auto flex flex-col">
          {/* Mobile menu header with close button */}
          <div className="flex items-center justify-between mb-6">
            <Link href={`/${locale}`} onClick={() => setMobileMenuOpen(false)}>
              <Image 
                src={filialeData.logoPath}
                alt={filialeData.name}
                width={120}
                height={50}
                className="h-8 w-auto invert"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <AnimatedMenuIcon isOpen={true} />
            </button>
          </div>
          
          {/* Mobile menu items */}
          <nav className="flex-1 space-y-4 mb-8">
            {navItems.map((item) => {
              const [subMenuOpen, setSubMenuOpen] = useState(false);
              return (
                <div key={item.name} className="border border-white/10 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between">
                    {item.url ? (
                      <Link
                        href={item.submenu ? "#" : item.url}
                        className="flex-1 flex items-center px-4 py-3 text-white font-medium"
                        onClick={(e) => {
                          if (item.submenu) {
                            e.preventDefault();
                            setSubMenuOpen(!subMenuOpen);
                          } else {
                            setMobileMenuOpen(false);
                          }
                        }}
                      >
                        <span className="flex items-center">
                          {menuIcons[item.name]}
                          {item.name}
                        </span>
                      </Link>
                    ) : (
                      <button
                        className="flex-1 flex items-center px-4 py-3 text-white font-medium w-full text-left"
                        onClick={() => setSubMenuOpen(!subMenuOpen)}
                      >
                        <span className="flex items-center">
                          {menuIcons[item.name]}
                          {item.name}
                        </span>
                      </button>
                    )}
                    
                    {item.submenu && (
                      <button
                        onClick={() => setSubMenuOpen(!subMenuOpen)}
                        className="p-3 text-white rounded-full hover:bg-white/10 transition-colors"
                      >
                        {subMenuOpen ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    )}
                  </div>
                  
                  {item.submenu && (
                    <div
                      className={cn(
                        "overflow-hidden bg-black/80 transition-all duration-300 ease-in-out",
                        subMenuOpen ? "max-h-96" : "max-h-0"
                      )}
                    >
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.url}
                          className="block px-8 py-3 text-sm text-white hover:bg-white/10 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          
          {/* Language switcher - Mobile */}
          <div className="mt-auto pt-4 border-t border-white/10">
            <div className="flex justify-center space-x-4">
              <Link 
                href="/fr"
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium",
                  locale === 'fr' 
                    ? "bg-white text-black" 
                    : "bg-black/50 text-white border border-white/20"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                FR
              </Link>
              <Link 
                href="/en"
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium",
                  locale === 'en' 
                    ? "bg-white text-black" 
                    : "bg-black/50 text-white border border-white/20"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

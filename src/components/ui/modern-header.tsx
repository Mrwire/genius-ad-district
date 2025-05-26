'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocaleSwitcher } from '@/hooks/useLocaleSwitcher';

interface NavigationItem {
  label: string;
  href: string;
  subItems?: NavigationItem[];
}

const navigation: Record<string, NavigationItem[]> = {
  fr: [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Projets', href: '/gallery' },
    { 
      label: 'Filiales', 
      href: '#',
      subItems: [
        { label: 'MPS', href: '/filiales/mps' },
        { label: 'LABRIG\'Ad', href: '/filiales/labrigad' },
        { label: 'Gamius', href: '/filiales/gamius' },
        { label: 'Mouje & Leell', href: '/filiales/moujeleell' },
      ]
    },
    { label: 'À propos', href: '/about' },
  ],
  en: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/gallery' },
    { 
      label: 'Subsidiaries', 
      href: '#',
      subItems: [
        { label: 'MPS', href: '/subsidiaries/mps' },
        { label: 'LABRIG\'Ad', href: '/subsidiaries/labrigad' },
        { label: 'Gamius', href: '/subsidiaries/gamius' },
        { label: 'Mouje & Leell', href: '/subsidiaries/moujeleell' },
      ]
    },
    { label: 'About', href: '/about' },
  ],
};

const contactText: Record<string, string> = {
  fr: 'Nous contacter',
  en: 'Contact us',
};

export const ModernHeader: React.FC = () => {
  const { locale = 'fr' } = useParams();
  const { switchLocale, currentLocale } = useLocaleSwitcher();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detecting scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Toggle dropdown menu
  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const currentNav = navigation[currentLocale as keyof typeof navigation] || navigation.fr;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="relative h-10 w-32"
            >
              <Image
                src="/item_images/logo/genius_black.png"
                alt="Genius AD District"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {currentNav.map((item) => (
              <div key={item.label} className="relative group">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={cn(
                        'px-2 py-1 text-gray-800 font-sans transition-colors duration-200',
                        'hover:text-black focus:outline-none focus:text-black',
                        'flex items-center'
                      )}
                    >
                      {item.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={cn(
                          "h-4 w-4 ml-1 transition-transform duration-200",
                          activeDropdown === item.label ? "rotate-180" : ""
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={handleLinkClick}
                              className={cn(
                                'block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100',
                                subItem.label === 'MPS' && 'hover:text-mps',
                                subItem.label === 'LABRIG\'Ad' && 'hover:text-labrigad',
                                subItem.label === 'Gamius' && 'hover:text-gamius',
                                subItem.label === 'Mouje & Leell' && 'hover:text-moujeleell'
                              )}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'px-2 py-1 text-gray-800 hover:text-black transition-colors duration-200 font-sans'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right-side controls */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Language switcher */}
            <button
              onClick={() => switchLocale(currentLocale === 'fr' ? 'en' : 'fr')}
              className="text-gray-800 hover:text-black transition-colors duration-200"
            >
              <span className="font-sans text-sm">
                {currentLocale === 'fr' ? 'EN' : 'FR'}
              </span>
            </button>

            {/* Contact button */}
            <Link
              href="/contact"
              className={cn(
                'px-4 py-2 rounded-md bg-black text-white font-heading font-semibold',
                'transition-all duration-300 hover:bg-gray-800',
                'text-sm tracking-wide'
              )}
            >
              {contactText[currentLocale as keyof typeof contactText] || contactText.fr}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center"
            onClick={toggleMobileMenu}
            aria-label="Open mobile menu"
          >
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                {currentNav.map((item) => (
                  <div key={item.label} className="py-1">
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => handleDropdownToggle(item.label)}
                          className="flex justify-between items-center w-full py-2 font-sans"
                        >
                          <span>{item.label}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              activeDropdown === item.label ? "rotate-180" : ""
                            )}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 mt-1 border-l-2 border-gray-200"
                            >
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  onClick={handleLinkClick}
                                  className={cn(
                                    'block py-2 text-sm',
                                    subItem.label === 'MPS' && 'text-mps',
                                    subItem.label === 'LABRIG\'Ad' && 'text-labrigad',
                                    subItem.label === 'Gamius' && 'text-gamius',
                                    subItem.label === 'Mouje & Leell' && 'text-moujeleell'
                                  )}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block py-2 font-sans"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-6 flex flex-col space-y-4">
                {/* Language switcher mobile */}
                <button
                  onClick={() => {
                    switchLocale(currentLocale === 'fr' ? 'en' : 'fr');
                    handleLinkClick();
                  }}
                  className="py-2 text-center border border-gray-300 rounded-md font-sans"
                >
                  {currentLocale === 'fr' ? 'Switch to English' : 'Passer en français'}
                </button>

                {/* Contact button mobile */}
                <Link
                  href="/contact"
                  onClick={handleLinkClick}
                  className="py-2 text-center bg-black text-white rounded-md font-heading font-semibold"
                >
                  {contactText[currentLocale as keyof typeof contactText] || contactText.fr}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default ModernHeader;

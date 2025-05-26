"use client";

import React, { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher';

interface HeaderProps {
  variant?: 'main' | 'subsidiary';
  subsidiaryColor?: 'mps' | 'labrigad' | 'gamius' | 'moujeleell';
  transparent?: boolean;
}

export function Header({ 
  variant = 'main', 
  subsidiaryColor = 'mps',
  transparent = false
}: HeaderProps) {
  const t = useTranslations('common');
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Translated navigation items
  const navigationItems = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.caseStudies'), href: '/case-studies' },
    { name: t('navigation.about'), href: '/about' },
    { name: t('navigation.subsidiaries'), href: '/subsidiaries' },
    { name: t('navigation.contact'), href: '/contact' }
  ];

  const subsidiaryItems = [
    { name: 'MPS', href: '/mps', color: 'mps' },
    { name: 'LABRIG\'Ad', href: '/labrigad', color: 'labrigad' },
    { name: 'Gamius', href: '/gamius', color: 'gamius' },
    { name: 'Mouje & Leell', href: '/mouje-leell', color: 'moujeleell' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
    isScrolled || !transparent ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent',
    isMobileMenuOpen && 'bg-white'
  );

  const logoColor = (variant === 'main' || !isScrolled && transparent) 
    ? 'default' 
    : subsidiaryColor as 'mps' | 'labrigad' | 'gamius' | 'moujeleell';

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Typography 
              as="span" 
              variant="h6" 
              color={logoColor}
              className="font-bold"
            >
              Genius Ad District
            </Typography>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="font-body text-sm text-gray-900 hover:text-silver transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {variant === 'main' && (
              <div className="relative group">
                <button className="flex items-center font-body text-sm text-gray-900 hover:text-silver transition-colors">
                  {t('navigation.subsidiaries')}
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    {subsidiaryItems.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href}
                        className={cn(
                          "block px-4 py-2 text-sm hover:bg-gray-100",
                          `text-${item.color}`
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <Button variant="primary" size="sm">
              Client Portal
            </Button>

            {/* Language Switcher */}
            <LanguageSwitcher />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Language Switcher for Mobile */}
            <LanguageSwitcher className="mr-4" />
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 py-4 space-y-1 sm:px-6 divide-y divide-gray-200">
            {navigationItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="block py-3 font-body text-base text-gray-900 hover:text-silver transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {variant === 'main' && (
              <div className="py-2">
                <Typography variant="label" className="pt-4 pb-2">
                  {t('navigation.subsidiaries')}
                </Typography>
                <div className="pl-4 space-y-2">
                  {subsidiaryItems.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.href}
                      className={cn(
                        "block py-2 font-body text-base hover:opacity-80 transition-opacity",
                        `text-${item.color}`
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            <div className="py-4">
              <Button className="w-full" variant="primary">
                Client Portal
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 
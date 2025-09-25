'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, Globe } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type NavChild = {
  id: string;
  path: string;
  isNew?: boolean;
};

type NavItemConfig = {
  id: string;
  path: string;
  children?: NavChild[];
};

const NAV_ITEMS: NavItemConfig[] = [
  {
    id: 'about',
    path: 'about',
    children: [
      { id: 'history', path: 'about/history', isNew: true },
      { id: 'team', path: 'about/team', isNew: true },
      { id: 'careers', path: 'about/careers' }
    ]
  },
  {
    id: 'expertises',
    path: 'expertises',
    children: [
      { id: 'branding', path: 'expertises/branding', isNew: true },
      { id: 'digital', path: 'expertises/digital', isNew: true },
      { id: 'events', path: 'expertises/events', isNew: true },
      { id: 'production', path: 'expertises/production', isNew: true },
      { id: 'marketing', path: 'expertises/marketing', isNew: true }
    ]
  },
  {
    id: 'solutions',
    path: 'solutions',
    children: [
      { id: 'brandActivation', path: 'solutions/brand-activation', isNew: true },
      { id: 'roadshow', path: 'solutions/roadshow', isNew: true },
      { id: 'standDesign', path: 'solutions/stand-design', isNew: true },
      { id: 'esport', path: 'solutions/esport', isNew: true },
      { id: 'advertising', path: 'solutions/advertising', isNew: true }
    ]
  },
  {
    id: 'subsidiaries',
    path: 'subsidiaries',
    children: [
      { id: 'mps', path: 'subsidiaries/mps' },
      { id: 'labrigad', path: 'subsidiaries/labrigad' },
      { id: 'gamius', path: 'subsidiaries/gamius' },
      { id: 'moujeleell', path: 'subsidiaries/moujeleell' }
    ]
  },
  {
    id: 'caseStudies',
    path: 'case-studies',
    children: [
      { id: 'portfolio', path: 'case-studies', isNew: true },
      { id: 'clientCases', path: 'case-studies/client-cases', isNew: true }
    ]
  },
  {
    id: 'contact',
    path: 'contact'
  }
];

interface MainNavItem {
  title: string;
  path: string;
  children?: Array<{
    title: string;
    description?: string;
    path: string;
    isNew?: boolean;
  }>;
}

export default function ModernHeader() {
  const locale = useLocale();
  const pathname = usePathname();
  const tNavigation = useTranslations('header.navigation');
  const tHeader = useTranslations('header');
  const tLanguageNames = useTranslations('common.languageSwitcher.languageNames');

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buildPath = (path: string) => (path === '' ? '/' : `/${path}`);

  const mainNav: MainNavItem[] = NAV_ITEMS.map((item) => ({
    title: tNavigation(`${item.id}.label`),
    path: buildPath(item.path ?? ''),
    children:
      item.children?.map((child) => ({
        title: tNavigation(`${item.id}.children.${child.id}.title`),
        description: tNavigation(`${item.id}.children.${child.id}.description`),
        path: buildPath(child.path),
        isNew: child.isNew,
      })) ?? []
  }));

  const resolveLocalizedPath = (path: string) => {
    if (path === '/') {
      return `/${locale}`;
    }

    return `/${locale}${path}`;
  };

  const isActiveLink = (path: string) => {
    const localizedPath = resolveLocalizedPath(path);
    return pathname === localizedPath || pathname.startsWith(`${localizedPath}/`);
  };

  const currentLocaleShortLabel = tHeader(`language.short.${locale as 'en' | 'fr'}` as const) ?? locale.toUpperCase();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-2 shadow-md' : 'bg-black py-4'
      }`}
      data-theme="genius"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" locale={locale} className="flex-shrink-0">
            <div className="relative w-[140px] h-[40px]" style={{ position: 'relative' }}>
              <Image
                src={scrolled ? '/item_images/logo/genius-logo-small.svg' : '/item_images/image/logo/genius-logo.png'}
                alt="Genius Ad District"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {mainNav.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    {item.children && item.children.length > 0 ? (
                      <>
                        <NavigationMenuTrigger
                          className={`${isActiveLink(item.path) ? 'text-[#D9D9D9]' : 'text-white'} hover:text-[#D9D9D9]`}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                            {item.children.map((child, childIndex) => (
                              <li key={childIndex} className="row-span-1">
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.path}
                                    locale={locale}
                                    className="flex flex-col space-y-1 rounded-md p-3 hover:bg-[#D9D9D9]/5 transition-colors"
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm font-medium">{child.title}</span>
                                      {child.isNew && (
                                        <span className="rounded-full bg-[#D9D9D9]/10 px-2 py-0.5 text-xs text-[#D9D9D9]">
                                          {tHeader('badges.new')}
                                        </span>
                                      )}
                                    </div>
                                    {child.description && (
                                      <span className="line-clamp-2 text-xs text-muted-foreground">{child.description}</span>
                                    )}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        locale={locale}
                        className={`${navigationMenuTriggerStyle()} ${
                          isActiveLink(item.path) ? 'text-[#D9D9D9]' : 'text-white'
                        } hover:text-[#D9D9D9]`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-white">
                      <Globe className="h-4 w-4 mr-1" />
                      {currentLocaleShortLabel}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[160px] gap-1 p-2">
                        {(['fr', 'en'] as const).map((targetLocale) => (
                          <li key={targetLocale}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={pathname || '/'}
                                locale={targetLocale}
                                className={`block rounded p-2 hover:bg-[#D9D9D9]/5 ${
                                  locale === targetLocale ? 'font-bold' : ''
                                }`}
                              >
                                {tLanguageNames(targetLocale)}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="hidden md:block">
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact" locale={locale}>
                  {tHeader('contact')}
                </Link>
              </Button>
            </div>

            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-black border-neutral-800">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between pb-4">
                      <Link href="/" locale={locale} className="flex-shrink-0">
                        <div className="relative w-[120px] h-[35px]" style={{ position: 'relative' }}>
                          <Image
                            src="/item_images/logo/genius-logo-small.svg"
                            alt="Genius Ad District"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </Link>
                    </div>

                    <Separator className="bg-neutral-800" />

                    <nav className="flex-1 pt-6">
                      <ul className="space-y-4">
                        {mainNav.map((item, index) => (
                          <li key={index}>
                            <Link
                              href={item.path}
                              locale={locale}
                              className={`block py-2 text-lg ${
                                isActiveLink(item.path) ? 'text-[#D9D9D9] font-medium' : 'text-white'
                              }`}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>

                    <div className="py-4">
                      <Separator className="bg-neutral-800 mb-4" />

                      <div className="flex space-x-2 my-4">
                        {(['fr', 'en'] as const).map((targetLocale) => (
                          <Link
                            key={targetLocale}
                            href={pathname || '/'}
                            locale={targetLocale}
                            className={`px-3 py-1 rounded-full border ${
                              locale === targetLocale
                                ? 'border-white bg-white text-black'
                                : 'border-neutral-600 text-white'
                            }`}
                          >
                            {tHeader(`language.short.${targetLocale}`)}
                          </Link>
                        ))}
                      </div>

                      <Button className="w-full" asChild>
                        <Link href="/contact" locale={locale}>
                          {tHeader('contact')}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

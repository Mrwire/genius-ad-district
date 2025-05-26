'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';

import { ThemeProvider } from '@/components/theme';
import { 
  Button, 
  Card, 
  Separator,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  Sheet,
  SheetTrigger,
  SheetContent
} from '@/components/atoms/shadcn-adapters';
import ModernHeader from '@/components/organisms/ModernHeader';
import ModernFooter from '@/components/organisms/ModernFooter';
import Sitemap from '@/components/organisms/Sitemap';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    } 
  }
};

const staggeredContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const features = [
  { 
    title: "Header Moderne", 
    description: "Navigation responsive avec menus dropdown, sélecteur de langue et design adaptatif.",
    icon: "header" 
  },
  { 
    title: "Footer Complet", 
    description: "Newsletter, informations entreprise, liens de navigation et icônes de réseaux sociaux.",
    icon: "footer" 
  },
  { 
    title: "Plan du Site", 
    description: "Organisé avec des liens catégorisés pour une navigation intuitive et un bon référencement.",
    icon: "sitemap" 
  },
  { 
    title: "Composants Shadcn UI", 
    description: "Interface moderne avec des composants réutilisables et personnalisables.",
    icon: "components" 
  },
  { 
    title: "Animations Fluides", 
    description: "Transitions et animations pour une expérience utilisateur dynamique.",
    icon: "animation" 
  },
  { 
    title: "Design Responsive", 
    description: "Adaptation parfaite sur tous les écrans, du mobile au grand écran.",
    icon: "responsive" 
  }
];

export default function ModernUIPreview() {
  const { locale } = useParams();

  // Function to render feature icons
  const renderIcon = (icon: string) => {
    switch(icon) {
      case 'header':
        return <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="4" rx="1" fill="white" />
            <rect x="4" y="10" width="16" height="2" rx="1" fill="white" opacity="0.6" />
            <rect x="8" y="14" width="8" height="2" rx="1" fill="white" opacity="0.4" />
          </svg>
        </div>;
      case 'footer':
        return <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="16" width="20" height="4" rx="1" fill="white" />
            <rect x="4" y="12" width="16" height="2" rx="1" fill="white" opacity="0.6" />
            <rect x="8" y="8" width="8" height="2" rx="1" fill="white" opacity="0.4" />
          </svg>
        </div>;
      case 'sitemap':
        return <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="2" width="4" height="4" rx="1" fill="white" />
            <rect x="2" y="18" width="4" height="4" rx="1" fill="white" />
            <rect x="10" y="18" width="4" height="4" rx="1" fill="white" />
            <rect x="18" y="18" width="4" height="4" rx="1" fill="white" />
            <path d="M12 6V14M12 14L4 18M12 14L20 18" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>;
      case 'components':
        return <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="6" height="6" rx="1" fill="white" />
            <rect x="14" y="4" width="6" height="6" rx="1" fill="white" opacity="0.7" />
            <rect x="4" y="14" width="6" height="6" rx="1" fill="white" opacity="0.5" />
            <rect x="14" y="14" width="6" height="6" rx="1" fill="white" opacity="0.3" />
          </svg>
        </div>;
      case 'animation':
        return <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>;
      case 'responsive':
        return <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="16" height="12" rx="1" stroke="white" strokeWidth="2" />
            <rect x="18" y="8" width="4" height="8" rx="1" stroke="white" strokeWidth="2" />
            <path d="M12 20H8" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 20H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>;
      default:
        return <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="h-5 w-5 text-white" />
        </div>;
    }
  };

  return (
    <ThemeProvider defaultTheme="genius">
      <div className="min-h-screen flex flex-col">
        {/* Modern Header */}
        <ModernHeader />
      
        {/* Main Content */}
        <main className="flex-1 pt-20">
          <section className="bg-gradient-to-b from-black to-neutral-900 py-24">
            <div className="container mx-auto px-4">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Modern UI Preview
                </h1>
                <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
                  Découvrez notre interface modernisée avec les composants shadcn/ui, 
                  des animations fluides et un design responsive.
                </p>
              </motion.div>
              
              <motion.div
                variants={staggeredContainer}
                initial="hidden"
                animate="visible" 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300"
                  >
                    {renderIcon(feature.icon)}
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-white/60">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                variants={fadeIn} 
                initial="hidden"
                animate="visible"
                className="mt-20 text-center"
              >
                <h2 className="text-3xl font-bold mb-8">Composants shadcn/ui</h2>
                
                <Card className="p-6 bg-black/40 border-white/10 max-w-3xl mx-auto backdrop-blur-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-medium mb-4">Boutons</h3>
                      <div className="space-y-4">
                        <div>
                          <Button className="mr-3">Default</Button>
                          <Button variant="secondary" className="mr-3">Secondary</Button>
                        </div>
                        <div>
                          <Button variant="outline" className="mr-3">Outline</Button>
                          <Button variant="ghost" className="mr-3">Ghost</Button>
                        </div>
                        <div>
                          <Button variant="link">Link Style</Button>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-medium mb-4 mt-8">Navigation Menu</h3>
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <div className="p-4 w-[200px]">
                                <p className="text-sm">Dropdown content</p>
                              </div>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <div className="p-4 w-[200px]">
                                <p className="text-sm">More content</p>
                              </div>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium mb-4">Sheet/Dialog</h3>
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline">Open Sheet</Button>
                        </SheetTrigger>
                        <SheetContent>
                          <div className="p-4">
                            <h4 className="font-medium mb-2">Sheet Content</h4>
                            <p className="text-sm text-white/60">This is an example of a sheet component from shadcn/ui.</p>
                          </div>
                        </SheetContent>
                      </Sheet>
                      
                      <h3 className="text-xl font-medium mb-4 mt-8">Separator</h3>
                      <p className="text-sm mb-2">Above separator</p>
                      <Separator className="my-4" />
                      <p className="text-sm">Below separator</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="mt-20 text-center"
              >
                <h2 className="text-3xl font-bold mb-4">Prêt à explorer ?</h2>
                <p className="text-white/70 mb-8 max-w-xl mx-auto">
                  Défilez vers le bas pour découvrir le site map et le footer moderne,
                  ou revenez à la page d'accueil.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href={`/${locale}`}>
                    <Button variant="outline" className="border-white/40 hover:bg-white hover:text-black">
                      Retour à l'accueil
                    </Button>
                  </Link>
                  <Button className="bg-white text-black hover:bg-white/90">
                    Explorer les composants <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        
        {/* Site Map */}
        <Sitemap />
        
        {/* Modern Footer */}
        <ModernFooter />
      </div>
    </ThemeProvider>
  );
} 
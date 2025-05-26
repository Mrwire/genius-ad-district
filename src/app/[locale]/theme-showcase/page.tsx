'use client';

import React, { useState } from 'react';
import { Button, Typography, Card } from '@/components/atoms/shadcn-adapters';
import { useTheme } from '@/components/theme';

export default function ThemeShowcasePage() {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('components');
  
  const themes = [
    { id: 'light', name: 'Clair' },
    { id: 'dark', name: 'Sombre' },
    { id: 'system', name: 'Système' },
    { id: 'genius', name: 'Genius Ad District' }
  ];
  
  const tabs = [
    { id: 'components', label: 'Composants' },
    { id: 'colors', label: 'Couleurs' },
    { id: 'typography', label: 'Typographie' }
  ];
  
  return (
    <div className="container mx-auto py-8 px-4">
      <Typography variant="h1" className="mb-6">
        Système de thèmes Shadcn
      </Typography>
      
      <Typography variant="lead" className="mb-8">
        Cette page démontre le système de thèmes avec les composants adaptateurs Shadcn UI.
      </Typography>
      
      {/* Theme Selector */}
      <div className="mb-10">
        <Typography variant="h2" className="mb-4">
          Thèmes disponibles
        </Typography>
        
        <div className="flex flex-wrap gap-2">
          {themes.map((t) => (
            <Button
              key={t.id}
              variant={theme === t.id ? 'primary' : 'outline'}
              onClick={() => setTheme(t.id as 'light' | 'dark' | 'genius' | 'system')}
            >
              {t.name}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b mb-6">
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`pb-2 px-1 font-medium ${
                activeTab === tab.id 
                  ? 'border-b-2 border-primary text-primary' 
                  : 'text-muted-foreground'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Components Tab */}
      {activeTab === 'components' && (
        <div className="space-y-10">
          {/* Buttons */}
          <section>
            <Typography variant="h2" className="mb-4">Boutons</Typography>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="danger">Danger</Button>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-4">
              <Button variant="primary" size="small">Small</Button>
              <Button variant="primary" size="default">Default</Button>
              <Button variant="primary" size="large">Large</Button>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-4">
              <Button variant="primary" loading>Loading</Button>
              <Button variant="outline" disabled>Disabled</Button>
              <Button variant="primary" startIcon={<IconPlus />}>With Icon</Button>
            </div>
          </section>
          
          {/* Cards */}
          <section>
            <Typography variant="h2" className="mb-4">Cards</Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                title="Carte standard"
                description="Description de la carte avec un style par défaut"
              >
                <div className="h-40 flex items-center justify-center bg-muted/30 rounded-sm">
                  <span className="text-muted-foreground">Contenu de la carte</span>
                </div>
              </Card>
              
              <Card
                variant="elevated"
                title="Carte avec élévation"
                description="Cette carte a une ombre portée plus prononcée"
              >
                <div className="h-40 flex items-center justify-center bg-muted/30 rounded-sm">
                  <span className="text-muted-foreground">Contenu de la carte</span>
                </div>
              </Card>
              
              <Card
                variant="outlined"
                title="Carte avec bordure"
                description="Cette carte a une bordure plus visible"
              >
                <div className="h-40 flex items-center justify-center bg-muted/30 rounded-sm">
                  <span className="text-muted-foreground">Contenu de la carte</span>
                </div>
              </Card>
              
              <Card
                variant="primary"
                title="Carte avec couleur primaire"
                description="Cette carte utilise la couleur primaire du thème actuel"
              >
                <div className="h-40 flex items-center justify-center bg-primary-foreground/10 rounded-sm">
                  <span>Contenu de la carte</span>
                </div>
              </Card>
              
              <Card
                variant="secondary"
                title="Carte avec couleur secondaire"
                description="Cette carte utilise la couleur secondaire du thème actuel"
              >
                <div className="h-40 flex items-center justify-center bg-secondary-foreground/10 rounded-sm">
                  <span>Contenu de la carte</span>
                </div>
              </Card>
              
              <Card
                title="Carte avec pied de page"
                description="Cette carte a un pied de page avec des actions"
                footer={
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="small">Annuler</Button>
                    <Button variant="primary" size="small">Confirmer</Button>
                  </div>
                }
              >
                <div className="h-40 flex items-center justify-center bg-muted/30 rounded-sm">
                  <span className="text-muted-foreground">Contenu de la carte</span>
                </div>
              </Card>
            </div>
          </section>
        </div>
      )}
      
      {/* Colors Tab */}
      {activeTab === 'colors' && (
        <div className="space-y-8">
          <Typography variant="h2" className="mb-4">Palette de couleurs</Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Primary colors */}
            <div className="space-y-2">
              <Typography variant="h3">Couleur primaire</Typography>
              <div className="rounded-md overflow-hidden">
                <div className="bg-primary h-12 flex items-center px-4">
                  <Typography variant="body" className="text-primary-foreground">primary</Typography>
                </div>
                <div className="bg-primary/90 h-8 flex items-center px-4">
                  <Typography variant="body" className="text-primary-foreground">primary/90</Typography>
                </div>
                <div className="bg-primary/80 h-8 flex items-center px-4">
                  <Typography variant="body" className="text-primary-foreground">primary/80</Typography>
                </div>
                <div className="bg-primary/60 h-8 flex items-center px-4">
                  <Typography variant="body" className="text-primary-foreground">primary/60</Typography>
                </div>
                <div className="bg-primary/40 h-8 flex items-center px-4">
                  <Typography variant="body" className="text-primary-foreground">primary/40</Typography>
                </div>
                <div className="bg-primary/20 h-8 flex items-center px-4">
                  <Typography variant="body">primary/20</Typography>
                </div>
                <div className="bg-primary/10 h-8 flex items-center px-4">
                  <Typography variant="body">primary/10</Typography>
                </div>
              </div>
            </div>
            
            {/* Secondary colors */}
            <div className="space-y-2">
              <Typography variant="h3">Couleur secondaire</Typography>
              <div className="rounded-md overflow-hidden">
                <div className="bg-secondary h-12 flex items-center px-4">
                  <Typography variant="body" className="text-secondary-foreground">secondary</Typography>
                </div>
                <div className="bg-secondary/90 h-8 flex items-center px-4">
                  <Typography variant="body" className="text-secondary-foreground">secondary/90</Typography>
                </div>
                <div className="bg-secondary/80 h-8 flex items-center px-4">
                  <Typography variant="body" className="text-secondary-foreground">secondary/80</Typography>
                </div>
                <div className="bg-secondary/60 h-8 flex items-center px-4">
                  <Typography variant="body" className="text-secondary-foreground">secondary/60</Typography>
                </div>
                <div className="bg-secondary/40 h-8 flex items-center px-4">
                  <Typography variant="body">secondary/40</Typography>
                </div>
                <div className="bg-secondary/20 h-8 flex items-center px-4">
                  <Typography variant="body">secondary/20</Typography>
                </div>
                <div className="bg-secondary/10 h-8 flex items-center px-4">
                  <Typography variant="body">secondary/10</Typography>
                </div>
              </div>
            </div>
          </div>
          
          {/* UI colors */}
          <div className="space-y-2">
            <Typography variant="h3">Couleurs d'interface</Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="bg-background border h-16 flex items-center px-4 rounded-md">
                  <Typography variant="body">background</Typography>
                </div>
                <div className="bg-foreground h-16 flex items-center px-4 rounded-md">
                  <Typography variant="body" className="text-background">foreground</Typography>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="bg-muted h-16 flex items-center px-4 rounded-md">
                  <Typography variant="body" className="text-muted-foreground">muted</Typography>
                </div>
                <div className="bg-muted-foreground h-16 flex items-center px-4 rounded-md">
                  <Typography variant="body" className="text-muted">muted-foreground</Typography>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="bg-accent h-16 flex items-center px-4 rounded-md">
                  <Typography variant="body" className="text-accent-foreground">accent</Typography>
                </div>
                <div className="bg-destructive h-16 flex items-center px-4 rounded-md">
                  <Typography variant="body" className="text-destructive-foreground">destructive</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Typography Tab */}
      {activeTab === 'typography' && (
        <div className="space-y-10">
          <Typography variant="h2" className="mb-4">Typographie</Typography>
          
          {/* Headings */}
          <section>
            <Typography variant="h3" className="mb-4">Titres</Typography>
            <div className="space-y-4">
              <Typography variant="h1">Titre h1</Typography>
              <Typography variant="h2">Titre h2</Typography>
              <Typography variant="h3">Titre h3</Typography>
              <Typography variant="h4">Titre h4</Typography>
              <Typography variant="h5">Titre h5</Typography>
              <Typography variant="h6">Titre h6</Typography>
            </div>
          </section>
          
          {/* Body text */}
          <section>
            <Typography variant="h3" className="mb-4">Texte courant</Typography>
            <div className="space-y-6">
              <div>
                <Typography variant="lead" className="mb-2">
                  Lead text
                </Typography>
                <Typography variant="muted">
                  Ce texte de type "lead" est plus grand que le texte de corps normal.
                </Typography>
              </div>
              
              <div>
                <Typography variant="body" className="mb-2">
                  Body text
                </Typography>
                <Typography variant="muted">
                  Le texte de corps standard utilisé pour la plupart du contenu.
                </Typography>
              </div>
              
              <div>
                <Typography variant="large" className="mb-2">
                  Large text
                </Typography>
                <Typography variant="muted">
                  Une version plus grande du texte de corps.
                </Typography>
              </div>
              
              <div>
                <Typography variant="small" className="mb-2">
                  Small text
                </Typography>
                <Typography variant="muted">
                  Un texte plus petit utilisé pour les détails moins importants.
                </Typography>
              </div>
              
              <div>
                <Typography variant="muted" className="mb-2">
                  Muted text
                </Typography>
                <Typography variant="muted">
                  Un texte dont la couleur est atténuée pour moins attirer l'attention.
                </Typography>
              </div>
            </div>
          </section>
          
          {/* Font weights */}
          <section>
            <Typography variant="h3" className="mb-4">Graisses de police</Typography>
            <div className="space-y-2">
              <Typography variant="body" weight="light">
                Light - Le poids de police le plus léger (300)
              </Typography>
              <Typography variant="body" weight="normal">
                Normal - Le poids de police standard (400)
              </Typography>
              <Typography variant="body" weight="medium">
                Medium - Un poids intermédiaire (500)
              </Typography>
              <Typography variant="body" weight="semibold">
                Semibold - Un poids semi-gras (600)
              </Typography>
              <Typography variant="body" weight="bold">
                Bold - Un poids gras (700)
              </Typography>
              <Typography variant="body" weight="extrabold">
                Extrabold - Le poids le plus gras (800)
              </Typography>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

// Simple Plus icon component
function IconPlus() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
} 
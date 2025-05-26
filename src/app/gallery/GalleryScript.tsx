'use client';

import React, { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import './gallery-styles.css';

gsap.registerPlugin(ScrollTrigger, CustomEase);

// Types
type GalleryItem = {
  title: string;
  imageUrl: string;
};

type GallerySettings = {
  baseWidth: number;
  hoverScale: number;
  overlayOpacity: number;
  overlayEaseDuration: number;
  borderRadius: number;
  maxTilt: number;
  dragResistance: number;
  returnSpeed: number;
  columns: number;
  rows: number;
  itemSpacing: number;
  animationDuration: number;
  zoomDuration: number;
  smallHeight: number;
  largeHeight: number;
  itemGap: number;
  vignetteStrength: number;
  vignetteSize: number;
};

type GalleryState = {
  isExpanded: boolean;
  canDrag: boolean;
  isDragging: boolean;
  mouseHasMoved: boolean;
  currentX: number;
  currentY: number;
  targetX: number;
  targetY: number;
  dx: number;
  dy: number;
  expandedItem: HTMLElement | null;
  originalPosition: DOMRect | null;
  startX: number;
  startY: number;
  activeIndex: number | null;
  title: string;
  items: GalleryItem[];
};

const defaultSettings: GallerySettings = {
  baseWidth: 300,
  hoverScale: 1.05,
  overlayOpacity: 0.9,
  overlayEaseDuration: 0.5,
  borderRadius: 8,
  maxTilt: 10,
  dragResistance: 0.2,
  returnSpeed: 0.1,
  columns: 3,
  rows: 3,
  itemSpacing: 20,
  animationDuration: 0.6,
  zoomDuration: 0.8,
  smallHeight: 300,
  largeHeight: 400,
  itemGap: 20,
  vignetteStrength: 0.5,
  vignetteSize: 0.7
};

const projectItems: GalleryItem[] = [
  { title: 'Campagne Marketing Digital', imageUrl: '/images/projects/digital-marketing.jpg' },
  { title: 'Refonte Site E-commerce', imageUrl: '/images/projects/ecommerce-redesign.jpg' },
  { title: 'Application Mobile Bancaire', imageUrl: '/images/projects/banking-app.jpg' },
  { title: 'Système CRM sur Mesure', imageUrl: '/images/projects/crm-system.jpg' },
  { title: 'Plateforme Éducative', imageUrl: '/images/projects/education-platform.jpg' },
  { title: 'Solutions IoT Industrielles', imageUrl: '/images/projects/iot-solutions.jpg' },
  { title: 'Expérience Réalité Augmentée', imageUrl: '/images/projects/ar-experience.jpg' },
  { title: 'Dashboard Analytics', imageUrl: '/images/projects/analytics-dashboard.jpg' },
];

export default function GalleryScript() {
  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  
  // State
  const [settings] = useState<GallerySettings>(defaultSettings);
  const [state, setState] = useState<GalleryState>({
    isExpanded: false,
    canDrag: false,
    isDragging: false,
    mouseHasMoved: false,
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    dx: 0,
    dy: 0,
    expandedItem: null,
    originalPosition: null,
    startX: 0,
    startY: 0,
    activeIndex: null,
    title: '',
    items: projectItems
  });

  // Update state with type safety
  const updateState = useCallback((updates: Partial<GalleryState>) => {
    setState(prev => ({
      ...prev,
      ...updates
    }));
  }, []);

  // Expand item handler
  const expandItem = useCallback((item: HTMLElement, index: number) => {
    if (!containerRef.current) return;

    const rect = item.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    // Calculate target position and size
    const targetWidth = window.innerWidth * 0.9;
    const targetHeight = window.innerHeight * 0.8;
    const targetX = (window.innerWidth - targetWidth) / 2 - rect.left + containerRect.left;
    const targetY = (window.innerHeight - targetHeight) / 2 - rect.top + containerRect.top;

    // Save original position
    const originalPosition = rect;
    
    // Update state
    updateState({
      isExpanded: true,
      canDrag: true,
      expandedItem: item,
      originalPosition,
      activeIndex: index,
      title: state.items[index]?.title || ''
    });

    // Animate to expanded state
    gsap.to(item, {
      duration: settings.zoomDuration,
      x: targetX,
      y: targetY,
      width: targetWidth,
      height: targetHeight,
      ease: 'power2.inOut',
      onComplete: () => {
        // Additional logic after expansion
      }
    });
  }, [settings.zoomDuration, state.items, updateState]);

  // Close expanded item
  const closeExpandedItem = useCallback((): void => {
    if (!state.expandedItem || !state.originalPosition) return;

    updateState({
      canDrag: false,
      isExpanded: false
    });

    gsap.to(state.expandedItem, {
      duration: settings.animationDuration,
      x: 0,
      y: 0,
      width: state.originalPosition.width,
      height: state.originalPosition.height,
      ease: 'power2.inOut',
      onComplete: () => {
        updateState({
          expandedItem: null,
          originalPosition: null,
          activeIndex: null,
          title: ''
        });
      }
    });
  }, [state.expandedItem, state.originalPosition, settings.animationDuration, updateState]);

  // Handle mouse move for dragging
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!state.isDragging || !state.expandedItem) return;
    
    const dx = e.clientX - state.startX;
    const dy = e.clientY - state.startY;
    
    updateState({
      mouseHasMoved: Math.abs(dx) > 5 || Math.abs(dy) > 5,
      targetX: e.clientX,
      targetY: e.clientY,
      dx,
      dy
    });
  }, [state.isDragging, state.expandedItem, state.startX, state.startY, updateState]);

  // Handle touch move for mobile
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!state.isDragging || !state.expandedItem) return;
    
    const touch = e.touches[0];
    const dx = touch.clientX - state.startX;
    const dy = touch.clientY - state.startY;
    
    updateState({
      mouseHasMoved: Math.abs(dx) > 5 || Math.abs(dy) > 5,
      targetX: touch.clientX,
      targetY: touch.clientY,
      dx,
      dy
    });
  }, [state.isDragging, state.expandedItem, state.startX, state.startY, updateState]);

  // Handle mouse up
  const handleMouseUp = useCallback(() => {
    if (!state.isDragging) return;
    
    updateState({
      isDragging: false,
      canDrag: false
    });
    
    // Reset position if not moved enough
    if (!state.mouseHasMoved) {
      closeExpandedItem();
    }
  }, [closeExpandedItem, state.isDragging, state.mouseHasMoved, updateState]);

  // Handle window resize
  const handleResize = useCallback(() => {
    if (!state.expandedItem || !state.originalPosition) return;
    
    const rect = state.originalPosition;
    const aspectRatio = rect.width / rect.height;
    const newWidth = window.innerWidth * 0.8;
    const newHeight = newWidth / aspectRatio;

    gsap.set(state.expandedItem, {
      width: newWidth,
      height: newHeight,
      x: (window.innerWidth - newWidth) / 2 - rect.left,
      y: (window.innerHeight - newHeight) / 2 - rect.top
    });
  }, [state.expandedItem, state.originalPosition]);

  // Set up event listeners
  useEffect(() => {
    if (state.isExpanded) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleMouseMove, handleMouseUp, handleResize, handleTouchMove, state.isExpanded]);

  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Gestion du chargement et des erreurs d'images
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [errorImages, setErrorImages] = useState<Record<number, boolean>>({});

  // Gestion du chargement des images
  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({
      ...prev,
      [index]: true
    }));
  };

  // Gestion des erreurs d'images
  const handleImageError = (index: number) => {
    setErrorImages(prev => ({
      ...prev,
      [index]: true
    }));
  };

  // Animation au survol inspirée de la section ESPRIT
  const animateHoverEffect = (element: HTMLElement, isEntering: boolean) => {
    gsap.to(element, {
      scale: isEntering ? 1.05 : 1,
      boxShadow: isEntering ? '0 10px 25px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
      duration: 0.3,
      ease: 'power2.out'
    });

    // Animation de titre inspirée de la section ESPRIT
    const titleElement = element.querySelector('.gallery-item-title');
    if (titleElement) {
      gsap.to(titleElement, {
        opacity: isEntering ? 1 : 0,
        y: isEntering ? 0 : 20,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  // Ajouter un effet de particules lors de l'expansion d'un élément
  const createParticleEffect = () => {
    if (typeof window !== 'undefined') {
      // Simulation d'effet de particules avec GSAP
      const particles = [];
      const container = document.createElement('div');
      container.className = 'particles-container';
      document.body.appendChild(container);
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        container.appendChild(particle);
        particles.push(particle);
        
        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
          opacity: 0
        });
        
        gsap.to(particle, {
          duration: 1 + Math.random(),
          x: '+=' + (Math.random() * 200 - 100),
          y: '+=' + (Math.random() * 200 - 100),
          scale: 0,
          opacity: Math.random(),
          ease: 'power2.out',
          onComplete: () => container.removeChild(particle)
        });
      }
      
      // Nettoyer le conteneur après l'animation
      setTimeout(() => {
        if (document.body.contains(container)) {
          document.body.removeChild(container);
        }
      }, 2000);
    }
  };

  // Modifier expandItem pour inclure l'effet de particules
  const enhancedExpandItem = useCallback((item: HTMLElement, index: number) => {
    // Lancer l'effet de particules
    createParticleEffect();
    
    // Appeler la fonction originale expandItem
    expandItem(item, index);
  }, [expandItem]);

  // Render function
  return (
    <div className="gallery-container" ref={containerRef}>
      <div className="gallery-grid">
        {state.items.map((item, index) => (
          <div 
            key={index}
            className={`gallery-item ${state.activeIndex === index ? 'active' : ''}`}
            onClick={() => {
              const element = document.querySelector(`.gallery-item:nth-child(${index + 1})`) as HTMLElement;
              if (element) {
                enhancedExpandItem(element, index);
              }
            }}
            onMouseEnter={(e) => animateHoverEffect(e.currentTarget, true)}
            onMouseLeave={(e) => animateHoverEffect(e.currentTarget, false)}
          >
            {/* Afficher un placeholder pendant le chargement */}
            {!loadedImages[index] && !errorImages[index] && (
              <div className="gallery-placeholder">
                <div className="gallery-loader"></div>
              </div>
            )}
            
            {/* Afficher un fallback en cas d'erreur */}
            {errorImages[index] && (
              <div className="gallery-error">
                <span>Image non disponible</span>
              </div>
            )}
            
            <img 
              src={item.imageUrl} 
              alt={item.title}
              className="gallery-image"
              style={{ display: loadedImages[index] && !errorImages[index] ? 'block' : 'none' }}
              draggable={false}
              onLoad={() => handleImageLoad(index)}
              onError={() => handleImageError(index)}
            />
            <div className="gallery-item-title">{item.title}</div>
          </div>
        ))}
      </div>

      {state.isExpanded && (
        <div 
          className="gallery-overlay active" 
          ref={overlayRef}
          onClick={closeExpandedItem}
        />
      )}
    </div>
  );
}

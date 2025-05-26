'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';

// Define item data types
interface ItemData {
  title: string;
  imageUrl: string;
}

export default function GalleryScript() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const projectTitleRef = useRef<HTMLParagraphElement>(null);

  // Project titles and image URLs
  const projectItems: ItemData[] = [
    { title: "Chromatic Loopscape", imageUrl: "https://cdn.cosmos.so/0f164449-f65e-4584-9d62-a9b3e1f4a90a?format=jpeg" },
    { title: "Solar Bloom", imageUrl: "https://cdn.cosmos.so/74ccf6cc-7672-4deb-ba13-1727b7dc6146?format=jpeg" },
    { title: "Neon Handscape", imageUrl: "https://cdn.cosmos.so/2f49a117-05e7-4ae9-9e95-b9917f970adb?format=jpeg" },
    { title: "Echo Discs", imageUrl: "https://cdn.cosmos.so/7b5340f5-b4dc-4c08-8495-c507fa81480b?format=jpeg" },
    { title: "Void Gaze", imageUrl: "https://cdn.cosmos.so/f733585a-081e-48e7-a30e-e636446f2168?format=jpeg" },
    { title: "Gravity Sync", imageUrl: "https://cdn.cosmos.so/47caf8a0-f456-41c5-98ea-6d0476315731?format=jpeg" },
    { title: "Heat Core", imageUrl: "https://cdn.cosmos.so/f99f8445-6a19-4a9a-9de3-ac382acc1a3f?format=jpeg" },
    { title: "Fractal Mirage", imageUrl: "https://cdn.cosmos.so/0f164449-f65e-4584-9d62-a9b3e1f4a90a?format=jpeg" },
    { title: "Nova Pulse", imageUrl: "https://cdn.cosmos.so/74ccf6cc-7672-4deb-ba13-1727b7dc6146?format=jpeg" },
    { title: "Sonic Horizon", imageUrl: "https://cdn.cosmos.so/2f49a117-05e7-4ae9-9e95-b9917f970adb?format=jpeg" },
    { title: "Dream Circuit", imageUrl: "https://cdn.cosmos.so/7b5340f5-b4dc-4c08-8495-c507fa81480b?format=jpeg" },
    { title: "Lunar Mesh", imageUrl: "https://cdn.cosmos.so/f733585a-081e-48e7-a30e-e636446f2168?format=jpeg" },
  ];

  // Settings for the gallery
  const settings = {
    baseWidth: 400,
    smallHeight: 330,
    largeHeight: 500,
    itemGap: 65,
    hoverScale: 1.05,
    expandedScale: 0.4, // Percentage of viewport width
    dragEase: 0.075,
    momentumFactor: 200,
    borderRadius: 0,
    vignetteSize: 0,
    vignetteStrength: 0.7,
    overlayOpacity: 0.9,
    overlayEaseDuration: 0.8,
    zoomDuration: 0.6,
    columns: 4
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Register GSAP plugins
      gsap.registerPlugin(CustomEase);
      CustomEase.create("hop", "0.9, 0, 0.1, 1");

      // Initialize the gallery
      initializeGallery();
    }

    return () => {
      // Clean up any listeners or animations when component unmounts
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define initialization and handler functions
  const initializeGallery = () => {
    // Initialize CSS variables
    document.documentElement.style.setProperty('--border-radius', `${settings.borderRadius}px`);
    document.documentElement.style.setProperty('--vignette-size', `${settings.vignetteSize}px`);
    document.documentElement.style.setProperty('--hover-scale', `${settings.hoverScale}`);
    
    // Initialize page vignette
    updatePageVignette();
    
    // Calculate item sizes based on settings
    const itemSizes = [
      { width: settings.baseWidth, height: settings.smallHeight },
      { width: settings.baseWidth, height: settings.largeHeight }
    ];
    
    // Calculate cell dimensions
    const cellWidth = settings.baseWidth + settings.itemGap;
    const cellHeight = Math.max(settings.smallHeight, settings.largeHeight) + settings.itemGap;
    
    // Setup canvas and initial items
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      
      // Create initial grid items
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < settings.columns; col++) {
          const itemIndex = (row * settings.columns + col) % projectItems.length;
          const itemSize = getItemSize(row, col, itemSizes);
          const position = getItemPosition(col, row, cellWidth, cellHeight);
          
          createItem(canvas, itemIndex, itemSize, position, col, row);
        }
      }
      
      // Setup event listeners
      setupEventListeners();
      
      // Start animation loop
      requestAnimationFrame(animate);
    }
  };
  
  // Function to determine item size based on position
  const getItemSize = (row: number, col: number, itemSizes: Array<{width: number, height: number}>) => {
    const sizeIndex = Math.abs((row * settings.columns + col) % itemSizes.length);
    return itemSizes[sizeIndex];
  };
  
  // Function to get item position
  const getItemPosition = (col: number, row: number, cellWidth: number, cellHeight: number) => {
    return {
      x: col * cellWidth,
      y: row * cellHeight
    };
  };
  
  // Create a gallery item
  const createItem = (
    canvas: HTMLDivElement, 
    itemIndex: number, 
    itemSize: {width: number, height: number}, 
    position: {x: number, y: number},
    col: number,
    row: number
  ) => {
    const item = document.createElement('div');
    item.className = 'item';
    item.id = `item-${col}-${row}`;
    item.style.width = `${itemSize.width}px`;
    item.style.height = `${itemSize.height}px`;
    item.style.left = `${position.x}px`;
    item.style.top = `${position.y}px`;
    item.dataset.col = col.toString();
    item.dataset.row = row.toString();
    item.dataset.width = itemSize.width.toString();
    item.dataset.height = itemSize.height.toString();
    
    // Create image container for overflow control
    const imageContainer = document.createElement('div');
    imageContainer.className = 'item-image-container';
    
    // Create image
    const img = document.createElement('img');
    img.src = projectItems[itemIndex].imageUrl;
    img.alt = projectItems[itemIndex].title;
    imageContainer.appendChild(img);
    item.appendChild(imageContainer);
    
    // Add caption
    const captionElement = document.createElement('div');
    captionElement.className = 'item-caption';
    
    const nameElement = document.createElement('div');
    nameElement.className = 'item-name';
    nameElement.textContent = projectItems[itemIndex].title;
    captionElement.appendChild(nameElement);
    
    const numberElement = document.createElement('div');
    numberElement.className = 'item-number';
    numberElement.textContent = `#${(itemIndex + 1).toString().padStart(5, '0')}`;
    captionElement.appendChild(numberElement);
    
    item.appendChild(captionElement);
    
    // Add click handler
    item.addEventListener('click', (e) => {
      if (!mouseHasMoved && !isDragging) {
        handleItemClick(item, itemIndex);
      }
    });
    
    canvas.appendChild(item);
  };
  
  // Setup event listeners for dragging and interactions
  const setupEventListeners = () => {
    const container = document.querySelector('.container');
    if (!container) return;
    
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    container.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    window.addEventListener('resize', handleResize);
    
    if (overlayRef.current) {
      overlayRef.current.addEventListener('click', handleOverlayClick);
    }
  };
  
  // Update page vignette effect
  const updatePageVignette = () => {
    const strength = settings.vignetteStrength;
    const size = 200; // Default size
    
    // Regular vignette (outer layer)
    const regularOpacity = strength * 0.7;
    const regularSize = size * 1.5;
    document.documentElement.style.setProperty('--page-vignette-size', `${regularSize}px`);
    document.documentElement.style.setProperty('--page-vignette-color', `rgba(0,0,0,${regularOpacity})`);
    
    // Strong vignette (middle layer)
    const strongOpacity = strength * 0.85;
    const strongSize = size * 0.75;
    document.documentElement.style.setProperty('--page-vignette-strong-size', `${strongSize}px`);
    document.documentElement.style.setProperty('--page-vignette-strong-color', `rgba(0,0,0,${strongOpacity})`);
    
    // Extreme vignette (inner layer)
    const extremeOpacity = strength;
    const extremeSize = size * 0.4;
    document.documentElement.style.setProperty('--page-vignette-extreme-size', `${extremeSize}px`);
    document.documentElement.style.setProperty('--page-vignette-extreme-color', `rgba(0,0,0,${extremeOpacity})`);
  };
  
  // Animation variables
  let isDragging = false;
  let startX = 0, startY = 0;
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let dragVelocityX = 0, dragVelocityY = 0;
  let lastDragTime = 0;
  let mouseHasMoved = false;
  let isExpanded = false;
  let activeItem: HTMLElement | null = null;
  let expandedItem: HTMLElement | null = null;
  let originalPosition: any = null;
  let canDrag = true;
  
  // Animation loop
  const animate = () => {
    if (canDrag && canvasRef.current) {
      const ease = settings.dragEase;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      
      canvasRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }
    requestAnimationFrame(animate);
  };
  
  // Event handlers
  const handleMouseDown = (e: MouseEvent) => {
    if (!canDrag) return;
    isDragging = true;
    mouseHasMoved = false;
    startX = e.clientX;
    startY = e.clientY;
    
    const container = document.querySelector('.container');
    if (container) container.style.cursor = 'grabbing';
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !canDrag) return;
    
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      mouseHasMoved = true;
    }
    
    const now = Date.now();
    const dt = Math.max(10, now - lastDragTime);
    lastDragTime = now;
    
    dragVelocityX = dx / dt;
    dragVelocityY = dy / dt;
    
    targetX += dx;
    targetY += dy;
    
    startX = e.clientX;
    startY = e.clientY;
  };
  
  const handleMouseUp = () => {
    if (!isDragging) return;
    isDragging = false;
    
    if (canDrag) {
      const container = document.querySelector('.container');
      if (container) container.style.cursor = 'grab';
      
      if (Math.abs(dragVelocityX) > 0.1 || Math.abs(dragVelocityY) > 0.1) {
        targetX += dragVelocityX * settings.momentumFactor;
        targetY += dragVelocityY * settings.momentumFactor;
      }
    }
  };
  
  const handleTouchStart = (e: TouchEvent) => {
    if (!canDrag) return;
    isDragging = true;
    mouseHasMoved = false;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  };
  
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !canDrag) return;
    
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      mouseHasMoved = true;
    }
    
    targetX += dx;
    targetY += dy;
    
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  };
  
  const handleTouchEnd = () => {
    isDragging = false;
  };
  
  const handleResize = () => {
    if (isExpanded && expandedItem && originalPosition) {
      const viewportWidth = window.innerWidth;
      const targetWidth = viewportWidth * settings.expandedScale;
      
      // Maintain aspect ratio
      const originalWidth = originalPosition.width;
      const originalHeight = originalPosition.height;
      const aspectRatio = originalHeight / originalWidth;
      const targetHeight = targetWidth * aspectRatio;
      
      gsap.to(expandedItem, {
        width: targetWidth,
        height: targetHeight,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };
  
  const handleOverlayClick = () => {
    if (isExpanded) closeExpandedItem();
  };
  
  // Handle item click to expand it
  const handleItemClick = (item: HTMLElement, itemIndex: number) => {
    if (isExpanded) {
      if (expandedItem) closeExpandedItem();
    } else {
      expandItem(item, itemIndex);
    }
  };
  
  // Expand an item when clicked
  const expandItem = (item: HTMLElement, itemIndex: number) => {
    isExpanded = true;
    activeItem = item;
    canDrag = false;
    
    const container = document.querySelector('.container');
    if (container) container.style.cursor = 'auto';
    
    const imgSrc = item.querySelector('img')?.src;
    const itemWidth = parseInt(item.dataset.width || '0');
    const itemHeight = parseInt(item.dataset.height || '0');
    
    // Set and animate the project title
    if (projectTitleRef.current) {
      projectTitleRef.current.textContent = projectItems[itemIndex].title;
      setupTitleAnimation();
    }
    
    // Get the caption elements
    const nameElement = item.querySelector('.item-name');
    const numberElement = item.querySelector('.item-number');
    
    // Store original text content
    const nameText = nameElement?.textContent || '';
    const numberText = numberElement?.textContent || '';
    
    // Create a clone of the caption for smooth animation
    const captionElement = item.querySelector('.item-caption');
    if (captionElement) {
      const captionClone = captionElement.cloneNode(true) as HTMLElement;
      captionClone.classList.add('caption-clone');
      const captionRect = captionElement.getBoundingClientRect();
      
      captionClone.style.left = `${captionRect.left}px`;
      captionClone.style.bottom = `${window.innerHeight - captionRect.bottom}px`;
      captionClone.style.width = `${captionRect.width}px`;
      captionClone.style.zIndex = '10002';
      
      document.body.appendChild(captionClone);
      
      // Hide the original caption
      captionElement.style.opacity = '0';
      
      // Animate the clone out
      const nameClone = captionClone.querySelector('.item-name');
      const numberClone = captionClone.querySelector('.item-number');
      
      if (nameClone && numberClone && typeof SplitType !== 'undefined') {
        const nameCloneSplit = new SplitType(nameClone, { types: 'words' });
        const numberCloneSplit = new SplitType(numberClone, { types: 'words' });
        
        gsap.to(nameCloneSplit.words, {
          y: '100%',
          opacity: 0,
          duration: 0.6,
          stagger: 0.03,
          ease: 'power3.in'
        });
        
        gsap.to(numberCloneSplit.words, {
          y: '100%',
          opacity: 0,
          duration: 0.6,
          stagger: 0.02,
          delay: 0.05,
          ease: 'power3.in',
          onComplete: () => {
            if (captionClone.parentNode) {
              document.body.removeChild(captionClone);
            }
          }
        });
      }
    }
    
    // Store original position
    const rect = item.getBoundingClientRect();
    originalPosition = {
      rect: rect,
      imgSrc: imgSrc,
      width: itemWidth,
      height: itemHeight,
      nameText: nameText,
      numberText: numberText
    };
    
    // Show and animate overlay
    if (overlayRef.current) {
      overlayRef.current.classList.add('active');
      gsap.to(overlayRef.current, {
        opacity: settings.overlayOpacity,
        duration: settings.overlayEaseDuration,
        ease: 'power2.inOut'
      });
    }
    
    // Create expanded item
    expandedItem = document.createElement('div');
    expandedItem.className = 'expanded-item';
    expandedItem.style.width = `${itemWidth}px`;
    expandedItem.style.height = `${itemHeight}px`;
    expandedItem.style.zIndex = '10000';
    expandedItem.style.borderRadius = `var(--border-radius, 0px)`;
    
    const img = document.createElement('img');
    if (imgSrc) img.src = imgSrc;
    expandedItem.appendChild(img);
    
    expandedItem.addEventListener('click', closeExpandedItem);
    document.body.appendChild(expandedItem);
    
    // Fade out other items
    document.querySelectorAll('.item').forEach((el) => {
      if (el !== activeItem) {
        gsap.to(el, {
          opacity: 0,
          duration: settings.overlayEaseDuration,
          ease: 'power2.inOut'
        });
      }
    });
    
    // Calculate expanded size while maintaining aspect ratio
    const viewportWidth = window.innerWidth;
    const targetWidth = viewportWidth * settings.expandedScale;
    const aspectRatio = itemHeight / itemWidth;
    const targetHeight = targetWidth * aspectRatio;
    
    // Animate in the title
    gsap.delayedCall(0.5, animateTitleIn);
    
    // Animate the item to expanded state
    gsap.fromTo(
      expandedItem,
      {
        width: itemWidth,
        height: itemHeight,
        x: rect.left + itemWidth / 2 - window.innerWidth / 2,
        y: rect.top + itemHeight / 2 - window.innerHeight / 2
      },
      {
        width: targetWidth,
        height: targetHeight,
        x: 0,
        y: 0,
        duration: settings.zoomDuration,
        ease: 'hop'
      }
    );
  };
  
  // Setup title animation with GSAP
  const setupTitleAnimation = () => {
    if (projectTitleRef.current && typeof SplitType !== 'undefined') {
      const titleSplit = new SplitType(projectTitleRef.current, {
        types: 'words'
      });
      
      gsap.set(titleSplit.words, {
        y: '100%',
        opacity: 0
      });
    }
  };
  
  // Animate the title in
  const animateTitleIn = () => {
    if (projectTitleRef.current && typeof SplitType !== 'undefined') {
      const titleSplit = new SplitType(projectTitleRef.current, {
        types: 'words'
      });
      
      gsap.to(titleSplit.words, {
        y: '0%',
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }
  };
  
  // Animate the title out
  const animateTitleOut = () => {
    if (projectTitleRef.current && typeof SplitType !== 'undefined') {
      const titleSplit = new SplitType(projectTitleRef.current, {
        types: 'words'
      });
      
      gsap.to(titleSplit.words, {
        y: '-100%',
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }
  };
  
  // Close the expanded item
  const closeExpandedItem = () => {
    if (!expandedItem || !originalPosition) return;
    
    animateTitleOut();
    
    // Animate overlay out
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: settings.overlayEaseDuration,
        ease: 'power2.inOut'
      });
    }
    
    // Fade in other items
    document.querySelectorAll('.item').forEach((el) => {
      if (el !== activeItem) {
        gsap.to(el, {
          opacity: 1,
          duration: settings.overlayEaseDuration,
          delay: 0.3,
          ease: 'power2.inOut'
        });
      }
    });
    
    // Get animation targets
    const originalRect = originalPosition.rect;
    const originalWidth = originalPosition.width;
    const originalHeight = originalPosition.height;
    
    // Animate back to original position
    gsap.to(expandedItem, {
      width: originalWidth,
      height: originalHeight,
      x: originalRect.left + originalWidth / 2 - window.innerWidth / 2,
      y: originalRect.top + originalHeight / 2 - window.innerHeight / 2,
      duration: settings.zoomDuration,
      ease: 'hop',
      onComplete: () => {
        // Create caption animation
        if (activeItem) {
          const captionElement = activeItem.querySelector('.item-caption');
          
          if (captionElement) {
            // Create clone for animation
            const captionClone = document.createElement('div');
            captionClone.className = 'caption-clone';
            captionClone.innerHTML = captionElement.innerHTML;
            
            // Position clone over the original
            const captionRect = captionElement.getBoundingClientRect();
            captionClone.style.position = 'fixed';
            captionClone.style.left = `${captionRect.left}px`;
            captionClone.style.bottom = `${window.innerHeight - captionRect.bottom}px`;
            captionClone.style.width = `${captionRect.width}px`;
            captionClone.style.padding = '10px';
            captionClone.style.zIndex = '10002';
            
            document.body.appendChild(captionClone);
            
            // Apply animation to clone elements
            const nameClone = captionClone.querySelector('.item-name');
            const numberClone = captionClone.querySelector('.item-number');
            
            if (nameClone && numberClone && typeof SplitType !== 'undefined') {
              // Make sure clone elements have correct styling
              nameClone.style.overflow = 'hidden';
              numberClone.style.overflow = 'hidden';
              
              const nameCloneSplit = new SplitType(nameClone, { types: 'words' });
              const numberCloneSplit = new SplitType(numberClone, { types: 'words' });
              
              // Initial position for animation - start from below
              gsap.set(nameCloneSplit.words, {
                y: '100%',
                opacity: 0
              });
              
              gsap.set(numberCloneSplit.words, {
                y: '100%',
                opacity: 0
              });
              
              // Animate in with staggered text
              gsap.to(nameCloneSplit.words, {
                y: '0%',
                opacity: 1,
                duration: 0.7,
                stagger: 0.03,
                ease: 'power3.out'
              });
              
              gsap.to(numberCloneSplit.words, {
                y: '0%',
                opacity: 1,
                duration: 0.7,
                stagger: 0.02,
                delay: 0.05,
                ease: 'power3.out',
                onComplete: () => {
                  // Show original caption
                  captionElement.style.opacity = '1';
                  
                  // Remove clone
                  if (captionClone.parentNode) {
                    document.body.removeChild(captionClone);
                  }
                }
              });
            }
          }
          
          // Show original item
          activeItem.style.visibility = 'visible';
        }
        
        // Clean up expanded item
        if (expandedItem && expandedItem.parentNode) {
          document.body.removeChild(expandedItem);
        }
        
        // Reset state
        expandedItem = null;
        isExpanded = false;
        activeItem = null;
        originalPosition = null;
        canDrag = true;
        
        const container = document.querySelector('.container');
        if (container) container.style.cursor = 'grab';
        
        dragVelocityX = 0;
        dragVelocityY = 0;
        
        // Deactivate overlay
        if (overlayRef.current) {
          overlayRef.current.classList.remove('active');
        }
      }
    });
  };

  // Return empty fragment as this component only adds functionality
  return null;
} 
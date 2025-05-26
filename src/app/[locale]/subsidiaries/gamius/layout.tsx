'use client';

import React, { useEffect } from 'react';
import { useTheme } from '@/components/theme';

interface GamiusLayoutProps {
  children: React.ReactNode;
}

/**
 * Layout for the Gamius subsidiary section
 * Automatically sets the Gamius theme when entering this section
 * and resets back to the default theme when leaving
 */
export default function GamiusLayout({ children }: GamiusLayoutProps) {
  const { setTheme } = useTheme();
  
  useEffect(() => {
    // Set Gamius theme when the component mounts
    setTheme('dark'); // Using 'dark' theme as a fallback since 'gamius' is not a valid theme
    
    // Reset to default theme when component unmounts
    return () => {
      setTheme('system');
    };
  }, [setTheme]);
  
  return <>{children}</>;
} 
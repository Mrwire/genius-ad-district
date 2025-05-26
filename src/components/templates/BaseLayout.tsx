'use client';

import React from 'react';
import { useTheme } from '@/components/theme';
import ModernHeader from '@/components/organisms/ModernHeader';
import ModernFooter from '@/components/organisms/ModernFooter';

interface BaseLayoutProps {
  children: React.ReactNode;
  includeFooter?: boolean;
  includeHeader?: boolean;
}

export default function BaseLayout({
  children,
  includeFooter = true,
  includeHeader = true,
}: BaseLayoutProps) {
  const { themeName } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${themeName ? `theme-${themeName}` : ''}`}>
      {includeHeader && <ModernHeader />}
      <main className="flex-1 pt-20">{children}</main>
      {includeFooter && <ModernFooter />}
    </div>
  );
}
import React from 'react';
import { protectPage } from '@/lib/auth-helpers';
import { getTranslations } from 'next-intl/server';
import ClientSidebar from '@/components/organisms/ClientSidebar';
import ClientHeader from '@/components/organisms/ClientHeader';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function ClientPortalLayout({ children, params: { locale } }: LayoutProps) {
  // Protect this route - will redirect if not logged in
  const user = await protectPage();
  const t = await getTranslations('clientPortal');

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <ClientSidebar 
        user={user}
        locale={locale}
        translations={{
          dashboard: t('dashboard.dashboard'),
          projects: t('projects.projects'),
          assets: t('dashboard.assets'),
          messages: t('dashboard.messages'),
          approvals: t('dashboard.approvals'),
          meetings: t('dashboard.meetings'),
          settings: t('dashboard.settings'),
          signOut: t('dashboard.signOut'),
        }}
      />

      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Header */}
        <ClientHeader 
          user={user}
          locale={locale}
          translations={{
            welcomeBack: t('dashboard.welcomeBack'),
            signOut: t('dashboard.signOut'),
          }}
        />

        {/* Main content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 
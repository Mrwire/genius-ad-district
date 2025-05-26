'use client';

import React, { useState } from 'react';
import { Typography } from '@/components/atoms/Typography';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface ClientSidebarProps {
  user: {
    name: string;
    email: string;
    role: string;
    company: string;
    profileImage?: string;
  };
  locale: string;
  translations: {
    dashboard: string;
    projects: string;
    assets: string;
    messages: string;
    approvals: string;
    meetings: string;
    settings: string;
    signOut: string;
  };
}

export default function ClientSidebar({ user, locale, translations }: ClientSidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: `/${locale}` });
  };

  const navigation = [
    {
      name: translations.dashboard,
      href: `/${locale}/client-portal/dashboard`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      name: translations.projects,
      href: `/${locale}/client-portal/projects`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
    },
    {
      name: translations.assets,
      href: `/${locale}/client-portal/assets`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: translations.messages,
      href: `/${locale}/client-portal/messages`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      name: translations.approvals,
      href: `/${locale}/client-portal/approvals`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: translations.meetings,
      href: `/${locale}/client-portal/meetings`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: translations.settings,
      href: `/${locale}/client-portal/settings`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-64'} bg-primary-900 text-white transition-all duration-300 ease-in-out hidden md:flex md:flex-col`}>
      {/* Logo and company */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-primary-800">
        {!isCollapsed && (
          <div className="flex-shrink-0">
            <Typography variant="h2" className="text-xl font-bold text-white">
              Genius AD
            </Typography>
          </div>
        )}
        <button
          type="button"
          className="p-1 rounded-md text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          {isCollapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          )}
        </button>
      </div>

      {/* User profile */}
      <div className={`flex flex-col ${isCollapsed ? 'items-center' : 'items-start'} px-4 py-6 space-y-2 border-b border-primary-800`}>
        <div className={`${isCollapsed ? 'mx-auto' : ''} relative w-12 h-12 rounded-full overflow-hidden bg-primary-700`}>
          {user.profileImage ? (
            <Image
              src={user.profileImage}
              alt={user.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-lg font-bold text-white">
              {user.name.charAt(0)}
            </div>
          )}
        </div>
        {!isCollapsed && (
          <>
            <Typography variant="body" className="text-white font-medium">
              {user.name}
            </Typography>
            <Typography variant="body" className="text-primary-300 text-sm">
              {user.company}
            </Typography>
            <Typography variant="body" className="text-primary-400 text-xs">
              {user.role}
            </Typography>
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <nav className="px-2 py-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isActive
                    ? 'bg-primary-800 text-white'
                    : 'text-primary-300 hover:bg-primary-800 hover:text-white'
                } group flex items-center ${isCollapsed ? 'justify-center' : 'px-2'} py-2 text-sm font-medium rounded-md`}
              >
                <div className={`${isCollapsed ? 'mx-auto' : 'mr-3'} h-6 w-6`}>{item.icon}</div>
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Sign out */}
      <div className="p-4 border-t border-primary-800">
        <button
          onClick={handleSignOut}
          className={`group flex items-center ${isCollapsed ? 'justify-center w-full' : 'px-2'} py-2 text-sm font-medium rounded-md text-primary-300 hover:bg-primary-800 hover:text-white`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`${isCollapsed ? 'mx-auto' : 'mr-3'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          {!isCollapsed && <span>{translations.signOut}</span>}
        </button>
      </div>
    </div>
  );
} 
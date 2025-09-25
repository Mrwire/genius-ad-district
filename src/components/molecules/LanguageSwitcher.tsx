'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from '@/navigation';
import { Link } from '@/navigation';
import { Button } from '@/components/atoms/Button';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('common.languageSwitcher');

  // Determine the opposite locale for switching
  const oppositeLocale = locale === 'en' ? 'fr' : 'en';
  const switchLabel = oppositeLocale === 'fr' ? t('switchToFrench') : t('switchToEnglish');
  const shortLabel = oppositeLocale === 'fr' ? t('short.fr') : t('short.en');

  return (
    <Link href={pathname || '/'} locale={oppositeLocale} className={className}>
      <Button variant="ghost" size="sm" aria-label={switchLabel} title={switchLabel}>
        {shortLabel}
      </Button>
    </Link>
  );
};

export default LanguageSwitcher; 
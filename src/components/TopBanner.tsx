'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';

const TopBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  if (!isVisible) return null;

  return (
    <div className='bg-black text-white py-2 px-4 text-center relative z-50'>
      <div className='max-w-7xl mx-auto flex items-center justify-center'>
        <div className='flex items-center gap-4'>
          <span className='text-sm font-medium'>
            {t('contact.banner.message')}
          </span>
          <button
            className='bg-white text-black px-4 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors duration-200'
            onClick={() => {
              // Vérification côté client pour éviter l'erreur SSR
              if (typeof window !== 'undefined') {
                window.open('#', '_blank');
              }
            }}
          >
            {t('contact.banner.learnMore')}
          </button>
        </div>

        {/* Bouton de fermeture */}
        <button
          onClick={() => setIsVisible(false)}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200'
          aria-label={t('contact.banner.close')}
        >
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopBanner;

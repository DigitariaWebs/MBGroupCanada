'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';

const TopBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  if (!isVisible) return null;

  return (
    <div className='bg-black text-white py-2 px-4 text-center relative z-50'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
        <div className='flex flex-col md:flex-row items-center gap-2 md:gap-4'>
          <span className='text-sm font-medium text-center md:text-left'>
            {t('contact.banner.message')}
          </span>
          <button
            className='bg-white text-black px-4 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors duration-200 cursor-pointer'
            onClick={() => {
              // Vérification côté client pour éviter l'erreur SSR
              if (typeof window !== 'undefined') {
                window.location.href = '/about';
              }
            }}
          >
            {t('contact.banner.learnMore')}
          </button>
        </div>

        {/* Bouton de fermeture */}
        <button
          onClick={() => setIsVisible(false)}
          className='absolute md:relative right-4 top-1/2 md:top-auto md:transform-none transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer'
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

'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';
import { getAsset } from '@/config/assets';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className='bg-white pt-4 md:pt-6 lg:pt-8 pb-16 md:pb-24 lg:pb-32 '>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch min-h-[600px] lg:min-h-[700px]'>
        {/* Left side - Text content */}
        <div className='max-w-7xl mx-auto lg:mx-0 lg:ml-auto lg:mr-0 flex items-center'>
          <div className='space-y-6 px-4 md:px-8 lg:pl-8 lg:pr-8 w-full'>
            <div className='space-y-4'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2e2e] leading-tight'>
                S&apos;adapter.
                <br />
                Innover.
                <br />
                Se surpasser.
              </h1>
            </div>

            <div className='space-y-6 text-[#2d2e2e]'>
              <p className='text-base md:text-lg leading-relaxed'>
                Depuis 25 ans, <span className='font-semibold'>MB Group</span>{' '}
                transforme les idées en lieux de vie d&apos;exception, en
                alliant exigence, expertise et vision durable.
              </p>

              <p className='text-sm md:text-base leading-relaxed'>
                Promoteur immobilier de confiance au Canada, nous développons
                des projets résidentiels et commerciaux qui allient qualité
                architecturale, intégration urbaine et valeur durable.
              </p>

              <p className='text-sm md:text-base leading-relaxed'>
                Notre engagement : bâtir des espaces pensés pour
                aujourd&apos;hui, et conçus pour demain.
              </p>
            </div>

            {/* Contact section */}
            <div className='space-y-4 pt-6'>
              <div className='flex items-center gap-4 text-[#2d2e2e]'>
                <span className='text-sm md:text-base'>Pour nous joindre</span>
                <a
                  href='tel:450-500-0088'
                  className='text-base md:text-lg font-bold hover:text-[#961d1f] transition-colors duration-200'
                >
                  450 - 500 - 0088
                </a>
              </div>

              <button
                className='bg-[#1E1E1E] text-white font-medium text-base px-6 py-3 rounded-sm hover:bg-[#333333] transition-colors duration-200 cursor-pointer'
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Nous contactez
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Hero image */}
        <div className='order-first lg:order-last flex items-center justify-end relative z-0'>
          <div className='relative w-[90%] md:w-[85%] lg:w-full h-auto'>
            <img
              src={getAsset('images', 'hero')}
              width={1200}
              height={1200}
              alt='MB Group - Construction et développement immobilier'
              className='w-full h-auto object-contain'
              style={{ position: 'relative', zIndex: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

'use client';

import React from 'react';
import { assets } from '../config/assets';
import { HiOutlinePlay, HiOutlineHome } from 'react-icons/hi2';

const About: React.FC = () => {
  return (
    <section className='bg-white pt-16 md:pt-24 lg:pt-32 pb-4 md:pb-8 lg:pb-12 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-1 md:px-2'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start'>
          {/* Left side - Larger image only, no gradient, minimal left padding, highest z-index */}
          <div className='relative pl-1 z-50'>
            <div className='relative w-full h-[650px] rounded-lg overflow-hidden z-50'>
              <img
                src={assets.images.about}
                alt='MB Group - À propos de nous'
                className='absolute bottom-0 left-0 w-[140%] h-full object-cover object-bottom rounded-lg z-50'
              />

              {/* Overlay Cards */}
              {/* Virtual Home Tour Card - Top Right with overflow */}
              <div className='absolute top-8 -right-4 bg-white rounded-lg p-6 shadow-xl border border-gray-400 max-w-[320px] w-full z-60'>
                <div className='flex items-center gap-3 mb-3'>
                  <div className='w-12 h-12 bg-[#961d1f] rounded-full flex items-center justify-center'>
                    <HiOutlinePlay className='text-white text-xl' />
                  </div>
                  <div>
                    <h4 className='font-bold text-[#2d2e2e] text-base'>
                      Virtual home tour
                    </h4>
                  </div>
                </div>
                <p className='text-sm text-[#666666] leading-relaxed'>
                  We provide you with virtual tour
                </p>
              </div>

              {/* Find Best Deal Card - Bottom Left with overflow */}
              <div className='absolute bottom-8 -left-4 bg-white rounded-lg p-6 shadow-xl border border-gray-200 max-w-[320px] w-full z-60'>
                <div className='flex items-center gap-3 mb-3'>
                  <div className='w-12 h-12 bg-[#961d1f] rounded-full flex items-center justify-center'>
                    <HiOutlineHome className='text-white text-xl' />
                  </div>
                  <div>
                    <h4 className='font-bold text-[#2d2e2e] text-base'>
                      Find the best deal
                    </h4>
                  </div>
                </div>
                <p className='text-sm text-[#666666] leading-relaxed'>
                  Browse thousands of properties
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className='relative lg:pl-4'>
            <div className='space-y-8'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[normal] capitalize'>
                À Propos MB Group
              </h2>

              <div className='space-y-6 text-sm md:text-base text-[#000000] leading-relaxed'>
                <p>
                  MB Group est une entreprise canadienne reconnue pour son
                  savoir-faire en promotion immobilière résidentielle et
                  commerciale. Forte de plus de 25 ans d&apos;expérience, notre
                  société s&apos;est imposée comme un acteur de référence dans
                  la conception et la réalisation de projets immobiliers
                  innovants, durables et à haute valeur ajoutée.
                </p>

                <p>
                  Depuis sa fondation, notre firme a acquis une solide
                  expérience et une excellente réputation en tant que{' '}
                  <span className='underline cursor-pointer'>
                    promoteur/entrepreneur
                  </span>{' '}
                  et développeur immobilier en multi-logements.
                </p>

                <p>
                  Vous pouvez compter sur nous pour la construction de bâtiments
                  du début jusqu&apos;à la fin du projet. Pour ce faire, nous
                  réunissons une équipe de professionnels composée de nos
                  fidèles partenaires de toutes professions.
                </p>

                <p>
                  Notre{' '}
                  <span className='underline cursor-pointer'>
                    société de promotion immobilière
                  </span>{' '}
                  est reconnue pour proposer des services professionnels{' '}
                  <span className='underline cursor-pointer'>clé en main</span>{' '}
                  avec un design-construction à{' '}
                  <span className='underline cursor-pointer'>prix fixe</span>.
                  Nous nous assurons d&apos;{' '}
                  <span className='underline cursor-pointer'>
                    optimiser le budget d&apos;investissement
                  </span>{' '}
                  et de terminer le projet juste à temps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

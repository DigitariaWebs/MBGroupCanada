'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';
import { assets } from '../config/assets';
import {
  HiOutlineHome,
  HiOutlineCurrencyDollar,
  HiOutlineClipboardDocumentCheck,
  HiOutlineUserGroup,
} from 'react-icons/hi2';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: 'Logement abordable',
      description:
        "Concevoir l'accessibilité sans compromettre la qualité. MB Group s'engage activement dans le développement de logements abordables",
      icon: HiOutlineHome,
    },
    {
      id: 2,
      title: 'contrat cout fixe',
      description:
        'Maîtrisez votre budget, en toute transparence. Avec notre formule de contrat à coût fixe, nous garantissons à nos clients une gestion financière claire, sans surprises',
      icon: HiOutlineCurrencyDollar,
    },
    {
      id: 3,
      title: 'Gestion de projets',
      description:
        'Nous offrons un service de gestion de projets clés en main, couvrant toutes les étapes du processus : planification, coordination, supervision des travaux, gestion',
      icon: HiOutlineClipboardDocumentCheck,
    },
    {
      id: 4,
      title: 'Entrepreneurs & promoteurs',
      description:
        'Des partenariats solides pour des projets ambitieux. MB Group accompagne les entrepreneurs dans la réalisation de leurs projets immobiliers, en apportant conseil stratégique',
      icon: HiOutlineUserGroup,
    },
  ];

  return (
    <section className='bg-white py-16 md:py-20 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left Side - Services Content */}
          <div>
            {/* Section Title */}
            <h2 className='text-4xl md:text-5xl font-bold text-[#2d2e2e] mb-12'>
              Nos Services
            </h2>

            {/* Services Grid - 2x2 */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {services.map(service => (
                <div key={service.id} className='space-y-4'>
                  {/* Icon */}
                  <div className='w-16 h-16 bg-[#961d1f] rounded-full flex items-center justify-center mb-4'>
                    <service.icon className='text-2xl text-white' />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className='text-lg font-bold text-[#2d2e2e] mb-3 leading-tight'>
                      {service.title}
                    </h3>
                    <p className='text-sm text-[#666666] leading-relaxed'>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Service Image */}
          <div className='relative'>
            <div className='relative h-[600px] lg:h-[700px] overflow-hidden rounded-2xl'>
              <img
                src={assets.images.service}
                alt='MB Group - Services de construction'
                className='w-full h-full object-cover'
                onError={e => {
                  // Fallback to a placeholder if service.png doesn't exist
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

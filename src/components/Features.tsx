'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';
import {
  HiOutlineShieldCheck,
  HiOutlineHome,
  HiOutlineClipboardDocumentList,
} from 'react-icons/hi2';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      id: 1,
      title: 'Rigueur',
      description:
        'Nous appliquons avec rigueur les normes du Code National du Bâtiment qui sont en vigueur nous bâtissons des projets solides, durables et humains',
      icon: HiOutlineShieldCheck,
      variant: 'light',
    },
    {
      id: 2,
      title: 'Professionalisme',
      description:
        "membres de l'Institut des Économistes en Construction, l'Association des Constructeurs et Développement Urbain du Québec",
      icon: HiOutlineHome,
      variant: 'dark',
    },
    {
      id: 3,
      title: 'Service sur mesure',
      description:
        'Notre objectif est de bâtir des projets clé en main qui répondent aux besoins du marché.',
      icon: HiOutlineClipboardDocumentList,
      variant: 'dark',
    },
  ];

  const statistics = [
    {
      value: '7.4%',
      label: 'Property Return Rate',
    },
    {
      value: '3,856',
      label: 'Property in Sell & Rent',
    },
    {
      value: '2,540',
      label: 'Daily Completed Transactions',
    },
  ];

  return (
    <section className='bg-gray-50 py-16 md:py-20 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {/* Header Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16'>
          {/* Left Side - Title */}
          <div>
            <h2 className='text-4xl md:text-5xl font-bold text-[#2d2e2e] leading-tight'>
              De bonnes raisons de
              <br />
              nous faire <span className='text-[#961d1f]'>confiance</span>
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className='flex items-center'>
            <p className='text-base text-[#666666] leading-relaxed'>
              Depuis plus de 25 ans, nous bâtissons des projets solides,
              durables et humains. Notre expertise, notre transparence et notre
              engagement envers la qualité font de MB Group un partenaire fiable
            </p>
          </div>
        </div>

        {/* Features Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>
          {features.map(feature => (
            <div
              key={feature.id}
              className={`p-8 rounded-2xl ${
                feature.variant === 'light'
                  ? 'bg-white border-2 border-gray-200'
                  : 'bg-[#2d2e2e] text-white'
              }`}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  feature.variant === 'light' ? 'bg-gray-100' : 'bg-white/10'
                }`}
              >
                <feature.icon
                  className={`text-2xl ${
                    feature.variant === 'light'
                      ? 'text-[#2d2e2e]'
                      : 'text-white'
                  }`}
                />
              </div>

              {/* Content */}
              <h3
                className={`text-xl font-bold mb-4 ${
                  feature.variant === 'light' ? 'text-[#2d2e2e]' : 'text-white'
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  feature.variant === 'light'
                    ? 'text-[#666666]'
                    : 'text-gray-300'
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {statistics.map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-[#2d2e2e] mb-2'>
                {stat.value}
              </div>
              <div className='text-sm text-[#666666] font-medium'>
                {stat.label}
              </div>
              {index < statistics.length - 1 && (
                <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-12 bg-gray-300'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

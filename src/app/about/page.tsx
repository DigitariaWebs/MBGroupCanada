'use client';

import React, { useState } from 'react';
import {
  Play,
  Home,
  DollarSign,
  Settings,
  Users,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopBanner from '@/components/TopBanner';
import { assets } from '@/config/assets';

const AboutPage: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Données des projets avec images d'internet
  const projects = [
    {
      id: 1,
      title: 'Résidence Valmont — Laval, Québec',
      date: '04 June 2023',
      description:
        "Un complexe résidentiel moderne niché au cœur d'un quartier paisible, à proximité des écoles et des espaces verts. Inspiré par l'architecture épurée et la vie de famille urbaine.",
      category: 'Conception',
      image:
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      title: 'Le Domaine des Pins — Outremont, Montréal',
      date: '03 June 2023',
      description:
        'Ensemble résidentiel haut de gamme entouré de nature, avec des unités spacieuses, terrasses privées et finitions de prestige. Pensé pour ceux qui recherchent calme et élégance à quelques minutes du centre-ville.',
      category: 'Conception',
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      title: 'Quartier Lumière — Vieux-Longueuil, Rive-Sud',
      date: '01 June 2023',
      description:
        'Projet mixte alliant habitations, commerces et espaces publics animés, dans un cadre lumineux et contemporain. Conçu pour redynamiser le secteur et favoriser une vie de quartier riche et durable.',
      category: 'Conception',
      image:
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 4,
      title: 'Torre Soleil — Brossard, Rive-Sud',
      date: '28 May 2023',
      description:
        'Tour résidentielle moderne offrant une vue panoramique sur le fleuve Saint-Laurent. Condominiums de luxe avec services hôteliers et espaces communs exceptionnels.',
      category: 'Développement',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 5,
      title: 'Les Jardins de Westmount — Montréal',
      date: '15 May 2023',
      description:
        "Développement résidentiel exclusif dans le prestigieux quartier de Westmount. Maisons de ville avec architecture patrimoniale et aménagements paysagers d'exception.",
      category: 'Rénovation',
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 6,
      title: 'Centre Commercial Horizon — Saint-Laurent',
      date: '10 May 2023',
      description:
        'Complexe commercial moderne intégrant boutiques, restaurants et espaces de bureau. Design écologique avec certification LEED et technologies vertes.',
      category: 'Commercial',
      image:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 7,
      title: 'Résidence du Vieux-Port — Québec',
      date: '02 May 2023',
      description:
        "Projet de réhabilitation d'un bâtiment historique en condominiums de luxe. Préservation du patrimoine architectural avec intégration d'équipements modernes.",
      category: 'Rénovation',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 8,
      title: 'Éco-Village Tremblant — Mont-Tremblant',
      date: '25 April 2023',
      description:
        'Développement résidentiel écologique en harmonie avec la nature. Chalets et condos avec matériaux durables et systèmes éco-énergétiques.',
      category: 'Écologique',
      image:
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 9,
      title: 'Place des Affaires — Centre-ville Montréal',
      date: '20 April 2023',
      description:
        'Tour de bureaux de 25 étages au cœur du district financier. Espaces de travail flexibles et technologies de pointe pour les entreprises modernes.',
      category: 'Commercial',
      image:
        'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePrevious = () => {
    setCurrentProjectIndex(prev => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentProjectIndex(prev => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const getCurrentProjects = () => {
    const startIndex = currentProjectIndex * projectsPerPage;
    return projects.slice(startIndex, startIndex + projectsPerPage);
  };
  return (
    <div className='bg-white min-h-screen'>
      <TopBanner />
      <Navbar />

      {/* Main Content Container */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Hero Section with Image and Video Tour */}
        <div className='flex flex-col lg:flex-row gap-8 pt-16 pb-12 lg:items-stretch'>
          {/* Left side - Image with Video Tour Card */}
          <div className='lg:w-1/2 relative flex'>
            {/* Main building image with video */}
            <div className='relative bg-gradient-to-b from-gray-400 to-white rounded-lg w-full min-h-[400px] overflow-hidden flex-1'>
              <video
                className='absolute inset-0 w-full h-full object-cover'
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={assets.images.aboutv} type='video/mp4' />
                Your browser does not support the video tag.
              </video>

              {/* Video tour card overlay */}
              <div className='absolute bottom-8 left-8 right-8 bg-white rounded-lg p-6 shadow-lg'>
                <div className='flex items-center gap-4'>
                  <div className='w-16 h-16 bg-red-500 rounded-full flex items-center justify-center'>
                    <Play size={32} className='text-white fill-white ml-1' />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg text-gray-900'>
                      Découvrez nos espaces
                    </h3>
                    <p className='text-gray-600'>
                      Explorez nos projets immobiliers depuis chez vous
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - About content */}
          <div className='lg:w-1/2 lg:pl-12'>
            <div className='mb-6'>
              <p className='text-[#e22d2e] text-lg font-semibold tracking-[6px] uppercase mb-4'>
                Un peu
              </p>
              <h1 className='text-[#222222] text-4xl lg:text-5xl font-bold tracking-[5px] leading-tight'>
                À PROPOS DE NOUS
              </h1>
            </div>

            {/* Benefits Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
              {/* Benefit 1 - Logement abordable */}
              <div className='space-y-6'>
                <div className='relative'>
                  <div className='w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center'>
                    <div className='w-12 h-12 bg-[#e22d2e] rounded-full flex items-center justify-center'>
                      <Home size={24} className='text-white' />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className='text-[#000929] text-2xl font-bold mb-4'>
                    Logement abordable
                  </h3>
                  <p className='text-[#4d5461] leading-relaxed'>
                    Concevoir l&apos;accessibilité sans compromettre la qualité.
                    MB Group s&apos;engage activement dans le développement de
                    logements abordables
                  </p>
                </div>
              </div>

              {/* Benefit 2 - Contrat cout fixe */}
              <div className='space-y-6'>
                <div className='relative'>
                  <div className='w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center'>
                    <div className='w-12 h-12 bg-[#e22d2e] rounded-full flex items-center justify-center'>
                      <DollarSign size={24} className='text-white' />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className='text-[#000929] text-2xl font-bold mb-4'>
                    Contrat cout fixe
                  </h3>
                  <p className='text-[#4d5461] leading-relaxed'>
                    Maîtrisez votre budget, en toute transparence. Avec notre
                    formule de contrat à coût fixe, nous garantissons à nos
                    clients une gestion financière claire, sans surprises.
                  </p>
                </div>
              </div>

              {/* Benefit 3 - Gestion de projets */}
              <div className='space-y-6'>
                <div className='relative'>
                  <div className='w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center'>
                    <div className='w-12 h-12 bg-[#e22d2e] rounded-full flex items-center justify-center'>
                      <Settings size={24} className='text-white' />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className='text-[#000929] text-2xl font-bold mb-4'>
                    Gestion de projets
                  </h3>
                  <p className='text-[#4d5461] leading-relaxed'>
                    Nous offrons un service de gestion de projets clés en main,
                    couvrant toutes les étapes du processus : planification,
                    coordination, supervision des travaux, gestion
                  </p>
                </div>
              </div>

              {/* Benefit 4 - Pour Entrepreneurs */}
              <div className='space-y-6'>
                <div className='relative'>
                  <div className='w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center'>
                    <div className='w-12 h-12 bg-[#e22d2e] rounded-full flex items-center justify-center'>
                      <Users size={24} className='text-white' />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className='text-[#000929] text-2xl font-bold mb-4'>
                    Pour Entrepreneurs
                  </h3>
                  <p className='text-[#4d5461] leading-relaxed'>
                    Des partenariats solides pour des projets ambitieux. MB
                    Group accompagne les entrepreneurs dans la réalisation de
                    leurs projets immobiliers, en apportant conseil stratégique
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nos Réalisations Section */}
        <div className='py-16'>
          <div className='flex justify-between items-center mb-12'>
            <h2 className='text-[#e22d2e] text-3xl font-bold uppercase'>
              Nos réalisations
            </h2>
            <div className='flex gap-2 text-sm text-gray-500'>
              <span>{currentProjectIndex + 1}</span>
              <span>/</span>
              <span>{totalPages}</span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {getCurrentProjects().map(project => (
              <div
                key={project.id}
                className='bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300'
              >
                <div className='h-64 bg-gray-300 overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                    loading='lazy'
                  />
                </div>
                <div className='p-6'>
                  <div className='text-sm text-gray-500 mb-2'>
                    {project.date}
                  </div>
                  <h3 className='text-xl font-medium text-gray-800 mb-3'>
                    {project.title}
                  </h3>
                  <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                    {project.description}
                  </p>
                  <div className='mt-4'>
                    <span className='inline-block px-3 py-1 text-xs text-gray-300 border border-gray-200 rounded'>
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className='flex gap-4 justify-center'>
            <button
              className='w-16 h-12 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
              aria-label='Projets précédents'
              title='Projets précédents'
              onClick={handlePrevious}
              disabled={projects.length <= projectsPerPage}
            >
              <ArrowLeft size={20} className='text-gray-600' />
            </button>
            <button
              className='w-16 h-12 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
              aria-label='Projets suivants'
              title='Projets suivants'
              onClick={handleNext}
              disabled={projects.length <= projectsPerPage}
            >
              <ArrowRight size={20} className='text-gray-600' />
            </button>
          </div>

          {/* Dots indicator */}
          <div className='flex justify-center gap-2 mt-6'>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProjectIndex ? 'bg-[#e22d2e]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentProjectIndex(index)}
                aria-label={`Aller à la page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;

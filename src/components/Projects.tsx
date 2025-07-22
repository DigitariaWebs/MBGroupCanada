'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { HiOutlineArrowRight, HiOutlineMapPin } from 'react-icons/hi2';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous les projets' },
    { id: 'residential', name: 'Résidentiel' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'mixed', name: 'Mixte' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Les Jardins de Brossard',
      category: 'residential',
      location: 'Brossard, QC',
      year: '2023',
      description:
        'Complexe résidentiel moderne de 120 unités avec espaces verts intégrés.',
      image:
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      stats: { units: '120', area: '15,000m²' },
    },
    {
      id: 2,
      title: 'Centre Commercial Rivière',
      category: 'commercial',
      location: 'Longueuil, QC',
      year: '2023',
      description:
        'Centre commercial moderne avec restaurants et boutiques spécialisées.',
      image:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      stats: { stores: '45', area: '8,500m²' },
    },
    {
      id: 3,
      title: 'Résidence Mont-Royal',
      category: 'residential',
      location: 'Mont-Royal, QC',
      year: '2022',
      description:
        'Tours résidentielles de luxe avec vue panoramique sur la ville.',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      stats: { units: '180', floors: '25' },
    },
    {
      id: 4,
      title: 'Complexe Urbain Laval',
      category: 'mixed',
      location: 'Laval, QC',
      year: '2022',
      description:
        'Développement mixte combinant résidences, bureaux et commerces.',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      stats: { units: '200', commercial: '50' },
    },
    {
      id: 5,
      title: 'Les Terrasses Vertes',
      category: 'residential',
      location: 'Chambly, QC',
      year: '2021',
      description: 'Maisons en rangée écologiques avec technologies durables.',
      image:
        'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      stats: { units: '75', green: 'LEED' },
    },
    {
      id: 6,
      title: 'Bureau Corporate Plaza',
      category: 'commercial',
      location: 'Montréal, QC',
      year: '2021',
      description:
        'Immeuble de bureaux moderne avec espaces collaboratifs innovants.',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      stats: { floors: '12', area: '18,000m²' },
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter(project => project.category === activeCategory);

  return (
    <section className='bg-white py-16 md:py-20 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d2e2e] mb-6'>
            Nos Réalisations
          </h2>
          <p className='text-lg md:text-xl text-[#2d2e2e] max-w-3xl mx-auto leading-relaxed'>
            Plus de 25 ans d'expertise en développement immobilier à travers le
            Québec. Découvrez nos projets qui façonnent l'avenir urbain.
          </p>
        </div>

        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-[#961d1f] text-white shadow-lg'
                  : 'bg-gray-100 text-[#2d2e2e] hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className='group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className='relative h-64 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300'></div>
                <div className='absolute top-4 right-4 bg-[#961d1f] text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  {project.year}
                </div>
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold text-[#2d2e2e] mb-2'>
                  {project.title}
                </h3>
                <p className='text-[#961d1f] font-medium mb-3 flex items-center gap-1'>
                  <HiOutlineMapPin className='text-sm' />
                  {project.location}
                </p>
                <p className='text-[#2d2e2e] mb-4 leading-relaxed'>
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className='flex flex-wrap gap-3 mb-4'>
                  {Object.entries(project.stats).map(([key, value]) => (
                    <span
                      key={key}
                      className='bg-gray-100 px-3 py-1 rounded-full text-sm text-[#2d2e2e]'
                    >
                      {value}
                    </span>
                  ))}
                </div>

                <button className='text-[#961d1f] font-semibold hover:text-[#7a1619] transition-colors duration-200 flex items-center gap-2'>
                  Voir le projet
                  <HiOutlineArrowRight className='transform group-hover:translate-x-1 transition-transform duration-200' />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className='text-center mt-16'>
          <p className='text-lg text-[#2d2e2e] mb-6'>
            Découvrez l'ensemble de notre portfolio et nos projets en cours
          </p>
          <button className='bg-[#961d1f] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#7a1619] transition-colors duration-200'>
            Voir tous nos projets
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

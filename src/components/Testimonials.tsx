'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      title: 'Un chez-soi à la hauteur de nos attentes',
      content:
        "Nous avons emménagé dans notre nouveau condo il y a quelques mois, et tout a été parfaitement pensé. l'équipe a su répondre à toutes nos attentes.",
      name: 'Famille Tremblay',
      position: 'Acheteurs',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 2,
      title: 'Un partenaire de confiance pour mes investissements',
      content:
        "Collaborer avec MB Group, c'est avoir l'assurance d'un projet bien exécuté, transparent et rentable. Leur expertise en gestion et leur rigueur.",
      name: 'Marc Gagnon',
      position: 'Investisseur immobilier',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 3,
      title: 'Une collaboration fluide et inspirante',
      content:
        'Travailler avec MB Group est un vrai plaisir sa vision est claire, et créative, et ils valorisent vraiment le travail en équipe. Un promoteur qui sait bâtir.',
      name: 'Makenna Korsgaard',
      position: 'Architecte partenaire',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 4,
      title: 'Un engagement sincère envers les collectivités',
      content:
        "Dans le cadre d'un projet de logements abordables, MB Group a démontré un réel engagement envers l'amélioration de la vie et l'intégration communautaire.",
      name: 'Sophie Martineau',
      position: 'Urbaniste',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 5,
      title: 'Excellence en construction commerciale',
      content:
        "Notre centre commercial a été livré dans les délais et le budget prévu. L'équipe de MB Group maîtrise parfaitement les projets complexes.",
      name: 'Jean-François Roy',
      position: 'Propriétaire commercial',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 6,
      title: 'Innovation et durabilité remarquables',
      content:
        'Leur approche intègre parfaitement les technologies vertes et les certifications LEED. Un vrai pionnier du développement durable.',
      name: 'Marie-Claire Dubois',
      position: 'Consultante environnementale',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 7,
      title: 'Service client exceptionnel',
      content:
        'De la première rencontre à la remise des clés, chaque étape a été gérée avec professionnalisme. Communication claire et transparente.',
      name: 'David Chen',
      position: 'Copropriétaire',
      image:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 8,
      title: 'Vision stratégique impressionnante',
      content:
        "Leur capacité à anticiper les tendances du marché et à développer des projets innovants fait de MB Group un leader de l'industrie.",
      name: 'Isabella Rodriguez',
      position: 'Analyste immobilier',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Calculate visible testimonials (show 3 at a time on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    if (typeof window === 'undefined') return testimonials.slice(0, 3);

    const visibleCount =
      window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const [visibleTestimonials, setVisibleTestimonials] = useState(
    testimonials.slice(0, 3)
  );

  useEffect(() => {
    const updateVisible = () => {
      setVisibleTestimonials(getVisibleTestimonials());
    };

    updateVisible();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateVisible);
      return () => window.removeEventListener('resize', updateVisible);
    }
  }, [currentIndex]);

  return (
    <section className='bg-gray-50 py-16 md:py-20 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-[#2d2e2e] mb-6'>
            Ce que disent nos clients
          </h2>
          <p className='text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed'>
            Découvrez les témoignages de nos clients qui ont fait confiance à MB
            Group pour leurs projets immobiliers les plus importants.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className='relative overflow-hidden'>
          <div
            className='flex transition-transform duration-1000 ease-in-out gap-8'
            style={{
              transform: `translateX(-${
                typeof window !== 'undefined'
                  ? (currentIndex * 100) / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)
                  : 0
              }%)`,
            }}
          >
            {testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className='flex-shrink-0 w-full md:w-1/2 lg:w-1/3'
              >
                <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col'>
                  {/* Quote Icon */}
                  <div className='mb-6'>
                    <HiOutlineChatBubbleLeftEllipsis className='text-4xl text-[#961d1f]' />
                  </div>

                  {/* Testimonial Title */}
                  <h3 className='text-xl font-bold text-[#2d2e2e] mb-4 leading-tight'>
                    {testimonial.title}
                  </h3>

                  {/* Testimonial Content */}
                  <p className='text-[#666666] leading-relaxed mb-8 flex-grow'>
                    {testimonial.content}
                  </p>

                  {/* Client Info */}
                  <div className='flex items-center gap-4'>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='w-12 h-12 rounded-full object-cover border-2 border-[#961d1f]'
                    />
                    <div>
                      <h4 className='font-bold text-[#2d2e2e] text-sm'>
                        {testimonial.name}
                      </h4>
                      <p className='text-[#666666] text-sm'>
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className='flex justify-center gap-2 mt-12'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#961d1f] w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200'>
          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold text-[#961d1f] mb-2'>
              98%
            </div>
            <div className='text-sm text-[#666666]'>Clients satisfaits</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold text-[#961d1f] mb-2'>
              150+
            </div>
            <div className='text-sm text-[#666666]'>Projets réalisés</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold text-[#961d1f] mb-2'>
              25
            </div>
            <div className='text-sm text-[#666666]'>Années d'expérience</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold text-[#961d1f] mb-2'>
              24h
            </div>
            <div className='text-sm text-[#666666]'>Temps de réponse</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

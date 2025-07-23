'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, ChevronDown, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopBanner from '@/components/TopBanner';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    propertyType: '',
    localisation: '',
    service: '',
    budget: '',
    contactMethod: 'email', // 'email' or 'phone'
    message: '',
    acceptTerms: false,
  });

  const [dropdowns, setDropdowns] = useState({
    location: false,
    propertyType: false,
    localisation: false,
    service: false,
    budget: false,
  });

  const formRef = useRef<HTMLFormElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setDropdowns({
          location: false,
          propertyType: false,
          localisation: false,
          service: false,
          budget: false,
        });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleDropdownToggle = (dropdown: string) => {
    setDropdowns(prev => {
      // Close all dropdowns first
      const newDropdowns = {
        location: false,
        propertyType: false,
        localisation: false,
        service: false,
        budget: false,
      };
      // Then toggle the selected one
      newDropdowns[dropdown as keyof typeof newDropdowns] =
        !prev[dropdown as keyof typeof prev];
      return newDropdowns;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
  };

  return (
    <div className='bg-white min-h-screen'>
      <TopBanner />
      <Navbar />

      {/* Main Content Container */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='pt-16 pb-8'>
          <h1 className='text-[#222222] text-4xl lg:text-5xl font-semibold uppercase leading-tight mb-6'>
            Commencez votre aventure immobilière dès aujourd&apos;hui.
          </h1>
          <p className='text-[#999999] text-lg leading-relaxed max-w-4xl'>
            Votre propriété de rêve n&apos;est qu&apos;à un clic. Que vous
            recherchiez une nouvelle maison, un investissement stratégique ou
            des conseils immobiliers d&apos;experts, Estatein est là pour vous
            accompagner à chaque étape. Faites le premier pas vers la
            réalisation de vos objectifs immobiliers en explorant nos propriétés
            disponibles ou en contactant notre équipe pour un accompagnement
            personnalisé.
          </p>
        </div>

        {/* Contact Form */}
        <div className='bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg p-8 lg:p-12 mb-16'>
          <form ref={formRef} onSubmit={handleSubmit} className='space-y-12'>
            {/* First Row - Personal Information */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {/* First Name */}
              <div className='space-y-4'>
                <label className='text-white text-xl font-semibold block'>
                  First Name
                </label>
                <div className='relative'>
                  <input
                    type='text'
                    name='firstName'
                    placeholder='Nom'
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className='w-full px-5 py-6 bg-white border border-neutral-800 rounded text-[#666666] text-lg placeholder-[#666666] focus:outline-none focus:border-[#e22d2e]'
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className='space-y-4'>
                <label className='text-white text-xl font-semibold block'>
                  Last Name
                </label>
                <div className='relative'>
                  <input
                    type='text'
                    name='lastName'
                    placeholder='Prénom'
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className='w-full px-5 py-6 bg-white border border-neutral-800 rounded text-[#666666] text-lg placeholder-[#666666] focus:outline-none focus:border-[#e22d2e]'
                  />
                </div>
              </div>

              {/* Email */}
              <div className='space-y-4'>
                <label className='text-white text-xl font-semibold block'>
                  Email
                </label>
                <div className='relative'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full px-5 py-6 bg-white border border-neutral-800 rounded text-[#666666] text-lg placeholder-[#666666] focus:outline-none focus:border-[#e22d2e]'
                  />
                </div>
              </div>

              {/* Phone */}
              <div className='space-y-4'>
                <label className='text-white text-xl font-semibold block'>
                  Phone
                </label>
                <div className='relative'>
                  <input
                    type='tel'
                    name='phone'
                    placeholder='Téléphone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='w-full px-5 py-6 bg-white border border-neutral-800 rounded text-[#666666] text-lg placeholder-[#666666] focus:outline-none focus:border-[#e22d2e]'
                  />
                </div>
              </div>
            </div>

            {/* Second Row - Property Details */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {/* Preferred Location */}
              <div className='space-y-4'>
                <label className='text-white text-xl font-semibold block'>
                  Preferred Location
                </label>
                <div className='relative'>
                  <button
                    type='button'
                    onClick={() => handleDropdownToggle('location')}
                    className='w-full px-5 py-6 bg-white border border-neutral-800 rounded text-[#666666] text-lg text-left flex items-center justify-between focus:outline-none focus:border-[#e22d2e]'
                  >
                    <span>
                      {formData.location || 'Sélectionner une location'}
                    </span>
                    <ChevronDown size={24} className='text-[#666666]' />
                  </button>
                  {dropdowns.location && (
                    <div className='absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-800 rounded shadow-lg z-10'>
                      {[
                        'Toronto',
                        'Vancouver',
                        'Montreal',
                        'Calgary',
                        'Ottawa',
                        'Edmonton',
                        'Winnipeg',
                        'Quebec City',
                      ].map(location => (
                        <button
                          key={location}
                          type='button'
                          onClick={() => {
                            setFormData(prev => ({ ...prev, location }));
                            handleDropdownToggle('location');
                          }}
                          className='w-full px-5 py-3 text-left text-[#666666] hover:bg-gray-100 transition-colors'
                        >
                          {location}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Property Type */}
              <div className='space-y-4'>
                <label className='text-white text-xl font-semibold block'>
                  Property Type
                </label>
                <div className='relative'>
                  <button
                    type='button'
                    onClick={() => handleDropdownToggle('propertyType')}
                    className='w-full px-5 py-6 bg-white border border-neutral-800 rounded text-[#666666] text-lg text-left flex items-center justify-between focus:outline-none focus:border-[#e22d2e]'
                  >
                    <span>
                      {formData.propertyType || 'Sélectionner un type'}
                    </span>
                    <ChevronDown size={24} className='text-[#666666]' />
                  </button>
                  {dropdowns.propertyType && (
                    <div className='absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-800 rounded shadow-lg z-10'>
                      {[
                        'Maison unifamiliale',
                        'Condominium',
                        'Appartement',
                        'Duplex',
                        'Triplex',
                        'Terrain',
                        'Commercial',
                        'Industriel',
                      ].map(type => (
                        <button
                          key={type}
                          type='button'
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              propertyType: type,
                            }));
                            handleDropdownToggle('propertyType');
                          }}
                          className='w-full px-5 py-3 text-left text-[#666666] hover:bg-gray-100 transition-colors'
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Localisation */}
              <div className='space-y-4'>
                <label className='text-white text-xl font-semibold block'>
                  No. of Bathrooms
                </label>
                <div className='relative'>
                  <button
                    type='button'
                    onClick={() => handleDropdownToggle('localisation')}
                    className='w-full px-5 py-6 bg-white border border-neutral-800 rounded text-[#666666] text-lg text-left flex items-center justify-between focus:outline-none focus:border-[#e22d2e]'
                  >
                    <span>
                      {formData.localisation || 'Nombre de salles de bain'}
                    </span>
                    <ChevronDown size={24} className='text-[#666666]' />
                  </button>
                  {dropdowns.localisation && (
                    <div className='absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-800 rounded shadow-lg z-10'>
                      {['1', '2', '3', '4', '5+'].map(bathroom => (
                        <button
                          key={bathroom}
                          type='button'
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              localisation: bathroom,
                            }));
                            handleDropdownToggle('localisation');
                          }}
                          className='w-full px-5 py-3 text-left text-[#666666] hover:bg-gray-100 transition-colors'
                        >
                          {bathroom}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Service */}
              <div className='space-y-4'>
                <label className='text-white text-xl font-semibold block'>
                  No. of Bedrooms
                </label>
                <div className='relative'>
                  <button
                    type='button'
                    onClick={() => handleDropdownToggle('service')}
                    className='w-full px-5 py-6 bg-white border border-neutral-800 rounded text-[#666666] text-lg text-left flex items-center justify-between focus:outline-none focus:border-[#e22d2e]'
                  >
                    <span>{formData.service || 'Nombre de chambres'}</span>
                    <ChevronDown size={24} className='text-[#666666]' />
                  </button>
                  {dropdowns.service && (
                    <div className='absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-800 rounded shadow-lg z-10'>
                      {['1', '2', '3', '4', '5+'].map(bedroom => (
                        <button
                          key={bedroom}
                          type='button'
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              service: bedroom,
                            }));
                            handleDropdownToggle('service');
                          }}
                          className='w-full px-5 py-3 text-left text-[#666666] hover:bg-gray-100 transition-colors'
                        >
                          {bedroom}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Third Row - Budget and Contact Method */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {/* Budget */}
              <div className='space-y-4'>
                <label className='text-white text-xl font-semibold block'>
                  Budget
                </label>
                <div className='relative'>
                  <button
                    type='button'
                    onClick={() => handleDropdownToggle('budget')}
                    className='w-full px-5 py-6 bg-white border border-neutral-800 rounded text-[#666666] text-lg text-left flex items-center justify-between focus:outline-none focus:border-[#e22d2e]'
                  >
                    <span>{formData.budget || 'Sélectionner un budget'}</span>
                    <ChevronDown size={24} className='text-[#666666]' />
                  </button>
                  {dropdowns.budget && (
                    <div className='absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-800 rounded shadow-lg z-10'>
                      {[
                        'Moins de 200 000 $',
                        '200 000 $ - 400 000 $',
                        '400 000 $ - 600 000 $',
                        '600 000 $ - 800 000 $',
                        '800 000 $ - 1 000 000 $',
                        'Plus de 1 000 000 $',
                      ].map(budgetRange => (
                        <button
                          key={budgetRange}
                          type='button'
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              budget: budgetRange,
                            }));
                            handleDropdownToggle('budget');
                          }}
                          className='w-full px-5 py-3 text-left text-[#666666] hover:bg-gray-100 transition-colors'
                        >
                          {budgetRange}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div className='space-y-4'>
                <label className='text-white text-xl font-semibold block'>
                  Preferred Contact Method
                </label>
                <div className='grid grid-cols-2 gap-4'>
                  {/* Email Option */}
                  <button
                    type='button'
                    onClick={() =>
                      setFormData(prev => ({ ...prev, contactMethod: 'email' }))
                    }
                    className={`px-6 py-6 bg-white border border-neutral-800 rounded text-lg flex items-center gap-3 ${
                      formData.contactMethod === 'email'
                        ? 'border-[#e22d2e]'
                        : 'border-neutral-800'
                    }`}
                  >
                    <Mail size={24} className='text-[#666666]' />
                    <span className='text-[#666666]'>Entrer Votre email</span>
                    {formData.contactMethod === 'email' && (
                      <div className='ml-auto w-4 h-4 bg-[#e22d2e] rounded-full flex items-center justify-center'>
                        <div className='w-2 h-2 bg-white rounded-full'></div>
                      </div>
                    )}
                  </button>

                  {/* Phone Option */}
                  <button
                    type='button'
                    onClick={() =>
                      setFormData(prev => ({ ...prev, contactMethod: 'phone' }))
                    }
                    className={`px-6 py-6 bg-white border border-neutral-800 rounded text-lg flex items-center gap-3 ${
                      formData.contactMethod === 'phone'
                        ? 'border-[#e22d2e]'
                        : 'border-neutral-800'
                    }`}
                  >
                    <Phone size={24} className='text-[#666666]' />
                    <span className='text-[#666666]'>
                      Entrer votre téléphone
                    </span>
                    {formData.contactMethod === 'phone' && (
                      <div className='ml-auto w-4 h-4 bg-[#e22d2e] rounded-full flex items-center justify-center'>
                        <div className='w-2 h-2 bg-white rounded-full'></div>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className='space-y-4'>
              <label className='text-white text-xl font-semibold block'>
                Message
              </label>
              <textarea
                name='message'
                placeholder='Quelque chose à ajouter'
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className='w-full px-5 py-6 bg-white border border-neutral-800 rounded text-[#666666] text-lg placeholder-[#666666] focus:outline-none focus:border-[#e22d2e] resize-none'
              />
            </div>

            {/* Submit Section */}
            <div className='flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between'>
              {/* Terms Checkbox */}
              <div className='flex items-start gap-3'>
                <button
                  type='button'
                  onClick={() =>
                    setFormData(prev => ({
                      ...prev,
                      acceptTerms: !prev.acceptTerms,
                    }))
                  }
                  className={`w-7 h-7 border border-neutral-800 rounded flex items-center justify-center ${
                    formData.acceptTerms
                      ? 'bg-[#e22d2e] border-[#e22d2e]'
                      : 'bg-white'
                  }`}
                >
                  {formData.acceptTerms && (
                    <Check size={16} className='text-white' />
                  )}
                </button>
                <span className='text-[#999999] text-lg leading-relaxed'>
                  J&apos;accepte les Conditions d&apos;utilisation et la
                  Politique de confidentialité.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='bg-[#7d1415] hover:bg-[#961d1f] text-white px-12 py-5 rounded text-lg font-medium transition-colors'
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;

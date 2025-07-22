'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineMap,
  HiOutlineCheck,
} from 'react-icons/hi2';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend
  };

  const contactInfo = [
    {
      title: t('contact.info.phone'),
      value: t('contact.info.phoneValue'),
      icon: HiOutlinePhone,
      href: `tel:${t('contact.info.phoneValue')}`,
    },
    {
      title: t('contact.info.email'),
      value: t('contact.info.emailValue'),
      icon: HiOutlineEnvelope,
      href: `mailto:${t('contact.info.emailValue')}`,
    },
    {
      title: t('contact.info.address'),
      value: t('contact.info.addressValue'),
      icon: HiOutlineMapPin,
      href: '#',
    },
    {
      title: t('contact.info.hours'),
      value: t('contact.info.hoursValue'),
      icon: HiOutlineClock,
      href: '#',
    },
  ];

  return (
    <section className='bg-white py-16 md:py-20 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d2e2e] mb-6'>
            {t('contact.title')}
          </h1>
          <p className='text-lg md:text-xl text-[#2d2e2e] max-w-3xl mx-auto leading-relaxed'>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='bg-gray-50 p-8 rounded-2xl'>
            <h2 className='text-2xl font-bold text-[#2d2e2e] mb-6'>
              {t('contact.form.title')}
            </h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-[#2d2e2e] mb-2'>
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#961d1f] transition-colors duration-200'
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-[#2d2e2e] mb-2'>
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#961d1f] transition-colors duration-200'
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-[#2d2e2e] mb-2'>
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#961d1f] transition-colors duration-200'
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-[#2d2e2e] mb-2'>
                    {t('contact.form.company')}
                  </label>
                  <input
                    type='text'
                    name='company'
                    value={formData.company}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#961d1f] transition-colors duration-200'
                    placeholder={t('contact.form.companyPlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-[#2d2e2e] mb-2'>
                  {t('contact.form.projectType')}
                </label>
                <select
                  name='projectType'
                  value={formData.projectType}
                  onChange={handleInputChange}
                  aria-label={t('contact.form.projectType')}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#961d1f] transition-colors duration-200'
                >
                  <option value=''>{t('contact.form.projectTypeOptions.select')}</option>
                  <option value='residential'>{t('contact.form.projectTypeOptions.residential')}</option>
                  <option value='commercial'>{t('contact.form.projectTypeOptions.commercial')}</option>
                  <option value='mixed'>{t('contact.form.projectTypeOptions.mixed')}</option>
                  <option value='renovation'>{t('contact.form.projectTypeOptions.renovation')}</option>
                  <option value='other'>{t('contact.form.projectTypeOptions.other')}</option>
                </select>
              </div>

              <div>
                <label className='block text-sm font-medium text-[#2d2e2e] mb-2'>
                  {t('contact.form.message')} *
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#961d1f] transition-colors duration-200 resize-vertical'
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <button
                type='submit'
                className='w-full bg-[#961d1f] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#7a1619] transition-colors duration-200'
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className='text-2xl font-bold text-[#2d2e2e] mb-8'>
              {t('contact.info.title')}
            </h2>

            <div className='space-y-6 mb-8'>
              {contactInfo.map((info, index) => (
                <div key={index} className='flex items-start gap-4'>
                  <div className='p-3 bg-[#961d1f] rounded-lg'>
                    <info.icon className='text-2xl text-white' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-[#2d2e2e] mb-1'>
                      {info.title}
                    </h3>
                    <a
                      href={info.href}
                      className='text-[#961d1f] hover:text-[#7a1619] transition-colors duration-200'
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className='bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-8'>
              <div className='text-center text-gray-600'>
                <HiOutlineMap className='text-5xl mb-3 mx-auto' />
                <p className='font-medium'>{t('contact.map.title')}</p>
                <p className='text-sm'>{t('contact.map.subtitle')}</p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className='bg-[#961d1f] text-white p-6 rounded-lg'>
              <h3 className='text-xl font-bold mb-4'>
                {t('contact.whyChooseUs.title')}
              </h3>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <HiOutlineCheck className='text-white mt-0.5 flex-shrink-0' />
                  <span>{t('contact.whyChooseUs.freeConsultation')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <HiOutlineCheck className='text-white mt-0.5 flex-shrink-0' />
                  <span>{t('contact.whyChooseUs.quickResponse')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <HiOutlineCheck className='text-white mt-0.5 flex-shrink-0' />
                  <span>{t('contact.whyChooseUs.experience')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <HiOutlineCheck className='text-white mt-0.5 flex-shrink-0' />
                  <span>{t('contact.whyChooseUs.fixedPrice')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

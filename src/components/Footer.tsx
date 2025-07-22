'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';
import { assets } from '../config/assets';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projets', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Développement Résidentiel', href: '/services/residential' },
    { name: 'Développement Commercial', href: '/services/commercial' },
    { name: 'Gestion de Projet', href: '/services/project-management' },
    { name: 'Design-Construction', href: '/services/design-build' },
  ];

  const contactInfo = [
    { label: 'Téléphone', value: '450-500-0088', href: 'tel:450-500-0088' },
    {
      label: 'Email',
      value: 'info@mbgroup.ca',
      href: 'mailto:info@mbgroup.ca',
    },
    { label: 'Adresse', value: 'Montréal, Québec, Canada', href: '#' },
  ];

  return (
    <footer className='bg-[#1E1E1E] text-white'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 md:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          {/* Company Info */}
          <div className='lg:col-span-1'>
            <div className='mb-6'>
              <img
                src={assets.images.logoMB}
                alt='MB Group Logo'
                className='h-12 w-auto mb-4 filter brightness-0 invert'
              />
              <h3 className='text-xl font-bold mb-4'>MB Group</h3>
            </div>
            <p className='text-gray-300 leading-relaxed mb-6'>
              Promoteur immobilier de confiance depuis 25 ans au Canada. Nous
              développons des projets résidentiels et commerciaux durables et
              innovants.
            </p>

            {/* Social Media Links */}
            <div className='flex gap-4'>
              <a
                href='#'
                className='bg-[#961d1f] p-3 rounded-lg hover:bg-[#7a1619] transition-colors duration-200'
              >
                <FaFacebookF className='text-white text-lg' />
              </a>
              <a
                href='#'
                className='bg-[#961d1f] p-3 rounded-lg hover:bg-[#7a1619] transition-colors duration-200'
              >
                <FaInstagram className='text-white text-lg' />
              </a>
              <a
                href='#'
                className='bg-[#961d1f] p-3 rounded-lg hover:bg-[#7a1619] transition-colors duration-200'
              >
                <FaTwitter className='text-white text-lg' />
              </a>
              <a
                href='#'
                className='bg-[#961d1f] p-3 rounded-lg hover:bg-[#7a1619] transition-colors duration-200'
              >
                <FaLinkedinIn className='text-white text-lg' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-bold mb-6'>Navigation</h3>
            <ul className='space-y-3'>
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-gray-300 hover:text-[#961d1f] transition-colors duration-200'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-bold mb-6'>Nos Services</h3>
            <ul className='space-y-3'>
              {services.map(service => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className='text-gray-300 hover:text-[#961d1f] transition-colors duration-200'
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-bold mb-6'>Contact</h3>
            <ul className='space-y-4'>
              {contactInfo.map(contact => (
                <li key={contact.label}>
                  <div className='text-gray-400 text-sm mb-1'>
                    {contact.label}
                  </div>
                  <a
                    href={contact.href}
                    className='text-white hover:text-[#961d1f] transition-colors duration-200 font-medium'
                  >
                    {contact.value}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className='mt-6'>
              <button className='bg-[#961d1f] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#7a1619] transition-colors duration-200 w-full'>
                Obtenir un devis
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className='border-t border-gray-700'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <h3 className='text-xl font-bold mb-2'>Restez informé</h3>
              <p className='text-gray-300'>
                Recevez nos dernières actualités et projets immobiliers
                directement dans votre boîte mail.
              </p>
            </div>
            <div className='flex gap-3'>
              <input
                type='email'
                placeholder='Votre adresse email'
                className='flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#961d1f]'
              />
              <button className='bg-[#961d1f] text-white px-6 py-3 rounded-lg hover:bg-[#7a1619] transition-colors duration-200 font-medium'>
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-700'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='text-gray-400 text-sm'>
              © {currentYear} MB Group. Tous droits réservés.
            </div>
            <div className='flex gap-6 text-sm'>
              <a
                href='/privacy'
                className='text-gray-400 hover:text-[#961d1f] transition-colors duration-200'
              >
                Politique de confidentialité
              </a>
              <a
                href='/terms'
                className='text-gray-400 hover:text-[#961d1f] transition-colors duration-200'
              >
                Conditions d'utilisation
              </a>
              <a
                href='/cookies'
                className='text-gray-400 hover:text-[#961d1f] transition-colors duration-200'
              >
                Politique de cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { assets } from '../config/assets';
import Link from 'next/link';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, currentLanguage, changeLanguage } = useLanguage();

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    
    // Toggle body class
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('menu-open', newState);
    }
  };


  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    
    // Remove body class
    if (typeof document !== 'undefined') {
      document.body.classList.remove('menu-open');
    }
  };

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    changeLanguage(newLanguage);
  };

  return (
    <nav
      className={`bg-white/95 backdrop-blur-md relative w-full h-20 flex items-center justify-between px-6 md:px-12 shadow-sm border-b border-gray-100/50 ${className}`}
      data-name='navbar-13'
    >
      {/* Logo/Brand area */}
      <div className='flex items-center'>
        <img
          src={assets.images.logoMB}
          alt='MB Group Logo'
          className='w-30 h-30 transition-transform duration-200 hover:scale-105'
        />
      </div>

      {/* Desktop Navigation Links */}
      <div className='hidden md:flex items-center gap-8 text-[#2d2e2e] text-sm font-medium'>
        <Link
          href='/'
          className='font-semibold hover:text-[#961d1f] transition-all duration-200 px-3 py-2 rounded-md hover:bg-gray-50 relative'
        >
          {t('home', { ns: 'navigation' })}
        </Link>
        <Link
          href='/services'
          className='hover:text-[#961d1f] transition-all duration-200 px-3 py-2 rounded-md hover:bg-gray-50'
        >
          {t('services', { ns: 'navigation' })}
        </Link>
        <Link
          href='/about'
          className='hover:text-[#961d1f] transition-all duration-200 px-3 py-2 rounded-md hover:bg-gray-50'
        >
          {t('about', { ns: 'navigation' })}
        </Link>
        <Link
          href='/projects'
          className='hover:text-[#961d1f] transition-all duration-200 px-3 py-2 rounded-md hover:bg-gray-50'
        >
          {t('projects', { ns: 'navigation' })}
        </Link>
        <Link
          href='/#contact'
          className='hover:text-[#961d1f] transition-all duration-200 px-3 py-2 rounded-md hover:bg-gray-50'
        >
          {t('contact', { ns: 'navigation' })}
        </Link>
      </div>

      {/* Desktop Call Button and Language Switcher */}
      <div className='hidden md:flex items-center gap-3'>
        <button
          className='bg-[#1E1E1E] text-white font-medium text-sm px-6 py-2.5 rounded-lg hover:bg-[#333333] transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer'
          data-name='Button'
          onClick={() => (window.location.href = 'tel:+14505000088')}
        >
          {t('callUs', { ns: 'navigation' })}
        </button>

        {/* Language Switcher */}
        <button
          onClick={handleLanguageChange}
          className='relative text-[#2d2e2e] hover:text-[#961d1f] transition-all duration-200 font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50 border border-gray-200 hover:border-[#961d1f] shadow-sm hover:shadow-md flex items-center gap-2 bg-white min-w-[70px] justify-center cursor-pointer'
        >
          <span className='text-xs opacity-60'>🌐</span>
          <span className='text-sm font-semibold'>
            {currentLanguage === 'en' ? 'FR' : 'EN'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer'
        onClick={toggleMobileMenu}
        aria-label='Toggle mobile menu'
      >
        <span
          className={`block w-6 h-0.5 bg-[#2d2e2e] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#2d2e2e] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#2d2e2e] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className='md:hidden fixed inset-0 bg-opacity-50 z-[999]'
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-white backdrop-blur-md shadow-xl z-[1001] transition-all duration-300  ${isMobileMenuOpen ? 'translate-x-0 ' : '-translate-x-full'}`}
      >
        <div className='flex flex-col py-4 '>
          <Link
            href='/'
            className='px-6 py-4 text-[#2d2e2e] font-semibold hover:bg-gray-50 hover:text-[#961d1f] transition-all duration-200 border-l-3 border-transparent hover:border-[#961d1f]'
            onClick={closeMobileMenu}
          >
            {t('home', { ns: 'navigation' })}
          </Link>
          <Link
            href='/services'
            className='px-6 py-4 text-[#2d2e2e] font-medium hover:bg-gray-50 hover:text-[#961d1f] transition-all duration-200 border-l-3 border-transparent hover:border-[#961d1f]'
            onClick={closeMobileMenu}
          >
            {t('services', { ns: 'navigation' })}
          </Link>
          <Link
            href='/about'
            className='px-6 py-4 text-[#2d2e2e] font-medium hover:bg-gray-50 hover:text-[#961d1f] transition-all duration-200 border-l-3 border-transparent hover:border-[#961d1f]'
            onClick={closeMobileMenu}
          >
            {t('about', { ns: 'navigation' })}
          </Link>
          <Link
            href='/projects'
            className='px-6 py-4 text-[#2d2e2e] font-medium hover:bg-gray-50 hover:text-[#961d1f] transition-all duration-200 border-l-3 border-transparent hover:border-[#961d1f]'
            onClick={closeMobileMenu}
          >
            {t('projects', { ns: 'navigation' })}
          </Link>
          <Link
            href='/#contact'
            className='px-6 py-4 text-[#2d2e2e] font-medium hover:bg-gray-50 hover:text-[#961d1f] transition-all duration-200 border-l-3 border-transparent hover:border-[#961d1f]'
            onClick={closeMobileMenu}
          >
            {t('contact', { ns: 'navigation' })}
          </Link>

          {/* Mobile Language Switcher */}
          <div className='px-6 py-4 border-t border-gray-200'>
            <button
              onClick={() => {
                handleLanguageChange();
                closeMobileMenu();
              }}
              className='flex items-center gap-3 text-[#2d2e2e] hover:text-[#961d1f] transition-all duration-200 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 w-full'
            >
              <span className='text-lg'>🌐</span>
              <span>{currentLanguage === 'en' ? 'Français' : 'English'}</span>
            </button>
          </div>

          <div className='px-6 py-4'>
            <button
              className='w-full bg-[#1E1E1E] text-white font-medium text-sm px-6 py-3 rounded-lg hover:bg-[#333333] transition-all duration-200 shadow-sm hover:shadow-md'
              onClick={() => {
                closeMobileMenu();
                window.location.href = 'tel:+14505000088';
              }}
            >
              {t('callUs', { ns: 'navigation' })}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

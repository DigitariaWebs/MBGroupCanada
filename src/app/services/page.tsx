'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopBanner from '@/components/TopBanner';
import EntrepreneursModal from '@/components/models/EntrepreneursModal';
import ContratCoutFixeModal from '@/components/models/ContratCoutFixeModal';
import GestionProjetModal from '@/components/models/GestionProjetModal';
import GestionnaireContratModal from '@/components/models/GestionnaireContratModal';
import ProjetsCleEnMainModal from '@/components/models/ProjetsCleEnMainModal';
import LogementAbordableModal from '@/components/models/LogementAbordableModal';
import { assets } from '@/config/assets';

const ServicesPage: React.FC = () => {
  const [isEntrepreneursModalOpen, setIsEntrepreneursModalOpen] = useState(false);
  const [isGestionContratModalOpen, setIsGestionContratModalOpen] = useState(false);
  const [isGestionProjetModalOpen, setIsGestionProjetModalOpen] = useState(false);
  const [isGestionnaireContratModalOpen, setIsGestionnaireContratModalOpen] = useState(false);
  const [isContratCoutFixeModalOpen, setIsContratCoutFixeModalOpen] = useState(false);
  const [isProjetsCleEnMainModalOpen, setIsProjetsCleEnMainModalOpen] = useState(false);
  const [isLogementAbordableModalOpen, setIsLogementAbordableModalOpen] = useState(false);
  return (
    <div className='bg-white min-h-screen'>
      <TopBanner />
      <Navbar />

      {/* Main Content Container */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Hero Section */}
        <div className='pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8'>
          <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8'>
            <div className='flex-1 w-full'>
              <h1 className='text-[#010300] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-[90px] mb-4 sm:mb-6 md:mb-8'>
                NOS
                <br />
                SERVICES
              </h1>
              <p className='text-[#000000] text-sm sm:text-base md:text-[14px] font-medium leading-relaxed sm:leading-relaxed md:leading-[30px] max-w-full lg:max-w-[463px]'>
                Chez MB Group, nous offrons une gamme complète de services
                adaptés aux besoins variés de nos clients, qu&apos;ils soient
                particuliers, investisseurs, institutions ou entreprises.
              </p>
            </div>
            <div className='hidden lg:block flex-none w-full lg:w-auto'>
              <div className='flex items-center justify-center lg:justify-end'>
                <div className='rotate-90 lg:rotate-90'>
                  <div className='text-[#000000] text-lg sm:text-xl md:text-2xl lg:text-[26px] font-semibold tracking-[1.3px]'>
                    01 <span className='text-[#c9cece]'>/ 06</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Slider Section */}
        <div className='py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto'>
            {/* Service 1 - Gestion de Contrat */}
            <button
              onClick={() => setIsGestionnaireContratModalOpen(true)}
              className='relative p-6 h-[353px] flex flex-col justify-end overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition-transform rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
            >
              <div className='absolute inset-0'>
                <img
                  src={assets.images.contractManagement}
                  alt='Gestion de Contrat'
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
              </div>
              <div className='relative z-10 mb-2 text-white'>
                <p className='text-white text-[11px] font-medium mb-4'>
                  Plan contrat
                </p>
                <h3 className='text-white text-[28px] font-extrabold leading-normal tracking-[0.56px] mb-4'>
                  Gestion de
                  <br />
                  Contrat
                </h3>
                <div className='border-b border-white mb-4'></div>
                <p className='text-white text-[11px] font-medium'>
                  Plus de détails
                </p>
              </div>
            </button>

            {/* Service 2 - Gestion de Projets */}
            <button
              onClick={() => setIsGestionProjetModalOpen(true)}
              className='relative p-6 h-[353px] flex flex-col justify-end overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition-transform rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
            >
              <div className='absolute inset-0'>
                <img
                  src={assets.images.projectManagement}
                  alt='Gestion de Projets'
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
              </div>
              <div className='relative z-10 mb-2 text-white'>
                <p className='text-white text-[11px] font-medium mb-4'>
                  Solutions clé
                </p>
                <h3 className='text-white text-[28px] font-extrabold leading-normal tracking-[0.56px] mb-4'>
                  Gestion de
                  <br />
                  Projets
                </h3>
                <div className='border-b border-white mb-4'></div>
                <p className='text-white text-[11px] font-medium'>
                  Plus de détails
                </p>
              </div>
            </button>

            {/* Service 3 - Projets clé En main */}
            <button
              onClick={() => setIsProjetsCleEnMainModalOpen(true)}
              className='relative p-6 h-[353px] flex flex-col justify-end overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition-transform rounded-lg'
            >
              <div className='absolute inset-0'>
                <img
                  src={assets.images.turnkeyProjects}
                  alt='Projets clé En main'
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
              </div>
              <div className='relative z-10 mb-2 text-white'>
                <p className='text-white text-[11px] font-medium mb-4 tracking-[-0.22px]'>
                  Délivrer
                </p>
                <h3 className='text-white text-[28px] font-extrabold leading-[36px] tracking-[0.56px] mb-4'>
                  Projets clé
                  <br />
                  En main
                </h3>
                <div className='border-b border-white mb-4'></div>
                <p className='text-white text-[11px] font-medium'>
                  Plus de détails
                </p>
              </div>
            </button>

            {/* Service 4 - Logement Abordable */}
            <button
              onClick={() => setIsLogementAbordableModalOpen(true)}
              className='relative p-6 h-[353px] flex flex-col justify-end overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition-transform rounded-lg'
            >
              <div className='absolute inset-0'>
                <img
                  src={assets.images.affordableHousing}
                  alt='Logement Abordable'
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
              </div>
              <div className='relative z-10 mb-2 text-white'>
                <p className='text-white text-[11px] font-medium mb-4 tracking-[-0.22px]'>
                  SCHL
                </p>
                <h3 className='text-white text-[28px] font-extrabold leading-[35px] tracking-[0.56px] mb-4'>
                  Logement
                  <br />
                  Abordable
                </h3>
                <div className='border-b border-white mb-4'></div>
                <p className='text-white text-[11px] font-medium'>
                  Plus de détails
                </p>
              </div>
            </button>

            {/* Service 5 - Contrat cout Fixe */}
            <button
              onClick={() => setIsContratCoutFixeModalOpen(true)}
              className='relative p-6 h-[353px] flex flex-col justify-end overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition-transform rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
            >
              <div className='absolute inset-0'>
                <img
                  src={assets.images.fixedCostContract}
                  alt='Contrat cout Fixe'
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
              </div>
              <div className='relative z-10 mb-2 text-white'>
                <p className='text-white text-[11px] font-medium mb-4 tracking-[-0.22px]'>
                  Prix
                </p>
                <h3 className='text-white text-[28px] font-extrabold leading-[35px] tracking-[0.56px] mb-4'>
                  Contrat cout
                  <br />
                  Fixe
                </h3>
                <div className='border-b border-white mb-4'></div>
                <p className='text-white text-[11px] font-medium'>
                  Plus de détails
                </p>
              </div>
            </button>

            {/* Service 6 - Entrepreneurs et Promoteurs */}
            <button
              onClick={() => setIsEntrepreneursModalOpen(true)}
              className='relative p-6 h-[353px] flex flex-col justify-end overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition-transform rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
            >
              <div className='absolute inset-0'>
                <img
                  src={assets.images.EntrepreneursetPromoteurs}
                  alt='Entrepreneurset promoteurs'
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
              </div>
              <div className='relative z-10 mb-2 text-white'>
                <p className='text-white text-[11px] font-medium mb-4'>
                  Nouveaux horizons
                </p>
                <h3 className='text-white text-[24px] font-extrabold leading-tight tracking-[0.48px] mb-4'>
                  Entrepreneurs et
                  <br />
                  Promoteurs
                </h3>
                <div className='border-b border-white mb-4'></div>
                <p className='text-white text-[11px] font-medium'>
                  Plus de détails
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Development Immobilier Section */}
        <div className='py-16'>
          <div className='mb-8 grid grid-cols-2 gap-12 items-center'>
            <div>
              <p className='text-[#e22d2e] text-[18px] font-semibold tracking-[6px] uppercase mb-4'>
                INVESTISSEMENT & PLACEMENT
              </p>
              <h2 className='text-[#222222] text-[52px] font-bold leading-[65px] tracking-[5px] uppercase mb-8'>
                Développement immobilier
              </h2>
              <p className='text-[#000000] text-[18px] font-normal leading-[32px]'>
                Pour que notre investissement immobilier soit performant tout en
                demeurant logique et sécuritaire, MB Groupe Canada s&apos;assure
                de la gestion de notre placement immobilier. Sachant celui-ci
                entre des mains expertes, nous bénéficierons de la tranquillité
                d&apos;esprit et de l&apos;assurance que tout sera mis en œuvre
                afin de maximiser notre rentabilité. MB Groupe Canada, regroupe en
                effet l&apos;ensemble des services que requièrent le maintien et
                la bonne gestion d&apos;un immeuble.
              </p>
            </div>
            <div className='relative h-[400px] rounded-lg overflow-hidden'>
              <img
                src={assets.images.realEstateDevelopment}
                alt='Développement immobilier'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0  bg-opacity-20'></div>
            </div>
          </div>

          {/* Service Categories */}
          <div className='grid grid-cols-3 gap-8'>
            {/* Gestion administrative */}
            <div className='space-y-6 relative'>
              <div className='relative border border-[#222222] rounded-sm p-6 h-[50px] flex items-center overflow-hidden'>
                <div className='absolute inset-0 opacity-10'>
                  <img
                    src={assets.images.administrativeManagement}
                    alt='Gestion administrative'
                    className='w-full h-full object-cover'
                  />
                </div>
                <h3 className='relative z-10 text-[#222222] text-[18px] font-extrabold tracking-[0.5px]'>
                  Gestion administrative
                </h3>
              </div>
              <ul className='space-y-4 text-[#222222] text-[20px] font-semibold tracking-[0.5px]'>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Comptabilité
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Fiscalité
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Assurances
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Analyses financières
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Contestation d&apos;évaluation
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Budget d&apos;opération
                </li>
              </ul>
            </div>

            {/* Gestion physique */}
            <div className='space-y-6 relative'>
              <div className='relative border border-[#222222] rounded-sm p-6 h-[50px] flex items-center overflow-hidden'>
                <div className='absolute inset-0 opacity-10'>
                  <img
                    src={assets.images.physicalManagement}
                    alt='Gestion physique'
                    className='w-full h-full object-cover'
                  />
                </div>
                <h3 className='relative z-10 text-[#222222] text-[18px] font-extrabold tracking-[0.5px]'>
                  Gestion physique
                </h3>
              </div>
              <ul className='space-y-4 text-[#222222] text-[20px] font-semibold tracking-[0.5px]'>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Inspection
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Services de sécurité
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Gestion des stationnements
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Entretien préventif et curatif
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Le site
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Conception
                </li>
              </ul>
            </div>

            {/* Marketing */}
            <div className='space-y-6 relative'>
              <div className='relative border border-[#222222] rounded-sm p-6 h-[50px] flex items-center overflow-hidden'>
                <div className='absolute inset-0 opacity-10'>
                  <img
                    src={assets.images.marketing}
                    alt='Marketing'
                    className='w-full h-full object-cover'
                  />
                </div>
                <h3 className='relative z-10 text-[#222222] text-[18px] font-extrabold tracking-[0.5px]'>
                  Marketing
                </h3>
              </div>
              <ul className='space-y-4 text-[#222222] text-[20px] font-semibold tracking-[0.5px]'>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Analyse stratégique
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Publicité
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Mise en marché
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  Conception graphique et affichage
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  contenu digital
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-[#222222] rounded-full mr-4'></span>
                  rédaction web
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Add the Entrepreneurs Modal */}
      <EntrepreneursModal 
        isOpen={isEntrepreneursModalOpen}
        onClose={() => setIsEntrepreneursModalOpen(false)}
      />

      {/* Add the Gestion Contrat Modal */}
      <ContratCoutFixeModal 
        isOpen={isContratCoutFixeModalOpen}
        onClose={() => setIsContratCoutFixeModalOpen(false)}
      />

      {/* Add the Gestion Projet Modal */}
      <GestionProjetModal 
        isOpen={isGestionProjetModalOpen}
        onClose={() => setIsGestionProjetModalOpen(false)}
      />

      {/* Add the Gestionnaire Contrat Modal */}
      <GestionnaireContratModal 
        isOpen={isGestionnaireContratModalOpen}
        onClose={() => setIsGestionnaireContratModalOpen(false)}
      />

      {/* Add the Projets Cle En Main Modal */}
      <ProjetsCleEnMainModal
        isOpen={isProjetsCleEnMainModalOpen}
        onClose={() => setIsProjetsCleEnMainModalOpen(false)}
      />

      {/* Add the Logement Abordable Modal */}
      <LogementAbordableModal
        isOpen={isLogementAbordableModalOpen}
        onClose={() => setIsLogementAbordableModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default ServicesPage;

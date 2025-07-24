'use client';

import React, { useState } from 'react';
import {
  Play,
  Upload,
  Mail,
  Phone,
  User,
  MessageSquare,
  FileText,
} from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopBanner from '@/components/TopBanner';

const ProjectsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    request: '',
    name: '',
    email: '',
    phone: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [consent, setConsent] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        setSubmitStatus({
          type: 'error',
          message: 'Le fichier ne doit pas dépasser 10MB',
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!formData.request || !formData.name || !formData.email || !formData.phone || !formData.details) {
      setSubmitStatus({
        type: 'error',
        message: 'Veuillez remplir tous les champs obligatoires',
      });
      return;
    }

    // Check if consent is given
    if (!consent) {
      setSubmitStatus({
        type: 'error',
        message: 'Veuillez accepter les conditions',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append('request', formData.request);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('details', formData.details);
      
      if (selectedFile) {
        formDataToSend.append('file', selectedFile);
      }

      const response = await fetch('/api/contactProject', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès',
      });
      
      // Clear form
      setFormData({
        request: '',
        name: '',
        email: '',
        phone: '',
        details: '',
      });
      setConsent(false);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Une erreur est survenue',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-white min-h-screen'>
      <TopBanner />
      <Navbar />

      {/* Main Content Container */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='pt-16 pb-8'>
          <p className='text-[#e22d2e] text-lg font-semibold tracking-[6px] uppercase mb-4'>
            Reconstruire pour l&apos;humanité
          </p>
          <h1 className='text-[#222222] text-4xl lg:text-5xl font-bold tracking-[5px] leading-tight'>
            Projets – Canada
          </h1>
        </div>

        {/* Hero Video Section */}
        <div className='relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-8'>
          <video
            className='w-full h-full object-cover'
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src='https://videos.pexels.com/video-files/4770380/4770380-hd_1920_1080_30fps.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>

          {/* Conseil MB Badge */}
          <div className='absolute top-8 right-8'>
            <span className='px-4 py-2 text-sm text-white border border-white/30 rounded'>
              Conseil MB
            </span>
          </div>

          {/* NOS RÉALISATIONS Badge */}
          <div className='absolute bottom-8 left-8'>
            <div className='bg-[#e22d2e] px-6 py-3 rounded'>
              <span className='text-white font-bold tracking-wider uppercase text-lg'>
                Nos Réalisations
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div className='text-center mb-16'>
          <h2 className='text-[#222222] text-2xl lg:text-3xl font-semibold'>
            L&apos;innovation et la qualité au cœur de chaque réalisation.
          </h2>
        </div>

        {/* Projects Section */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
          {/* Project 1 - RACINE LAVAL */}
          <div className='space-y-6'>
            <div className='text-6xl font-bold text-[#222222] mb-4'>01</div>
            <div className='text-2xl text-[#232323] font-normal mb-6'>
              RÉSIDENTIEL
            </div>
            <div className='h-[350px] rounded overflow-hidden mb-6'>
              <Image
                src='https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                alt='RACINE LAVAL'
                width={456}
                height={354}
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
              />
            </div>
            <h3 className='text-3xl text-[#232323] font-normal mb-4'>
              RACINE LAVAL
            </h3>
            <p className='text-[#7d7d7d] text-lg leading-relaxed mb-6'>
              Luxueux et abordable. Style de vie urbain. Racine Laval est comme
              un havre de paix au cœur de Laval. L&apos;édifice présente une
              conception contemporaine unique...
            </p>
            <button className='bg-[#222222] text-white px-8 py-4 rounded cursor-pointer'>
              Voir Détails
            </button>
          </div>

          {/* Project 2 - RACINE OTTAWA */}
          <div className='space-y-6'>
            <div className='text-6xl font-bold text-[#222222] mb-4'>02</div>
            <div className='text-2xl text-[#232323] font-normal mb-6'>
              INDUSTRIEL
            </div>
            <div className='h-[350px] rounded overflow-hidden mb-6'>
              <Image
                src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                alt='RACINE OTTAWA'
                width={456}
                height={354}
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
              />
            </div>
            <h3 className='text-3xl text-[#232323] font-normal mb-4'>
              RACINE OTTAWA
            </h3>
            <p className='text-[#7d7d7d] text-lg leading-relaxed mb-6'>
              from remodeling and new home construction to home studios and shed
              structures. We are passionate about helping homeowners create the
            </p>
            <button className='bg-[#222222] text-white px-8 py-4 rounded cursor-pointer'>
              Voir Détails
            </button>
          </div>

          {/* Project 3 - RACINE VAUDREUIL */}
          <div className='space-y-6'>
            <div className='text-6xl font-bold text-[#222222] mb-4'>03</div>
            <div className='text-2xl text-[#232323] font-normal mb-6'>
              LOGEMENT
            </div>
            <div className='h-[350px] rounded overflow-hidden mb-6'>
              <Image
                src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                alt='RACINE VAUDREUIL'
                width={433}
                height={354}
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
              />
            </div>
            <h3 className='text-3xl text-[#232323] font-normal mb-4'>
              RACINE VAUDREUIL
            </h3>
            <p className='text-[#7d7d7d] text-lg leading-relaxed mb-6'>
              from remodeling and new home construction to home studios and shed
              structures. We are passionate about helping homeowners create the
            </p>
            <button className='bg-[#222222] text-white px-8 py-4 rounded cursor-pointer'>
              Voir Détails
            </button>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 py-16'>
          {/* Left Side - Information */}
          <div>
            <h2 className='text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight'>
              Obtenez une soumission détaillée via le formulaire de contact.
            </h2>
            <p className='text-black text-lg leading-relaxed'>
              Nous développons des solutions sur mesure pour chaque projet afin
              de respecter à la fois les besoins réels et les contraintes
              budgétaires.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Request Field */}
              <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                  <MessageSquare size={20} className='text-[#383c3e]' />
                  <input
                    type='text'
                    name='request'
                    placeholder='Demande'
                    value={formData.request}
                    onChange={handleInputChange}
                    required
                    className='flex-1 py-3 border-b border-[#737b7d] bg-transparent text-[#383c3e] placeholder-[#383c3e] focus:outline-none focus:border-[#e22d2e]'
                  />
                </div>
              </div>

              {/* Name Field */}
              <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                  <User size={20} className='text-[#8e8e8e]' />
                  <input
                    type='text'
                    name='name'
                    placeholder='Nom & prénom'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='flex-1 py-3 border-b border-[#737b7d] bg-transparent text-[#383c3e] placeholder-[#8e8e8e] focus:outline-none focus:border-[#e22d2e]'
                  />
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex items-center space-x-2'>
                  <Mail size={20} className='text-[#8e8e8e]' />
                  <input
                    type='email'
                    name='email'
                    placeholder='Courriel'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='flex-1 py-3 border-b border-[#737b7d] bg-transparent text-[#383c3e] placeholder-[#8e8e8e] focus:outline-none focus:border-[#e22d2e]'
                  />
                </div>
                <div className='flex items-center space-x-2'>
                  <Phone size={20} className='text-[#8e8e8e]' />
                  <input
                    type='tel'
                    name='phone'
                    placeholder='Téléphone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className='flex-1 py-3 border-b border-[#737b7d] bg-transparent text-[#383c3e] placeholder-[#8e8e8e] focus:outline-none focus:border-[#e22d2e]'
                  />
                </div>
              </div>

              {/* Details Field */}
              <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                  <FileText size={20} className='text-[#8e8e8e]' />
                  <input
                    type='text'
                    name='details'
                    placeholder='Précisions'
                    value={formData.details}
                    onChange={handleInputChange}
                    required
                    className='flex-1 py-3 border-b border-[#737b7d] bg-transparent text-[#383c3e] placeholder-[#8e8e8e] focus:outline-none focus:border-[#e22d2e]'
                  />
                </div>
              </div>

              {/* File Upload */}
              <div 
                className='border-2 border-dashed border-[#8e8e8e] rounded p-8 text-center cursor-pointer hover:border-[#e22d2e] transition-colors'
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                <div className='flex flex-col items-center space-y-2'>
                  <Upload size={24} className='text-[#8e8e8e]' />
                  <span className='text-[#8e8e8e] text-sm'>
                    {selectedFile ? selectedFile.name : 'Télécharger un fichier'}
                  </span>
                  <input
                    id="file-upload"
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                  />
                </div>
              </div>
              <p className='text-[#8e8e8e] text-xs'>
                Formats acceptés: PDF, DOC, DOCX, TXT, JPG, PNG. Taille maximale: 10MB
              </p>

              {/* Checkbox */}
              <div className='flex items-start space-x-3'>
                <input
                  type='checkbox'
                  id='consent'
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className='mt-1 w-4 h-4 border border-[#383c3e] rounded-sm'
                  required
                />
                <label htmlFor='consent' className='text-[#383c3e] text-sm'>
                  En soumettant ce formulaire, j&apos;accepte que les
                  informations saisies soient exploitées dans le cadre strict de
                  ma demande*
                </label>
              </div>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-md ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-[#e22d2e] text-white py-4 rounded font-bold text-sm uppercase tracking-wider hover:bg-[#d41d1f] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer'
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;

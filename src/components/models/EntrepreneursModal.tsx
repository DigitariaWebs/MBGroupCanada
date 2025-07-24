'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { assets } from '@/config/assets';

interface EntrepreneursModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EntrepreneursModal: React.FC<EntrepreneursModalProps> = ({ isOpen, onClose }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Background overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 transition-opacity" />
        </Transition.Child>

        {/* Modal panel */}
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-6xl max-h-[90vh] overflow-hidden">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 hover:bg-white focus:outline-none"
                >
                  <XMarkIcon className="h-6 w-6 text-gray-800" />
                </button>

                {/* Main Content Layout */}
                <div className="flex flex-col md:flex-row h-full">
                  {/* Left Side - Image */}
                  <div className="md:w-1/3 relative">
                    <div className="relative h-64 md:h-full min-h-[400px]">
                      <img
                        src={assets.images.EntrepreneursetPromoteurs}
                        alt="Entrepreneurs et Promoteurs"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <h2 className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl font-bold">
                        ENTREPRENEURS ET<br />PROMOTEURS
                      </h2>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="md:w-2/3 p-6 overflow-y-auto max-h-[90vh]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                      {/* Left Column - Description */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p>La société MB Groupe Canada est un promoteur immobilier résidentiel et commercial au Canada</p>
                          <p>Depuis notre création, notre société a acquis une solide expérience et une réputation en tant que promoteur/entrepreneur en construction résidentielle et commerciale. Nous prenons en main des projets de toute envergure. Faire affaire avec notre société, c'est la garantie d'un projet clé en main. Nous sommes capables de soumissionner plusieurs professionnels afin de respecter le budget préétabli.</p>
                          <p>Nous proposons nos services pour des projets immobiliers d'envergure, gérés par un interlocuteur unique. Notre société regroupe l'ensemble des expertises et compétences nécessaires pour la conception, la réalisation et l'achèvement de votre projet immobilier.</p>
                          <p>Proactifs et à l'écoute, nous développons et investissons avec nos partenaires professionnels (architectes, ingénieurs...). Nous appliquons avec rigueur les normes du Code National du Bâtiment qui sont en vigueur, spécialement les nouvelles normes sismiques.</p>
                        </div>
                      </div>

                      {/* Right Column - All other sections */}
                      <div className="space-y-6">
                        {/* Expertise */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Métiers / Domaines d'expertise</h3>
                          <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
                            <li>Promoteur / entrepreneur et développeur en immobilier</li>
                            <li>Gestionnaire de projets immobiliers</li>
                            <li>Gestionnaire de contrats</li>
                            <li>Gestionnaire de projets multi‑logement et commerciaux</li>
                          </ul>
                        </div>
                        
                        {/* Values */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Nos engagements / Valeurs ajoutées</h3>
                          <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
                            <li>Service sur mesure</li>
                            <li>Partenaires fiables</li>
                            <li>Professionnalisme</li>
                            <li>Rigueur</li>
                          </ul>
                        </div>

                        {/* Service areas */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Zones desservies</h3>
                          <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
                            <li>Québec</li>
                            <li>Ontario</li>
                            <li>Canada en général pour les projets résidentiels et commerciaux</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EntrepreneursModal;

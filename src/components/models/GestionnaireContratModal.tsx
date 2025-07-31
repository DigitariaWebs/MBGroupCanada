'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { assets } from '@/config/assets';

interface GestionnaireContratModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GestionnaireContratModal: React.FC<GestionnaireContratModalProps> = ({ isOpen, onClose }) => {
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
          <div className="flex min-h-full items-end justify-center p-2 text-center sm:items-center sm:p-4 lg:p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-4xl lg:max-w-6xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 rounded-full bg-white/80 p-1.5 sm:p-2 hover:bg-white focus:outline-none"
                >
                  <XMarkIcon className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800" />
                </button>

                {/* Main Content Layout */}
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Left Side - Image */}
                  <div className="lg:w-1/3 relative">
                    <div className="relative h-48 sm:h-64 lg:h-full min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]">
                      <img
                        src={assets.images.contractManagement}
                        alt="Gestionnaire de Contrat Immobilier"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <h2 className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold leading-tight">
                        GESTIONNAIRE DE<br />CONTRAT IMMOBILIER
                      </h2>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="lg:w-2/3 p-3 sm:p-4 lg:p-6 overflow-y-auto max-h-[60vh] sm:max-h-[70vh] lg:max-h-[90vh]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 h-full">
                      {/* Left Column */}
                      <div className="space-y-4 sm:space-y-6">
                        {/* Description */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Description</h3>
                          <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                            <p>L'entreprise MB Groupe Canada agit en tant que gestionnaire de contrat immobilier au Canada. Elle accompagne les clients depuis la sélection de l'emplacement jusqu'à la rentabilité du bâtiment, avec rigueur et minutie pour vérifier la faisabilité et le potentiel de réussite du projet.</p>
                          </div>
                        </div>

                        {/* Processus et prise en charge */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Processus et prise en charge</h3>
                          <ul className="list-disc pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                            <li>Phase préconstruction : services généraux, passation des marchés, études conceptuelles, esquisse du projet, attribution du contrat de construction</li>
                            <li>Phase construction : évaluation de la constructibilité, coordination entre sous‑traitants</li>
                            <li>Collaboration : association étroite avec architectes, ingénieurs et autres spécialistes du domaine immobilier</li>
                          </ul>
                          <p className="mt-2 text-xs sm:text-sm text-gray-700">Nous travaillons en étroite collaboration avec les différents corps de métier de la construction afin d'assurer la réussite de votre projet.</p>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4 sm:space-y-6">
                        {/* Métiers */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Métiers / Domaines d'expertise</h3>
                          <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm text-gray-700">
                            <li>Promoteur / entrepreneur et développeur en immobilier</li>
                            <li>Gestionnaire de projets immobiliers</li>
                            <li>Gestionnaire de contrats</li>
                            <li>Gestionnaire de projets multi‑logement et commerciaux</li>
                          </ul>
                        </div>

                        {/* Gestionnaire de contrat à coût fixe */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Gestionnaire de contrat à coût fixe</h3>
                          <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                            <p>La société propose un modèle de contrat à coût fixe, avec prise en charge complète de la construction résidentielle ou commerciale, de la conception à la commercialisation ou mise en location. L'objectif est d'optimiser la valeur du projet.</p>
                            <p>Nous veillons à optimiser la valeur de votre projet.</p>
                          </div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-3 sm:mt-4">Nos engagements / Valeurs ajoutées</h3>
                          <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm text-gray-700">
                            <li>Service sur mesure</li>
                            <li>Partenaires fiables</li>
                            <li>Professionnalisme</li>
                            <li>Rigueur</li>
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

export default GestionnaireContratModal;

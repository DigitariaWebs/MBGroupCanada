'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { assets } from '@/config/assets';

interface GestionProjetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GestionProjetModal: React.FC<GestionProjetModalProps> = ({ isOpen, onClose }) => {
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
                        src={assets.images.projectManagement}
                        alt="Gestion de Projet Immobilier"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <h2 className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl font-bold">
                        GESTION DE<br />PROJET IMMOBILIER
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
                          <p>La firme MB Groupe Canada est le garant de la réussite de vos projets immobiliers au Canada, avec un accompagnement sur mesure.</p>
                          <p>Profitez de nos services de gestion de projets immobiliers en mode clé en main. Nous privilégions la forme contractuelle de design‑construction à forfait pour répondre précisément à vos exigences.</p>
                          <p>Nous supervisons les travaux et surveillons les sous‑traitants pour vérifier la conformité des livrables, des matériaux aux plans et des soumissions transmises par notre gestionnaire des travaux de construction.</p>
                          <p>Nous intervenons notamment dans la construction de bâtiments en acier, bois, béton ou structures mixtes. Nos services sont disponibles partout au Canada (Québec, Ontario…).</p>
                          <p>Nous sommes spécialisés dans la gestion de projet immobilier.</p>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Nos engagements / Valeurs ajoutées</h3>
                          <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
                            <li>Service sur mesure</li>
                            <li>Partenaires fiables</li>
                            <li>Professionnalisme</li>
                            <li>Rigueur</li>
                          </ul>
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
                        
                        {/* Expertise and Approach */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Expertise et approche</h3>
                          <div className="space-y-2 text-sm text-gray-700">
                            <p>Grâce à notre savoir‑faire et expertise, de nombreux projets d’envergure ont été menés avec succès au fil des années. Avant la phase technique, nous réunissons architectes, ingénieurs et autres professionnels pour maximiser votre budget d’investissement et respecter les délais.</p>
                            <p>Nous sommes rigoureux quant au respect du code d’éthique, administratif, technique et financier tout au long du projet.</p>
                            <p>Nous pouvons réaliser des projets de toute envergure.</p>
                          </div>
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

export default GestionProjetModal;

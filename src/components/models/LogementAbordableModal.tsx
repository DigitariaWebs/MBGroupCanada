'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { assets } from '@/config/assets';

interface LogementAbordableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LogementAbordableModal: React.FC<LogementAbordableModalProps> = ({ isOpen, onClose }) => {
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
                        src={assets.images.affordableHousing}
                        alt="Logement Abordable"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <h2 className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl font-bold">
                        PROJETS DE<br />LOGEMENT ABORDABLE
                      </h2>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="md:w-2/3 p-6 overflow-y-auto max-h-[90vh]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                      {/* Left Column */}
                      <div className="space-y-6">
                        {/* Description */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                          <div className="space-y-2 text-sm text-gray-700">
                            <p>Nous prenons en main la gestion de la construction de logements haut standing et abordables, selon les directives de la SCHL (Société canadienne d’hypothèques et de logement). Ces logements sont destinés à la location à faible coût.</p>
                            <p>MB Groupe Canada offre un service clé en main allant de la conception du projet jusqu’à la mise en location : un modèle « design-construction à forfait » qui accompagne le client de A à Z.</p>
                            <p>Nous vous assurons un accompagnement sur mesure et complet.</p>
                          </div>
                        </div>

                        {/* Métiers */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Métiers / Domaines d'expertise</h3>
                          <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
                            <li>Promoteur/entrepreneur et développeur en immobilier</li>
                            <li>Gestionnaire de projets immobiliers</li>
                            <li>Gestionnaire de contrats</li>
                            <li>Gestionnaire de projets multi‑logements et commerciaux</li>
                          </ul>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        {/* Nos engagements */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Nos engagements / Valeurs ajoutées</h3>
                          <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
                            <li>Service sur mesure</li>
                            <li>Partenaires fiables</li>
                            <li>Professionnalisme</li>
                            <li>Rigueur</li>
                          </ul>
                        </div>

                        {/* Détail de l’approche */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Détail de l’approche</h3>
                          <div className="space-y-2 text-sm text-gray-700">
                            <p>Construction de logements haut standing et abordables conformes aux normes du Code National du Bâtiment, y compris les nouvelles exigences sismiques et environnementales.</p>
                            <p>Optimisation du budget d’investissement pour maximiser la rentabilité du projet de logement multi-logements.</p>
                            <p>MB Groupe Canada maximise et optimise le budget d’investissement.</p>
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

export default LogementAbordableModal;

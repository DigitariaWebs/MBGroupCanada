'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { assets } from '@/config/assets';

interface ContratCoutFixeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContratCoutFixeModal: React.FC<ContratCoutFixeModalProps> = ({ isOpen, onClose }) => {
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
                        src={assets.images.fixedCostContract}
                        alt="Contrat cout Fixe"
                        className="w-full h-full object-cover"
                      />
                      <h2 className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl font-bold">
                        CONTRAT COUT<br />FIXE
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
                          <p>Pour la gestion de contrat immobilier, adressez-vous à MB Groupe Canada, promoteur‑entrepreneur en construction de bâtiments résidentiels et commerciaux au Canada.</p>
                          <p>Nous sommes une société de promotion immobilière active au Canada, desservant une clientèle résidentielle et commerciale principalement au Québec et en Ontario.</p>
                          <p>Confiez-nous l'intégralité de votre projet de construction. Nous sélectionnons nos partenaires via un processus de soumission rigoureux, en tenant compte des aspects légaux administratifs et techniques du projet.</p>
                          <p>Nous proposons des solutions ingénieuses pour tous contrats immobiliers.</p>
                        </div>

                        {/* Expertise */}
                        <div className="space-y-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Métiers / Domaines d'expertise</h3>
                          <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
                            <li>Promoteur / entrepreneur et développeur en immobilier</li>
                            <li>Gestionnaire de projets immobiliers</li>
                            <li>Gestionnaire de contrats</li>
                            <li>Gestionnaire de projets multi‑logement et commerciaux</li>
                          </ul>
                        </div>
                      </div>

                      {/* Right Column - All other sections */}
                      <div className="space-y-6">
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

                        {/* Construction clé en main */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Construction clé en main à prix fixe</h3>
                          <div className="space-y-2 text-sm text-gray-700">
                            <p>Optez pour la construction clé en main, solution optimale pour maximiser la rentabilité de votre projet.</p>
                            <p>Votre projet est pensé pour assurer la meilleure rentabilité possible et garantir la pérennité de votre investissement.</p>
                            <p className="font-medium">Nous veillons à respecter nos engagements contractuels :</p>
                            <ul className="list-disc pl-4 space-y-1">
                              <li>Garantie du prix</li>
                              <li>Garantie du délai de livraison</li>
                              <li>Garantie de la qualité de réalisation</li>
                            </ul>
                            <p>Grâce à notre solide expertise en matière de contrat immobilier, nous assurons le contrôle de la qualité des réalisations.</p>
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

export default ContratCoutFixeModal;

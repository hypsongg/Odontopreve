import React from 'react';
import { X } from 'lucide-react';

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const plans = [
  { name: 'Página Inicial', path: '/home' },
  { name: 'Dental Júnior', path: '/dental-junior' },
  { name: 'Bem Estar', path: '/bem-estar' },
  { name: 'Bem Estar White', path: '/bem-estar-white' },
  { name: 'Bem Estar Pro', path: '/bem-estar-pro' },
  { name: 'Bem Estar Orto', path: '/bem-estar-orto' },
  { name: 'Bem Estar Orto White', path: '/bem-estar-orto-white' }
];

const NavMenu: React.FC<NavMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePlanClick = (planPath: string) => {
    // Map paths to component names in main.tsx
    const pathToComponent: Record<string, string> = {
      '/home': 'Home',
      '/dental-junior': 'DentalJunior',
      '/bem-estar': 'BemEstar',
      '/bem-estar-white': 'BemEstarWhite',
      '/bem-estar-pro': 'BemEstarPro',
      '/bem-estar-orto': 'BemEstarOrto',
      '/bem-estar-orto-white': 'BemEstarOrtoWhite'
    };
    
    // Store the selected component in localStorage
    localStorage.setItem('selectedPlan', pathToComponent[planPath]);
    
    // Reload the page to apply the change
    window.location.reload();
    
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-80 h-full shadow-lg p-6 animate-slide-in">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#0066FF]">Nossos Planos</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        <ul className="space-y-4">
          {plans.map((plan, index) => (
            <li key={index}>
              <button
                onClick={() => handlePlanClick(plan.path)}
                className="w-full text-left py-3 px-4 rounded-md hover:bg-blue-50 text-[#0066FF] font-medium transition-colors"
              >
                {plan.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
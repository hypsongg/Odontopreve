import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import DentalJunior from './DentalJunior.tsx';
import BemEstar from './BemEstar.tsx';
import BemEstarWhite from './BemEstarWhite.tsx';
import BemEstarPro from './BemEstarPro.tsx';
import BemEstarOrto from './BemEstarOrto.tsx';
import BemEstarOrtoWhite from './BemEstarOrtoWhite.tsx';
import Home from './Home.tsx';
import './index.css';

const App = () => {
  // Default to 'Home' instead of checking localStorage first
  const [selectedPlan, setSelectedPlan] = useState('Home');

  useEffect(() => {
    // Check if there's a selected plan in localStorage
    const storedPlan = localStorage.getItem('selectedPlan');
    if (storedPlan) {
      setSelectedPlan(storedPlan);
    }
  }, []);

  // Render the selected plan component
  const renderPlan = () => {
    switch (selectedPlan) {
      case 'DentalJunior':
        return <DentalJunior />;
      case 'BemEstar':
        return <BemEstar />;
      case 'BemEstarWhite':
        return <BemEstarWhite />;
      case 'BemEstarPro':
        return <BemEstarPro />;
      case 'BemEstarOrto':
        return <BemEstarOrto />;
      case 'BemEstarOrtoWhite':
        return <BemEstarOrtoWhite />;
      case 'Home':
      default:
        return <Home />;
    }
  };

  return (
    <StrictMode>
      {renderPlan()}
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
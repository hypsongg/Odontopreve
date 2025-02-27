import React, { useState } from 'react';

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const message = encodeURIComponent("Gostaria de mais informações sobre os planos.");
  const phoneNumber = "5521988478160";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        {showPopup && (
          <div className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-lg w-64 transform transition-all">
            <p className="text-gray-700 text-sm mb-4">Clique para falar com um consultor no WhatsApp</p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg inline-block hover:bg-green-600 transition-colors w-full text-center"
            >
              Enviar mensagem
            </a>
          </div>
        )}
        <button
          onClick={() => setShowPopup(!showPopup)}
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition-colors"
        >
          <img 
            src="https://img.icons8.com/?size=512&id=16713&format=png"
            alt="WhatsApp"
            className="w-10 h-10"
          />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
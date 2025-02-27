import React, { useState, useRef } from 'react';
import { Heart, MapPin, Timer, Diamond, Menu, Phone, Stethoscope, SmartphoneIcon, Star, MessageCircle, ChevronDown, Users, Building2, Award, Smile, Mail, AlignJustify } from 'lucide-react';
import NavMenu from './components/NavMenu';

// WhatsApp button component
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

function Home() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const plansRef = useRef<HTMLDivElement>(null);
  const businessPlansRef = useRef<HTMLDivElement>(null);

  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlanClick = (planName: string) => {
    // Store the selected plan in localStorage
    localStorage.setItem('selectedPlan', planName);
    
    // Reload the page to apply the change
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="text-white w-8 h-8" />
              <span className="text-white text-2xl ml-2 font-semibold">odontoprev</span>
            </div>
            <button className="text-white" onClick={() => setIsMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <section className="relative">
        <div className="relative h-[500px]">
          <img 
            src="https://i.imgur.com/mNDN2dB.jpeg" 
            alt="Odontoprev Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <div className="bg-blue-100/90 p-6 rounded-lg backdrop-blur-sm">
                  <h2 className="text-blue-900 text-xl mb-2">Ampla cobertura e a maior rede credenciada do Brasil.</h2>
                  <p className="text-blue-800 mb-4">Contrate o plano dental Bem Estar e aproveite.</p>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-semibold">Plano Bem Estar</h3>
                        <p className="text-sm text-gray-600">Mensal</p>
                        <div className="flex items-baseline mt-2">
                          <span className="text-sm">R$</span>
                          <span className="text-3xl font-bold mx-1">45</span>
                          <span className="text-xl">,60</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Plano Bem Estar</h3>
                        <p className="text-sm text-gray-600">Anual</p>
                        <div className="flex items-baseline mt-2">
                          <span className="text-sm">R$</span>
                          <span className="text-3xl font-bold mx-1">456</span>
                          <span className="text-xl">,00</span>
                        </div>
                        <p className="text-sm text-gray-600">Parcele em até 12x no cartão.</p>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={scrollToPlans}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Condições Especiais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Plans Section */}
      <section className="bg-white py-20" ref={plansRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Os melhores planos para você
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Dental Júnior */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-cyan-300 p-6 text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Diamond className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Dental Júnior</h3>
                <p className="text-sm mt-2">Rede Do Plano <span className="font-semibold text-blue-600">UNNA</span></p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Exclusivo para crianças de 0 à 17 anos
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Limpeza
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Extração de siso
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Tratamento e retratamento de canal
                  </li>
                </ul>

                <a href="#" className="text-blue-600 text-sm block text-center mb-6 hover:underline">
                  Condições gerais do plano
                </a>

                <button 
                  onClick={() => handlePlanClick('DentalJunior')}
                  className="w-full text-blue-600 border border-blue-600 rounded-lg py-2 mb-6 hover:bg-blue-50 transition-colors"
                >
                  Saiba mais
                </button>

                <div className="text-center mb-4">
                  <div className="flex items-center justify-center">
                    <span className="text-sm">R$</span>
                    <span className="text-4xl font-bold text-blue-600 mx-1">29</span>
                    <div className="flex flex-col items-start">
                      <span className="text-xl text-blue-600">,90</span>
                      <span className="text-xs text-gray-500">Mensal</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">cartão de crédito / débito em conta</p>
                </div>

                <button 
                  onClick={() => handlePlanClick('DentalJunior')}
                  className="w-full bg-[#8BC34A] text-white rounded-lg py-3 font-semibold hover:bg-green-600 transition-colors"
                >
                  COMPRAR
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Mensal: 90 dias clínico geral e 180 prótese/ Anual: 60 dias clínico geral e 90 prótese + Desconto em 2 Parcelas
                </p>
              </div>
            </div>

            {/* Bem Estar */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-blue-500 p-6 text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Bem Estar</h3>
                <p className="text-sm mt-2 text-white">Rede Do Plano <span className="font-semibold">PRINCIPAL</span></p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Limpeza
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Extração de siso
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Tratamento e retratamento de canal
                  </li>
                </ul>

                <a href="#" className="text-blue-600 text-sm block text-center mb-6 hover:underline">
                  Condições gerais do plano
                </a>

                <button 
                  onClick={() => handlePlanClick('BemEstar')}
                  className="w-full text-blue-600 border border-blue-600 rounded-lg py-2 mb-6 hover:bg-blue-50 transition-colors"
                >
                  Saiba mais
                </button>

                <div className="text-center mb-4">
                  <div className="flex items-center justify-center">
                    <span className="text-sm">R$</span>
                    <span className="text-4xl font-bold text-blue-600 mx-1">45</span>
                    <div className="flex flex-col items-start">
                      <span className="text-xl text-blue-600">,60</span>
                      <span className="text-xs text-gray-500">Mensal</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">cartão de crédito / débito em conta</p>
                </div>

                <button 
                  onClick={() => handlePlanClick('BemEstar')}
                  className="w-full bg-[#8BC34A] text-white rounded-lg py-3 font-semibold hover:bg-green-600 transition-colors"
                >
                  COMPRAR
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Mensal: Redução de carência para 30 dias em Clínico Geral e 180 prótese / Anual: Sem Carência para Clínico Geral e redução para 90 dias em Prótese + desconto de 2 parcelas
                </p>
              </div>
            </div>

            {/* Bem Estar White */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-blue-600 p-6 text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smile className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Bem Estar White</h3>
                <p className="text-sm mt-2 text-white">Rede Do Plano <span className="font-semibold">UNNA</span></p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Extração de siso
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Tratamento e retratamento de canal
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Placa de bruxismo
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Clareamento estético com Gel
                  </li>
                </ul>

                <a href="#" className="text-blue-600 text-sm block text-center mb-6 hover:underline">
                  Condições gerais do plano
                </a>

                <button 
                  onClick={() => handlePlanClick('BemEstarWhite')}
                  className="w-full text-blue-600 border border-blue-600 rounded-lg py-2 mb-6 hover:bg-blue-50 transition-colors"
                >
                  Saiba mais
                </button>

                <div className="text-center mb-4">
                  <div className="flex items-center justify-center">
                    <span className="text-sm">R$</span>
                    <span className="text-4xl font-bold text-blue-600 mx-1">89</span>
                    <div className="flex flex-col items-start">
                      <span className="text-xl text-blue-600">,90</span>
                      <span className="text-xs text-gray-500">Mensal</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">cartão de crédito / débito em conta</p>
                </div>

                <button 
                  onClick={() => handlePlanClick('BemEstarWhite')}
                  className="w-full bg-[#8BC34A] text-white rounded-lg py-3 font-semibold hover:bg-green-600 transition-colors"
                >
                  COMPRAR
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Mensal: 90 dias clínico geral e 180 prótese/ Anual: 60 dias clínico geral e 90 prótese + Desconto em 2 Parcelas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Plans Section */}
      <section className="bg-blue-900 py-20" ref={businessPlansRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Planos Master Plus
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Bem Estar Pró */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-blue-100 p-6 text-center rounded-b-[40px]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Bem Estar Pró</h3>
                <p className="text-sm mt-2">Rede Do Plano <span className="font-semibold text-blue-600">UNNA</span></p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Extração de siso
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Prótese removível total (dentadura)
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Prótese parcial removível
                  </li>
                </ul>

                <a href="#" className="text-blue-600 text-sm block text-center mb-6 hover:underline">
                  Condições gerais do plano
                </a>

                <button 
                  onClick={() => handlePlanClick('BemEstarPro')}
                  className="w-full text-blue-600 border border-blue-600 rounded-lg py-2 mb-6 hover:bg-blue-50 transition-colors"
                >
                  Saiba mais
                </button>

                <div className="text-center mb-4">
                  <div className="flex items-center justify-center">
                    <span className="text-sm">R$</span>
                    <span className="text-4xl font-bold text-blue-600 mx-1">99</span>
                    <div className="flex flex-col items-start">
                      <span className="text-xl text-blue-600">,90</span>
                      <span className="text-xs text-gray-500">Mensal</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">cartão de crédito / débito em conta</p>
                </div>

                <button 
                  onClick={() => handlePlanClick('BemEstarPro')}
                  className="w-full bg-[#8BC34A] text-white rounded-lg py-3 font-semibold hover:bg-green-600 transition-colors"
                >
                  COMPRAR
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Mensal: 90 dias para Clínico Geral e 180 dias para Prótese. / Anual: 60 dias para Clínico Geral e 90 dias para Prótese + Desconto de 2 parcelas
                </p>
              </div>
            </div>

            {/* Bem Estar Orto */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-blue-200 p-6 text-center rounded-b-[40px]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Bem Estar Orto</h3>
                <p className="text-sm mt-2">Rede Do Plano <span className="font-semibold text-blue-600">UNNA</span></p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Aparelho Fixo e Móvel
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Manutenção de aparelhos
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Documentação ortodôntica completa
                  </li>
                </ul>

                <a href="#" className="text-blue-600 text-sm block text-center mb-6 hover:underline">
                  Condições gerais do plano
                </a>

                <button 
                  onClick={() => handlePlanClick('BemEstarOrto')}
                  className="w-full text-blue-600 border border-blue-600 rounded-lg py-2 mb-6 hover:bg-blue-50 transition-colors"
                >
                  Saiba mais
                </button>

                <div className="text-center mb-4">
                  <div className="flex items-center justify-center">
                    <span className="text-sm">R$</span>
                    <span className="text-4xl font-bold text-blue-600 mx-1">139</span>
                    <div className="flex flex-col items-start">
                      <span className="text-xl text-blue-600">,90</span>
                      <span className="text-xs text-gray-500">Mensal</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">cartão de crédito / débito em conta</p>
                </div>

                <button 
                  onClick={() => handlePlanClick('BemEstarOrto')}
                  className="w-full bg-[#8BC34A] text-white rounded-lg py-3 font-semibold hover:bg-green-600 transition-colors"
                >
                  COMPRAR
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Mensal: 90 dias para Clínico Geral e 180 dias para Prótese e Ortodontia. / Anual: 60 dias para Clínico Geral e 90 dias para Prótese e Ortodontia + Desconto de 2 parcelas
                </p>
              </div>
            </div>

            {/* Bem Estar Orto White */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-blue-300 p-6 text-center rounded-b-[40px]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Bem Estar Orto White</h3>
                <p className="text-sm mt-2">Rede Do Plano <span className="font-semibold text-blue-600">UNNA</span></p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Aparelho Fixo e Móvel
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Manutenção de aparelhos
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Documentação ortodôntica completa
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Clareamento estético com Gel
                  </li>
                </ul>

                <a href="#" className="text-blue-600 text-sm block text-center mb-6 hover:underline">
                  Condições gerais do plano
                </a>

                <button 
                  onClick={() => handlePlanClick('BemEstarOrtoWhite')}
                  className="w-full text-blue-600 border border-blue-600 rounded-lg py-2 mb-6 hover:bg-blue-50 transition-colors"
                >
                  Saiba mais
                </button>

                <div className="text-center mb-4">
                  <div className="flex items-center justify-center">
                    <span className="text-sm">R$</span>
                    <span className="text-4xl font-bold text-blue-600 mx-1">159</span>
                    <div className="flex flex-col items-start">
                      <span className="text-xl text-blue-600">,90</span>
                      <span className="text-xs text-gray-500">Mensal</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">cartão de crédito / débito em conta</p>
                </div>

                <button 
                  onClick={() => handlePlanClick('BemEstarOrtoWhite')}
                  className="w-full bg-[#8BC34A] text-white rounded-lg py-3 font-semibold hover:bg-green-600 transition-colors"
                >
                  COMPRAR
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Mensal: 90 dias para Clínico Geral e 180 dias para Clareamento em Gel, Ortodontia e Prótese / Anual: 60 dias para Clínico Geral e 90 dias para clareamento em Gel, Ortodontia e Prótese + Desconto de 2 parcelas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <div className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
              >
                <span className="font-semibold">Como funciona a carência?</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === 1 ? 'transform rotate-180' : ''}`} />
              </button>
              {openFaq === 1 && (
                <div className="px-6 py-4 border-t">
                  <p className="text-gray-600">
                    A carência varia de acordo com o procedimento. Consultas e limpeza têm carência de 24 horas, 
                    enquanto procedimentos mais complexos podem ter carência de até 180 dias.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
              >
                <span className="font-semibold">Posso incluir dependentes?</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === 2 ? 'transform rotate-180' : ''}`} />
              </button>
              {openFaq === 2 && (
                <div className="px-6 py-4 border-t">
                  <p className="text-gray-600">
                    Sim! Você pode incluir cônjuge e filhos como dependentes em seu plano. 
                    Cada dependente terá acesso a todos os benefícios do plano escolhido.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
              >
                <span className="font-semibold">Como encontro um dentista?</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === 3 ? 'transform rotate-180' : ''}`} />
              </button>
              {openFaq === 3 && (
                <div className="px-6 py-4 border-t">
                  <p className="text-gray-600">
                    Você pode encontrar dentistas credenciados através do nosso aplicativo ou site. 
                    Basta inserir sua localização e escolher o profissional mais próximo.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ainda tem dúvidas?</h2>
            <p className="text-gray-600 mb-8">
              Nossa equipe está pronta para ajudar você a escolher o melhor plano para suas necessidades.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Telefone</h3>
                <p className="text-gray-600">0800 123 4567</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Chat Online</h3>
                <p className="text-gray-600">Atendimento 24h</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SmartphoneIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600">(21) 98847-8160</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8" />
                <span className="text-2xl ml-2 font-semibold">odontoprev</span>
              </div>
              <p className="text-gray-400">
                Cuidando do seu sorriso há mais de 20 anos
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Sobre nós</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Quem somos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nossa rede</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trabalhe conosco</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Planos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Plano Básico</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Plano Padrão</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Plano Premium</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fale conosco</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Central de ajuda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ouvidoria</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Odontoprev. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Add WhatsApp Button */}
      <WhatsAppButton />

      {/* Navigation Menu */}
      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}

export default Home;
import React, { useState } from 'react';
import { Heart, Check, Linkedin, Facebook, Youtube, Instagram, Music2, AlignJustify, Phone } from 'lucide-react';
import NavMenu from './components/NavMenu';
import WhatsAppButton from './components/WhatsAppButton';

function BemEstarWhite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBuyClick = () => {
    window.location.href = 'https://pagamento.odontoprev.site/checkout?product=2bae133d-f528-11ef-8446-46da4690ad53';
  };

  const handleLogoClick = () => {
    localStorage.setItem('selectedPlan', 'Home');
    window.location.reload();
  };

  const coverageItems = [
    'Restaurações',
    'Limpeza',
    'Consulta',
    'Emergência 24h',
    'Radiografia (Raio X)',
    'Extração de siso',
    'Tratamento e retratamento de canal',
    'Odontopediatria',
    'Tratamento gengival',
    'Mantenedores',
    'Prótese Simples',
    'Consulta + Placa de Clareamento',
    'Placa de bruxismo',
    'Clareamento estético com Gel'
  ];

  const footerLinks = [
    ['Sobre Nós', 'Política de Privacidade', 'Portal da Privacidade', 'Termos e Condições de uso', 'Seja nosso corretor'],
    ['Encontre seu dentista', 'Dúvidas', 'Entenda como contratar um', 'Login - Já sou Beneficiário', 'Quero me credenciar como dentista']
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-[#0066FF] text-white relative">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <Heart className="h-8 w-8 text-white" />
            <span className="ml-2 text-2xl font-bold">odontoprev</span>
          </div>
          <div>
            <button onClick={() => setIsMenuOpen(true)}>
              <AlignJustify className="h-6 w-6 text-white" />
            </button>
          </div>
        </nav>
        
        <div className="container mx-auto px-4 py-16 flex flex-col items-center">
          <div className="w-full max-w-2xl mb-8">
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80"
              alt="Pessoa sorrindo no consultório"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">PLANO BEM ESTAR WHITE</h1>
            <p className="text-xl mb-8">
              Plano com ampla cobertura para tratamentos clínicos, com os diferenciais de clareamento estético com gel (feito em consultório ou de forma caseira, a partir do diagnóstico clínico) e placa de mordida para o tratamento de bruxismo.
            </p>
            <button
              onClick={handleBuyClick}
              className="bg-[#44D62C] text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-[#3bc125] transition-colors animate-pulse-button"
            >
              COMPRAR
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#0066FF] mb-4">Sobre o Bem Estar White</h2>
        <p className="mb-8">
          Da prevenção ao procedimento, do bem-estar à estética, o plano Bem-estar White é uma experiência completa de cuidado com sua saúde bucal, feito para inspirar seu melhor sorriso.
        </p>
        <a href="#" className="text-[#0066FF] hover:underline">Consulte as Condições Gerais do Plano.</a>

        <h2 className="text-2xl font-bold text-[#0066FF] mt-12 mb-4">Para quem é indicado?</h2>
        <p className="mb-8">
          Para pessoas que buscam ampla cobertura para tratamentos clínicos, com os diferenciais de clareamento estético com gel (feito em consultório ou de forma caseira, a partir do diagnóstico clínico) e placa de mordida para o tratamento de bruxismo.
        </p>

        <h2 className="text-2xl font-bold text-[#0066FF] mb-4">Vantagens</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>A maior rede credenciada do Brasil, com mais de 25 mil dentistas credenciados.</li>
          <li>Dentista Online: um serviço de teleorientação odontológica em tempo real, para você cuidar da sua saúde bucal sem precisar sair de casa.</li>
          <li>Portal Beneficiário e App Odontoprev com diversas funcionalidades.</li>
          <li>Descontos exclusivos em parceiros.</li>
        </ul>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#0066FF] mb-4">Informações do Plano</h2>
          <p><strong>Nome comercial ANS:</strong> BEM ESTAR WITHE 1FLE</p>
          <p><strong>Registro ANS:</strong> 495.364/23-9</p>
          <p><strong>Rede Do Plano:</strong> UNNA</p>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0066FF] mb-8">Cobertura</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coverageItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-[#0066FF] mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <span className="text-gray-700">+ Carência reduzida para Prótese</span>
                <span className="ml-auto flex gap-4 inline-block">
                  <span className="text-2xl">✕</span>
                  <span className="text-2xl">✕</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#0066FF] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div>
              <p className="text-sm">débito em conta / cartão</p>
              <p className="text-4xl font-bold">
                R$ <span className="text-6xl">89</span>,90
              </p>
              <p>Mensal</p>
            </div>
            <div>
              <p className="text-sm">débito em conta / cartão em até 12x</p>
              <p className="text-4xl font-bold">
                R$ <span className="text-6xl">899</span>,90
              </p>
              <p>Anual</p>
            </div>
          </div>
          <button
            onClick={handleBuyClick}
            className="mt-8 bg-[#44D62C] text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-[#3bc125] transition-colors animate-pulse-button"
          >
            CONTRATE AGORA
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0066FF] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {footerLinks.map((column, idx) => (
              <ul key={idx} className="space-y-2">
                {column.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="font-bold mb-2">Central de Vendas</h3>
            <div className="flex items-center justify-center gap-2">
              <Phone size={20} />
              <span>(11) 3003-9870</span>
            </div>
            <p className="text-sm">de 2ª a 6ª feira das 8h às 20h</p>
          </div>

          <div className="text-center mb-8">
            <p className="mb-4">Encontre-nos nas Redes sociais:</p>
            <div className="flex justify-center gap-4">
              <Linkedin className="h-6 w-6" />
              <Facebook className="h-6 w-6" />
              <Youtube className="h-6 w-6" />
              <Instagram className="h-6 w-6" />
              <Music2 className="h-6 w-6" />
              <AlignJustify className="h-6 w-6" />
            </div>
          </div>

          <div className="text-center text-sm">
            <p>OdontoPrev - CRO/SP nº 2728 | RT J. M. Benozatti - CRO/SP</p>
            <p>© Odontoprev, S/A | CNPJ: 58.119.199/0001-51 Alameda Araguaia, Alphaville - Barueri - SP - CEP 06455-000</p>
          </div>
        </div>
      </footer>

      {/* Navigation Menu */}
      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default BemEstarWhite;
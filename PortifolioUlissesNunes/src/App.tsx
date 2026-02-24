import './App.css';
import HeadingUn from '../components/HeadingUn';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Dev Front-End ',
    'Desenvolvedor Criativo',
    'Ui/Ux Designer',
    'React Developer',
  ];

  const currentRole = roles[roleIndex];
  const speed = isDeleting ? 30 : 60;

  useEffect(() => {
    const timer = setTimeout(() => {
      const targetText = currentRole;
      
      if (!isDeleting && displayText === targetText) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % roles.length);
        return;
      }

      setDisplayText(prev =>
        isDeleting
          ? targetText.substring(0, prev.length - 1)
          : targetText.substring(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roleIndex, roles.length, speed]);

  return (
    <>
    <HeadingUn />
      <main className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-l from-black/10 to-50% to-black/30 p-6 pt-24 md:pt-1 overflow-hidden'>
  
  {/* CONTAINER PRINCIPAL: TEXTO + IMAGEM */}
  <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl w-full mx-auto px-4">
    
    {/* COLUNA DA ESQUERDA: NOME + FRASE TYPEWRITER + DESCRIÇÃO */}
    <div className="flex-1 text-center md:text-left flex flex-col gap-4">
      
      {/* NOME PRINCIPAL */}
      <motion.h1 
        className='text-4xl md:text-7xl font-bold text-red-950'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
         Ulisses Nunes
      </motion.h1>

      {/* FRASE TYPEWRITER */}
      <div className="min-h-[3rem]">
        <span className="text-2xl md:text-3xl font-bold text-red-950 block">
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block ml-1 text-red-600"
          >
            |
          </motion.span>
        </span>
      </div>

      {/* TEXTO DE APOIO (LOREM IPSUM) */}
      <motion.p 
        className='max-w-xl text-lg text-gray-900 leading-relaxed'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Transformando Códigos em experiências digitais impactantes.
      </motion.p>
    </div>

    {/* COLUNA DA DIREITA: IMAGEM CINEMATOGRÁFICA */}
    <div className="flex-1 flex justify-center md:justify-end relative group">
      
      {/* EFEITO DE GLOW POSTERIOR */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-black/60 blur-[80px] rounded-full scale-125 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative">
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/fotoPerfil.png" 
          alt="Perfil" 
          className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]" 
        />
        
        {/* Camada de finalização cinematográfica (Overlay) */}
        <div className="absolute inset-0 z-20  rounded-3xl border border-white/5 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>

  </div>
</main>
    </>
  );
}

export default App;

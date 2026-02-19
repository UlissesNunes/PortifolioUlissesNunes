import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeadingUn() {
  const [isOpen, setIsOpen] = useState(false);

  // Variantes otimizadas: usam 'y' (transform) em vez de propriedades de layout
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.07, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  const navLinks = [
  { name: 'Projetos', href: '#projects', external: false },
  { name: 'Contato', href: 'https://wa.me/5571996194918', external: true },
  { name: 'Github', href: 'https://github.com/UlissesNunes', external: true },
];

  return (
    <header className='fixed top-0 left-0 z-50 w-full md:h-24 lg:h-28 px-4 sm:px-6 py-3 bg-gradient-to-r from-black from-5% via-black to-red-950 shadow-lg flex items-center justify-between will-change-transform'>
      {/* LOGO - Otimizada com hover leve */}
      <motion.a
        href='#'
        whileHover={{ scale: 1.02 }}
        className='flex items-center'
      >
        <img
          src='/logo.png'
          alt='Logo'
          className='w-14 md:w-24 h-auto object-contain'
        />
      </motion.a>

      {/* NAV DESKTOP - Otimizada com delegação de eventos */}
      <nav className='hidden md:flex gap-8 text-gray-200 font-medium'>
        {[
          ...navLinks
        ].map(link => (
          <a
            key={link.name}
            href={link.href}
            target={
              link.external ? '_blank' : '_self'
            }
            rel='noopener noreferrer'
            className='hover:text-red-800 transition-colors duration-200 relative group'
          >
            {link.name}
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-red-800 transition-all group-hover:w-full' />
          </a>
        ))}
      </nav>

      {/* BOTÃO MOBILE - Otimizado para resposta tátil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle Menu'
        className='md:hidden text-gray-200 p-2 hover:bg-white/5 rounded-lg transition-colors'
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MENU MOBILE - Ultra Otimizado */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial='closed'
            animate='open'
            exit='closed'
            variants={menuVariants}
            className='absolute top-full left-0 w-full bg-gradient-to-r from-black from-5% via-black to-red-950 backdrop-blur-xl border-t border-red-800/20 flex flex-col p-6 md:hidden shadow-2xl'
          >
            <motion.ul className='flex flex-col gap-5'>
              {[
               ...navLinks
              ].map(link => (
                <motion.li key={link.name} variants={itemVariants}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className='text-2xl font-semibold text-gray-200 active:text-red-500 flex justify-between items-center'
                  >
                    {link.name}
                    <span className='text-red-800'>→</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

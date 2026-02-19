

export default function HeadingUn() {
  return (
    <header className='fixed top-0 left-0 z-50 w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-red-900 to-black shadow-lg flex items-center justify-between'>
      <div className='flex items-center gap-3 sm:gap-4'>
        <img src="/logo.png" alt="Logo" className='w-8 h-8 sm:w-10 sm:h-10' />
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Ulisses Nunes</h1>
      </div>
      <nav>
        <ul className='flex gap-4 sm:gap-6 text-sm sm:text-base text-gray-200'>
          <li><a href="#home" className='hover:text-red-400 transition-colors'>Home</a></li>
          <li><a href="#about" className='hover:text-red-400 transition-colors'>Sobre</a></li>
          <li><a href="#projects" className='hover:text-red-400 transition-colors'>Projetos</a></li>
          <li><a href="#contact" className='hover:text-red-400 transition-colors'>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

import './App.css';
import HeadingUn from '../components/HeadingUn';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Front-End Developer',
    'Analict Developer',
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
      <main className='min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6 pt-28'>
        <motion.h1 
          className='text-5xl font-bold text-red-950 mb-6 text-center'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ulisses Nunes
          <br />
          <span className='text-3xl min-h-[2.5rem]'>
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              |
            </motion.span>
          </span>
        </motion.h1>
        <motion.p 
          className='max-w-2xl text-lg text-gray-700 text-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, illum deserunt? Assumenda, fugit eum nihil non expedita vel, dolore blanditiis tempora nesciunt rerum consequatur provident autem earum est dolorem veniam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque doloremque, excepturi sint dicta debitis distinctio velit fuga corporis veritatis repellendus, animi asperiores ducimus perferendis pariatur provident, ratione temporibus quidem.lor4 , Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam perspiciatis magni? Eaque quis repellat asperiores, nihil eius aspernatur animi totam ad eum fugit officiis, non fugiat voluptatem consectetur est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci exercitationem, numquam dicta saepe autem sequi, veritatis quae magni eligendi hic, error fugit doloribus reiciendis corrupti impedit quam libero quos quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci exercitationem, numquam dicta saepe autem sequi, veritatis quae magni eligendi hic, error fugit doloribus reiciendis corrupti impedit quam libero quos quidem.lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci exercitationem, numquam dicta saepe autem sequi, veritatis quae magni eligendi hic, error fugit doloribus reiciendis corrupti impedit quam libero quos quidem.
        </motion.p>
      </main>
    </>
  );
}

export default App;

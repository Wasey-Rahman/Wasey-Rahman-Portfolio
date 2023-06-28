import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import photo from './Photo of Wasey Rahman for CV.jpg';
import AboutMe from '../AboutMe/AboutMe';
import ContactMeForm from '../ContactMeForm/ContactMeForm';
import Skills from '../Skills/Skills';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);
 

  return (
    <>
    <Helmet>
        <title>Wasey-Rahman-Portfolio|Home</title>
        
      </Helmet>
    <div className='bg-white'>
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
        <motion.div
          className="text-container"
          initial={{ opacity: 0, x: -50 }}
          animate={showAnimation ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, repeat: 2, repeatType: 'reverse' }}
        >
          <motion.h1 className=" font-semibold text-4xl">Welcome to my portfolio</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={showAnimation ? { opacity: 1 } : {}}>
            I am Wasey Rahman, a passionate <span className="inline-block">
              {'Web Developer'.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={showAnimation ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1,repeat: 4,
                    repeatType: 'reverse', }}
                    >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.p>
        </motion.div>
        {/* <img src={photo} alt="" /> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={showAnimation ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, repeat: 2, repeatType: 'reverse' }}
        >
          <img src={photo} alt="Wasey Rahman" />
        </motion.div>
     
        </div>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <ContactMeForm></ContactMeForm>
    </div>
    </>
  );
};

export default Home;
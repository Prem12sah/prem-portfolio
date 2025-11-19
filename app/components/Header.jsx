import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Header = ({ isDarkMode }) => {
  return (
    <section className='w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6 relative overflow-hidden pt-20'>
      {/* Background decorative elements */}
      <div className='absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl'></div>
      <div className='absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl'></div>
      
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        className='relative'
      >
        <div className='absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-30'></div>
        <Image 
          src={assets.profile_img} 
          alt='Profile' 
          className='rounded-full w-36 h-36 object-cover relative z-10 border-4 border-white shadow-glow dark:border-gray-800 dark:shadow-glow-dark object-center' 
          style={{ objectPosition: 'center top' }}
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-center justify-center gap-3 text-xl md:text-2xl mb-4 font-Ovo'
      >
        <span className='gradient-text font-semibold'>Hi! I am Prem Sah</span>
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <Image src={assets.hand_icon} alt='Hand Icon' className='w-8' />
        </motion.div>
      </motion.h3>

      {/* Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight'
      >
        <span className='gradient-text'>Full Stack Web Developer</span>
        <br />
        <span className='gradient-text text-2xl sm:text-3xl font-bold'>Based in Nepal</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed'
      >A full-stack developer bridges the gap between ideas and execution, transforming concepts into functional digital experiences. From designing intuitive interfaces to structuring efficient backend systems, every layer is crafted with logic, creativity, and a focus on solving real problems.
      </motion.p>

      {/* Action Buttons */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className='flex flex-col sm:flex-row items-center gap-6 mt-8'
      >
        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href='#contact'
          className='px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center gap-3 font-semibold shadow-lg hover:shadow-glow smooth-transition'
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt='Arrow' className='w-5' />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href='/sample-resume.pdf' 
          download='Prem_Sah_Resume.pdf'
          className='px-12 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-center gap-3 font-semibold hover:border-purple-500 dark:hover:border-purple-400 smooth-transition bg-white dark:bg-gray-800'
        >
          My Resume
          <Image src={assets.download_icon} alt='Download Icon' className='w-5' />
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center'
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2'
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;

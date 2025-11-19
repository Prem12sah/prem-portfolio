"use client"
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from"./components/Services";
import Work from"./components/Work";
import Contact from"./components/Contact";
import Footer from"./components/Footer";
import Experience from "./components/Experience";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(()=>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
           setIsDarkMode(true)
        } else {
           setIsDarkMode(false)
        }
    }, [])

    useEffect(()=>{
       if(isDarkMode){
        document.documentElement.classList.add('dark');
        localStorage.theme ='dark';
       } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = '';
       }
    }, [isDarkMode])

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
   <>
   <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
   <Header isDarkMode={isDarkMode}/>
   <About isDarkMode={isDarkMode}/>
   <Experience isDarkMode={isDarkMode}/>
   <Services isDarkMode={isDarkMode}/>
   <Work isDarkMode={isDarkMode}/>
   <Contact isDarkMode={isDarkMode}/>
   <Footer isDarkMode={isDarkMode}/>
   
   {/* Floating Action Button */}
   {showScrollTop && (
     <motion.button
       initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 1, scale: 1 }}
       exit={{ opacity: 0, scale: 0 }}
       whileHover={{ scale: 1.1, y: -2 }}
       whileTap={{ scale: 0.9 }}
       onClick={scrollToTop}
       className='fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-glow smooth-transition flex items-center justify-center'
     >
       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
       </svg>
     </motion.button>
   )}
   </>
  );
}

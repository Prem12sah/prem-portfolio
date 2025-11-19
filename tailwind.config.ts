import { Outfit } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       lightHover:'#fcf4ff',
       darkHover:'#2a004a',
       darkTheme:'#11001F',
       primary: {
         50: '#fdf4ff',
         100: '#fae8ff',
         200: '#f5d0fe',
         300: '#f0abfc',
         400: '#e879f9',
         500: '#d946ef',
         600: '#c026d3',
         700: '#a21caf',
         800: '#86198f',
         900: '#701a75',
       },
       secondary: {
         50: '#fef7ff',
         100: '#fdf2ff',
         200: '#fce7ff',
         300: '#fbcfe8',
         400: '#f9a8d4',
         500: '#f472b6',
         600: '#ec4899',
         700: '#db2777',
         800: '#be185d',
         900: '#9d174d',
       }
      },
     fontFamily:{
      Outfit:["Outfit","sans-serif"],
      Ovo: ["Ovo","serif"]
     },
     boxShadow:{
      'black':'4px 4px 0 #000',
      'white':'4px 4px 0 #fff',
      'glow': '0 0 20px rgba(168, 85, 247, 0.4)',
      'glow-dark': '0 0 20px rgba(255, 255, 255, 0.1)',
     },
     gridTemplateColumns:{
      'auto':'repeat(auto-fit, minmax(200px, 1fr))'
     },
     animation: {
       'float': 'float 3s ease-in-out infinite',
       'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
       'bounce-slow': 'bounce 2s infinite',
       'fade-in': 'fadeIn 0.5s ease-in-out',
       'slide-up': 'slideUp 0.5s ease-out',
     },
     keyframes: {
       float: {
         '0%, 100%': { transform: 'translateY(0px)' },
         '50%': { transform: 'translateY(-10px)' },
       },
       fadeIn: {
         '0%': { opacity: '0' },
         '100%': { opacity: '1' },
       },
       slideUp: {
         '0%': { transform: 'translateY(20px)', opacity: '0' },
         '100%': { transform: 'translateY(0)', opacity: '1' },
       },
     },
     backgroundImage: {
       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
       'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
       'gradient-mesh': 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
     },
     backdropBlur: {
       xs: '2px',
     }
    },
  },

  darkMode:'selector',
  plugins: [],
  
};


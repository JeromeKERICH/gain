import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HomeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    {
      id: 2,
      headline: "GAIN Summit 2025 Dubai, 24-25 Nov",
      subtext: "Where Gulf liquidity meets Africa's growth: deals, partnerships, and cross-border opportunities.",
      ctaButtons: [
        { text: "Register Now", primary: true, link: "#tickets" },
      ],
      backgroundImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      headline: "The Afri–Gulf Trade Corridor",
      subtext: "Channeling Gulf capital into Africa's scalable sectors while opening Gulf markets for African ventures.",
      ctaButtons: [
        { text: "See Investment Playbook", primary: true, link: "https://drive.google.com/file/d/1N3MR9C4hLFIQaCbbwLS4sxzRcTxeZdK6/view" },
      ],
      backgroundImage: "assets/ghero.jpg"
    }
  ];

  // Memoized auto-rotation with optimized timing
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 5000);
    }, 500);
  }, [slides.length, isTransitioning]);

  // Auto-rotate slides with cleanup
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index) => {
    if (index === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 500);
  };

  // Background variants for animation
  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    },
    exit: {
      scale: 1.1,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeIn" }
    }
  };

  // Content variants for animation
  const contentVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeIn" }
    }
  };

  // Child variants for staggered animation
  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  // Button variants
  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  // Particle component
  const Particle = ({ delay, size, color, position }) => (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        top: position.top,
        left: position.left,
        backgroundColor: color,
      }}
      initial={{ y: 0, x: 0, opacity: 0 }}
      animate={{ 
        y: [0, -40, 0],
        x: [0, 10, 0],
        opacity: [0, 0.3, 0],
        scale: [0, 1, 0]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    />
  );

  // Animated background component
  const AnimatedBackground = () => (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Animated particles */}
      {[...Array(15)].map((_, i) => (
        <Particle
          key={i}
          delay={Math.random() * 5}
          size={`${Math.random() * 10 + 3}px`}
          color={i % 3 === 0 ? '#d4a23f' : i % 3 === 1 ? '#4db6ac' : '#ffffff'}
          position={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        />
      ))}
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-15">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-[#d4a23f] to-transparent h-px w-full"
            style={{ top: `${i * 8}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.2, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-b from-transparent via-[#4db6ac] to-transparent w-px h-full"
            style={{ left: `${i * 8}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.2, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.3 + 1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative h-[550px] w-full overflow-hidden bg-gradient-to-br py-30 from-[#0c1c1c] to-[#0a1616] text-white">
      <AnimatedBackground />
      
      {/* Slides with Framer Motion animations */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div 
              key={slide.id}
              className="absolute inset-0"
              variants={backgroundVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Background Image with Gradient Overlay */}
              <motion.div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${slide.backgroundImage})`,
                  filter: 'brightness(0.7)'
                }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c1c1c]/20 via-[#0c1c1c]/70 to-[#0c1c1c]/75"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0c1c1c]/20 via-transparent to-[#0c1c1c]/90"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4a23f]/10 via-transparent to-[#4db6ac]/10"></div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 max-w-5xl mx-auto">
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-center"
                >
                  <motion.h1 
                    variants={childVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" 
                    style={{ 
                      fontFamily: 'Georgia, serif',
                      textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                    }}
                  >
                    {slide.headline}
                  </motion.h1>
                  
                  {slide.subtext && (
                    <motion.p 
                      variants={childVariants}
                      className="text-[#e0e0e0] text-xl md:text-2xl mb-10 max-w-3xl leading-relaxed mx-auto" 
                      style={{
                        fontFamily: 'Georgia, serif',
                        textShadow: '0 1px 5px rgba(0,0,0,0.5)'
                      }}
                    >
                      {slide.subtext}
                    </motion.p>
                  )}
                  
                  <motion.div 
                    variants={childVariants}
                    className="flex flex-col sm:flex-row gap-5 justify-center"
                  >
                    {slide.ctaButtons.map((button, i) => (
                      <motion.a
                        key={i}
                        href={button.link}
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileTap="tap"
                        className={`px-8 py-4 rounded-lg font-semibold ${
                          button.primary
                            ? 'bg-gradient-to-r from-[#d4a23f] to-[#e9b85d] text-[#0c1c1c] hover:from-[#e9b85d] hover:to-[#d4a23f] shadow-2xl hover:shadow-3xl'
                            : 'bg-transparent border-2 border-[#4db6ac] text-[#4db6ac] hover:bg-[#4db6ac]/10 hover:text-white'
                        } relative group overflow-hidden min-w-[180px] flex items-center justify-center`}
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          {button.text}
                          <svg 
                            className={`w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 ${
                              button.primary ? 'text-[#0c1c1c]' : 'text-[#4db6ac] group-hover:text-white'
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                        {button.primary && (
                          <div className="absolute inset-0 bg-gradient-to-r from-[#e9b85d] to-[#d4a23f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        )}
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#d4a23f] scale-125 shadow-lg' 
                : 'bg-white/30 hover:bg-white/50'
            } disabled:opacity-50`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Send } from 'lucide-react';
import profile from '@/profile.png';


const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Typewriter animation state
  const nameText = 'Luwa Tesemma.';
  const taglineText = 'Full Stack Developer';
  const [phase, setPhase] = useState<'typeName' | 'eraseName' | 'typeTag' | 'eraseTag'>('typeName');
  const [nameIdx, setNameIdx] = useState(0);
  const [tagIdx, setTagIdx] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const typingSpeed = 90;
    const deletingSpeed = 60;
    const hold = 1000;

    switch (phase) {
      case 'typeName': {
        if (nameIdx < nameText.length) {
          timeout = setTimeout(() => setNameIdx((i) => i + 1), typingSpeed);
        } else {
          timeout = setTimeout(() => setPhase('eraseName'), hold);
        }
        break;
      }
      case 'eraseName': {
        if (nameIdx > 0) {
          timeout = setTimeout(() => setNameIdx((i) => i - 1), deletingSpeed);
        } else {
          setPhase('typeTag');
        }
        break;
      }
      case 'typeTag': {
        if (tagIdx < taglineText.length) {
          timeout = setTimeout(() => setTagIdx((i) => i + 1), typingSpeed);
        } else {
          timeout = setTimeout(() => setPhase('eraseTag'), hold);
        }
        break;
      }
      case 'eraseTag': {
        if (tagIdx > 0) {
          timeout = setTimeout(() => setTagIdx((i) => i - 1), deletingSpeed);
        } else {
          setPhase('typeName');
        }
        break;
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [phase, nameIdx, tagIdx]);

  return (
    <section id="hero" className="min-h-screen pt-20 md:pt-28 scroll-mt-20 md:scroll-mt-28 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between md:gap-16 text-center md:text-left">
      <div className="w-full md:w-2/5 flex justify-center md:justify-end md:self-start mt-12 md:mt-0 md:order-2">
        <motion.div
          className="relative w-64 h-64 md:w-96 md:h-96 shadow-xl shadow-green/20 ring-1 ring-green/20 rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 border-2 border-green rounded-lg"
            animate={{ x: [0, 10, 0, -10, 0], y: [0, -10, 0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.img
            src={profile}
            alt="Luwa Tesemma"
            className="w-full h-full object-cover rounded-lg z-10 relative"
            animate={{ scale: [1, 1.02, 1], y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <motion.div
        className="w-full md:w-3/5 md:order-1 md:pr-8 max-w-2xl mx-auto md:mx-0 space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-base md:text-lg text-green font-mono mb-3">
          Hi, my name is
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-bold text-lightest-slate tracking-tight leading-tight">
          <span className="align-middle">{nameText.slice(0, nameIdx)}</span>
          <motion.span
            className="text-green font-mono ml-2 align-middle"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.h2>
        <motion.h3 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate mt-4 leading-tight">
          <span className="align-middle">{taglineText.slice(0, tagIdx)}</span>
          <motion.span
            className="text-green font-mono ml-2 align-middle"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: 0.15 }}
          >
            |
          </motion.span>
        </motion.h3>
        <motion.p variants={itemVariants} className="mt-4 max-w-xl text-slate/90 mx-auto md:mx-0">
        As a full-stack developer, I focus on accessible, human-centered products that deliver real value.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green text-navy font-semibold rounded-md hover:bg-green/80 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40"
          >
            View My Work <ArrowDown size={20} />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-6 py-3 border border-green text-green rounded-md hover:bg-green/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40"
          >
            Contact Me <Send size={20} />
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;

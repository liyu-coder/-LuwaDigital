import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <motion.section
      id={id}
      className="py-12 lg:py-20 scroll-mt-24 md:scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate mr-4">
          <span className="text-green font-mono text-xl md:text-2xl">#</span> {title}
        </h2>
        <div className="hidden sm:block w-full h-[1px] bg-lightest-navy"></div>
      </div>
      {children}
    </motion.section>
  );
};

export default Section;

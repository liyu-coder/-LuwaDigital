import React from 'react';
import Header from '@components/layout/Header';
import Hero from '@views/Home/Hero';
import About from '@views/About/About';
import Skills from '@views/Skills/Skills';
import Projects from '@views/Projects/Projects';
import Experience from '@views/Experience/Experience';
import Contact from '@views/Contact/Contact';
import Resume from '@views/Resume/Resume';
import Footer from '@components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24 pt-24 md:pt-28 flex-grow">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
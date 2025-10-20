import React from 'react';
import Section from '@components/layout/Section';
import myproflie from '@assets/image.png';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-3 text-light-slate text-lg space-y-4">
          <p>
            I’m Luwa, a full-stack developer who loves turning ideas into clean, scalable, and impactful web experiences.
I focus on writing smart code, designing intuitive interfaces, and delivering products that truly perform.
          </p>
          <p>
            Driven by curiosity and precision, I blend creativity with logic to build solutions that feel effortless — for both users and clients.
          </p>
          <p>
            Always learning. Always building. Always pushing what’s possible on the web.
            </p>
        </div>
        <div className="md:col-span-2 flex justify-center items-start">
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                <div className="absolute inset-0 bg-green rounded-lg transform transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
                <img src={ myproflie } alt="Luwa Tesemma" className="relative w-full h-full object-cover rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-300"/>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

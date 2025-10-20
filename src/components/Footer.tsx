import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/liyu-coder' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
];

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center">
        <div className="flex justify-center items-center space-x-6 mb-4 md:hidden">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-green transition-colors duration-300"
              aria-label={link.name}
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>
      <p className="text-sm text-slate font-mono">
        Designed & Built by Luwa Tesemma &copy; {new Date().getFullYear()}
      </p>
       {/* Social Links for Desktop - vertical on sides */}
       <div className="hidden md:block fixed bottom-0 left-12 z-10">
          <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-slate after:mx-auto after:mt-6">
              {socialLinks.map((link) => (
                  <li key={link.name}>
                       <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate hover:text-green transition-all duration-300 hover:-translate-y-1 block"
                          aria-label={link.name}
                        >
                          <link.icon size={22} />
                        </a>
                  </li>
              ))}
          </ul>
       </div>
       <div className="hidden md:block fixed bottom-0 right-12 z-10">
            <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-slate after:mx-auto after:mt-6">
                <a href="mailto:luwatesemma@gmail.com" className="text-slate hover:text-green transition-all duration-300 hover:-translate-y-1" style={{ writingMode: 'vertical-rl' }}>
                    luwatesemma@gmail.com
                </a>
            </div>
       </div>

    </footer>
  );
};

export default Footer;

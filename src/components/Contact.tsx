import React, { useState } from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a backend service
    // e.g., via fetch() or axios
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-light-slate mb-8">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open. I'll get back to you as soon as possible!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
          <a
            href="mailto:luwatesemma@gmail.com"
            className="flex items-center gap-3 p-4 rounded-md bg-light-navy hover:bg-lightest-navy transition-colors duration-300"
            aria-label="Send email"
          >
            <Mail size={20} className="text-green" />
            <span className="text-lightest-slate text-sm md:text-base">luwatesemma@gmail.com</span>
          </a>
          <a
            href="tel:+251900000000"
            className="flex items-center gap-3 p-4 rounded-md bg-light-navy hover:bg-lightest-navy transition-colors duration-300"
            aria-label="Call phone number"
          >
            <Phone size={20} className="text-green" />
            <span className="text-lightest-slate text-sm md:text-base">+251 90 000 0000</span>
          </a>
          <a
            href="https://maps.google.com/?q=Addis Ababa, Ethiopia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-md bg-light-navy hover:bg-lightest-navy transition-colors duration-300"
            aria-label="Open address in maps"
          >
            <MapPin size={20} className="text-green" />
            <span className="text-lightest-slate text-sm md:text-base">Addis Ababa, Ethiopia</span>
          </a>
        </div>
        
        {isSubmitted ? (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green p-4 border border-green rounded-md bg-green/10"
            >
                Thank you for your message! I'll be in touch soon.
            </motion.div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-light-navy border border-lightest-navy rounded-md focus:outline-none focus:ring-2 focus:ring-green text-lightest-slate"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-light-navy border border-lightest-navy rounded-md focus:outline-none focus:ring-2 focus:ring-green text-lightest-slate"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-light-navy border border-lightest-navy rounded-md focus:outline-none focus:ring-2 focus:ring-green text-lightest-slate"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-3 w-full border border-green text-green font-semibold rounded-md hover:bg-green/10 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
        )}
      </div>
    </Section>
  );
};

export default Contact;

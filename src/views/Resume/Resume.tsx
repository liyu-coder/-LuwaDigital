import React from 'react';
import Section from '@components/layout/Section';
import { SKILLS } from '@constants';

const Resume: React.FC = () => {
  return (
    <Section id="resume" title="Resume">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-light-navy p-6 rounded-lg border border-lightest-navy/20 space-y-4">
          <h3 className="text-lightest-slate text-xl font-semibold">Summary</h3>
          <p className="text-slate">
            Full-stack developer focused on building accessible, user-centered products with modern web technologies.
          </p>
          <a
            href="/Luwa_Tesemma_FullStack_Developer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center justify-center px-6 py-3 border border-green text-green rounded-md hover:bg-green/10 transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>

        <div className="bg-light-navy p-6 rounded-lg border border-lightest-navy/20 space-y-4">
          <h3 className="text-lightest-slate text-xl font-semibold">Education</h3>
          <ul className="space-y-3 text-slate">
            <li>
              <div className="text-lightest-slate font-medium">Your Degree or Course</div>
              <div className="text-slate text-sm">Your Institution • Year</div>
            </li>
          </ul>
        </div>

        <div className="bg-light-navy p-6 rounded-lg border border-lightest-navy/20 space-y-4 md:col-span-2">
          <h3 className="text-lightest-slate text-xl font-semibold">Core Skills</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <span
                key={s.name}
                className="px-3 py-1 rounded-full border border-lightest-navy/30 text-light-slate text-sm"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Resume;

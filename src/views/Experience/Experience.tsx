import React from 'react';
import Section from '@components/layout/Section';
import { EXPERIENCE } from '@constants';
import type { ExperienceItem } from '@models';
import { ChevronRight } from 'lucide-react';

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-lightest-slate">
      {item.role} <span className="text-green">@ {item.company}</span>
    </h3>
    <p className="text-sm font-mono text-slate mb-4">{item.date}</p>
    <ul className="space-y-2">
      {item.description.map((point, index) => (
        <li key={index} className="flex">
          <ChevronRight className="text-green w-5 h-5 mt-1 mr-2 flex-shrink-0" />
          <span className="text-light-slate">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Where I've Worked">
      <div className="relative border-l-2 border-lightest-navy pl-8">
        {EXPERIENCE.map((item, index) => (
            <div key={index} className="relative">
                <div className="absolute -left-[38px] top-1 w-4 h-4 bg-green rounded-full border-4 border-navy"></div>
                <ExperienceCard item={item} />
            </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;

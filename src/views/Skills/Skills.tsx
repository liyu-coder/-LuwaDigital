import React from 'react';
import Section from '@components/layout/Section';
import { SKILLS } from '@constants';
import type { Skill } from '@models';
import { motion } from 'framer-motion';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const { name, icon: Icon } = skill;
  return (
    <motion.div
      className="bg-light-navy p-4 rounded-lg flex flex-col items-center justify-center text-center gap-2 transition-transform duration-300"
      whileHover={{ y: -5, scale: 1.05 }}
    >
      <Icon size={40} className="text-green" />
      <span className="text-light-slate font-medium">{name}</span>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Tech Stack">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;

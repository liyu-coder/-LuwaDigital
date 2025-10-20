import React from 'react';
import Section from '@components/layout/Section';
import { PROJECTS } from '@constants';
import ProjectCard from '@components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Things I've Built">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;

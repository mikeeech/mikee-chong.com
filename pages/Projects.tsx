import React from 'react';
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full px-15">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h1 className="uppercase tracking-widest py-7">Projects: STAY TUNED FOR MORE</h1>
        <p className="text-l tracking-widest uppercase text-[#FFEA75]">
          STAY TUNED FOR MY PROJECTS
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg="/"
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg="/"
            projectUrl="/property"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from 'react';
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="uppercase tracking-widest py-7">Projects</h2>
        <p className="text-l tracking-widest uppercase text-[#93234E]">
          Check out what I&apos;ve built!
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
          {/* TODO: add projects */}
        </div>
      </div>
    </div>
  );
};

export default Projects;

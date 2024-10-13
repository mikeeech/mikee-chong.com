import Heading from '@/components/Heading';
import ProjectItem from '@/components/ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto py-16 px-20">
        <Heading title='Projects: STAY TUNED FOR MORE'/>
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

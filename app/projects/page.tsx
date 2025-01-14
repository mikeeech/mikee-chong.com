import Heading from '@/components/Heading';
import ProjectItem from '@/components/ProjectItem';
// import ProjectItem from '@/components/ProjectItem';

const Projects = () => {
  return (
    <div
      id='projects'
      className='flex h-screen w-full items-center justify-center'
    >
      {/* <div className='max-w-[1240px] mx- py-16 px-20'> */}
      <div className='text-center'>
        {/* <Heading title='Projects: STAY TUNED FOR MORE!' /> */}
        <div className='grid gap-8 md:grid-cols-2'>
          <ProjectItem
            title='CircleBe'
            backgroundImg='/projectImgs/circlebe.png'
            projectUrl='/circlebe'
            tech='React JS'
          />
          <ProjectItem
            title='Property Finder'
            backgroundImg='/projectImgs/circlebe.png'
            projectUrl='/property'
            tech='React JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

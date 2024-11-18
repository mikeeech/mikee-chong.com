import Heading from '@/components/Heading';

const Research = () => {
  return (
    <div
      id='projects'
      className='flex h-screen w-full items-center justify-center'
    >
      {/* <div className='max-w-[1240px] mx- py-16 px-20'> */}
      <div className='text-center'>
        <Heading title='Research: STAY TUNED FOR MORE!' />
        {/* <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg='/'
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Property Finder'
            backgroundImg='/'
            projectUrl='/property'
            tech='React JS'
          />
        </div> */}
      </div>
    </div>
  );
};

export default Research;

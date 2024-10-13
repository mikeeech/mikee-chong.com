import Markdown from '@/components/Markdown';
import path from 'path';
import Image from 'next/image';
import fs from 'fs';
import Heading from '@/components/Heading';
import isMobile from 'react-device-detect';

const About = () => {
  const markdownPath = path.join(process.cwd(), '/content/about.md');
  const markdown = fs.readFileSync(markdownPath, 'utf-8');

  return (
    <div id='about' className={`flex w-full items-center px-20 ${isMobile ? 'flex-col' : 'md:h-screen'}`}>
      {isMobile ? (
        <>
          <div className='m-auto flex h-auto w-full items-center justify-center rounded-xl p-4'>
          <Heading title='About Me' />
            <Image
              className='rounded-xl'
              src='/assets/about.jpg'
              width={300}
              height={500}
              alt='/'
            />
          </div>

          {/* </div> */}
          {/* <div className='col-span-2'> */}
            <Markdown content={markdown} />
        </>
      ) : (
        <>
          <div className='col-span-2'>
            <Heading title='About Me' />
            <Markdown content={markdown} />
          </div>
          <div className='m-auto flex h-auto w-full items-center justify-center rounded-xl p-4'>
            <Image
              className='rounded-xl'
              src='/assets/about.jpg'
              width={300}
              height={500}
              alt='/'
            />
          </div>
        </>
      )}
    </div>
  );
};

export default About;

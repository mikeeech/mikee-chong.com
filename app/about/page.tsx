import isMobile from 'react-device-detect';
import path from 'path';
import Image from 'next/image';
import fs from 'fs';
import Markdown from '@/components/Markdown';
import Heading from '@/components/Heading';

const About = () => {
  const markdownPath = path.join(process.cwd(), '/content/about.md');
  const markdown = fs.readFileSync(markdownPath, 'utf-8');

  return (
  <>
    <div className='flex items-center w-full px-14 py-20 md:h-screen'>
      <div className='col-span-2'>
        <Heading title='About Me'/>
        <div className='pt-5'>
        <Markdown content={markdown} />
        </div>
      </div>
        {!isMobile && <div className='m-auto flex h-auto w-full items-center justify-center rounded-xl pt-10'>
          <Image
            className='rounded-xl'
            src='/assets/about.jpg'
            width={300}
            height={500}
            alt='/'
          />
        </div>
        }
    </div>
  </>
  );
};

export default About;

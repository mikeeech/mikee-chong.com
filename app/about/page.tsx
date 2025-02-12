import path from 'path';
import Image from 'next/image';
import fs from 'fs';
import Markdown from '@/components/Markdown';

const About = () => {
  const markdownPath = path.join(process.cwd(), '/content/about.md');
  const markdown = fs.readFileSync(markdownPath, 'utf-8');

  return (
    <div className='flex w-full items-center px-14 pb-10 pt-28 md:px-96 md:pt-28'>
      <div className='md:pr-5'>
        <Markdown content={markdown} />
      </div>
      {/* <div className='m-auto hidden h-auto w-full items-center justify-center rounded-xl px-5 pt-10 md:flex'>
        <Image
          className='min-h-[400px] min-w-[300px] rounded-xl'
          src='/assets/about.jpg'
          width={300}
          height={500}
          alt='/'
        />
      </div> */}
    </div>
  );
};

export default About;

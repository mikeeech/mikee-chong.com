import Markdown from '@/components/Markdown';
import path from 'path';
import React from 'react';
import Image from 'next/image';
import fs from 'fs';

const About = () => {
  const markdownPath = path.join(process.cwd(), '/content/about.md');
  const markdown = fs.readFileSync(markdownPath, 'utf-8');

  return (
    <div
      id='about'
      className='flex w-full items-center px-20 pb-10 md:h-screen'
    >
      <div className='col-span-2'>
        <h1 className='py-7 uppercase tracking-widest'>About me</h1>
        <Markdown content={markdown} />
      </div>
      <div className='shadow-l m-auto flex h-auto w-full items-center justify-center rounded-xl p-4'>
        <Image
          className='rounded-xl'
          src='/assets/about.jpg'
          width={300}
          height={500}
          alt='/'
        />
      </div>
    </div>
  );
};

export default About;

import Markdown from '@/components/Markdown';
import path from 'path';
import React from 'react';
import Image from 'next/image';
import fs from 'fs';

const About = () => {
  const markdownPath = path.join(process.cwd(), '/content/about.md');
  const markdown = fs.readFileSync(markdownPath, 'utf-8');

  return (
    <div id="about" className="w-full md:h-screen flex items-center px-5">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="uppercase tracking-widest py-7">About me</h1>
          <Markdown content={markdown} />
        </div>
        <div className="w-full h-auto m-auto shadow-l rounded-xl flex items-center justify-center p-4">
          <Image
            className="rounded-xl"
            src="/assets/about.jpg"
            width={300}
            height={500}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

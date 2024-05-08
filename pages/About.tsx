import Markdown from '@/components/Markdown';
import path from 'path';
import React from 'react';
import Image from 'next/image';
import fs from 'fs';

const About = () => {
  const markdownPath = path.join(process.cwd(), '/content/about.md');
  const markdown = fs.readFileSync(markdownPath, 'utf-8');

  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="uppercase tracking-widest py-7">About me</h2>
          <Markdown content={markdown} />
          {/* TODO: Write about content */}
        </div>
        <div className="w-full h-auto m-auto shadow-l rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/assets/profile.jpg"
            width={300}
            height={500}
            alt="/"
          />
          {/* TODO: Add image? */}
        </div>
      </div>
    </div>
  );
};

export default About;

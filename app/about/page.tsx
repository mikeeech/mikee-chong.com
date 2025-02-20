import path from 'path';
import fs from 'fs';
import Markdown from '@/components/Markdown';

const About = () => {
  const markdownPath = path.join(process.cwd(), '/content/about.md');
  const markdown = fs.readFileSync(markdownPath, 'utf-8');

  return (
    <div className='flex min-h-[calc(100vh-5rem)] w-full items-center px-4 py-8 sm:px-8 md:px-12 lg:px-24 xl:px-48 2xl:px-64'>
      <div className='mx-auto max-w-4xl'>
        <Markdown content={markdown} />
      </div>
    </div>
  );
};

export default About;

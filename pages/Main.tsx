import Markdown from '@/components/Markdown';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

const Main = () => {
  const markdownPath = path.join(process.cwd(), '/content/maintext.md');
  const markdown = fs.readFileSync(markdownPath, 'utf-8');

  return (
    <div className="flex items-center justify-center h-fit relative z-0 mx-auto max-w-screen-sm py-10">
      <div className="flex flex-col items-center w-full max-w-[1240px]">
        <div className='flex justify-center py-16'>
          <Image
            src='/assets/profile.jpg'
            alt='Main Photo'
            width={210}
            height={210}
            className='border-50 rounded-full'
          />
        </div>
        <div className='pl-[13%] pr-[7%] text-left'>
          <Markdown content={markdown} />
        </div>
      </div>
    </div>
  );
};

export default Main;

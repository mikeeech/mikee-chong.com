import Markdown from '@/components/Markdown';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

export default function Home() {
  const markdownPath = path.join(process.cwd(), '/content/maintext.md');
  const markdown = fs.readFileSync(markdownPath, 'utf-8');

  return (
    <div className='relative z-0 mx-auto flex h-fit max-w-screen-sm items-center justify-center py-10'>
      <div className='flex w-full max-w-[1240px] flex-col items-center'>
        <div className='flex justify-center py-16'>
          <Image
            src='/assets/profile.jpg'
            alt='Main Photo'
            width={210}
            height={210}
            className='border-50 rounded-full'
          />
        </div>
        <div className='pl-[18%] pr-[7%] text-left'>
          <Markdown content={markdown} />
        </div>
      </div>
    </div>
  );
}

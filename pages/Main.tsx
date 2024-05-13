import Markdown from '@/components/Markdown';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

const Main = () => {
  const markdownPath = path.join(process.cwd(), '/content/maintext.md');
  const markdown = fs.readFileSync(markdownPath, 'utf-8');

  return (
    <main id='main'>
      <Navbar />
      <div className='fixed-page relative z-0 mx-auto max-w-screen-sm pt-10'>
        <div className='flex h-full w-full max-w-[1240px] items-center justify-center'>
          <div>
            <div className='flex justify-center pb-12 pt-20'>
              <Image
                src='/assets/profile.jpg'
                alt='Photo of Mikee'
                width={230}
                height={230}
                className='border-50 rounded-full'
              />
            </div>
            <div className='pl-20 pr-12 text-left'>
              <Markdown content={markdown} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

import Markdown from '@/components/Markdown';
// import Navbar from '@/components/Navbar';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import Footer from '@/components/Footer';

const Main = () => {
  const markdownPath = path.join(process.cwd(), '/content/maintext.md');
  const markdown = fs.readFileSync(markdownPath, 'utf-8');

  return (
    <>
      {/* <Navbar /> */}
        <div className='fixed-page relative z-0 mx-auto max-w-screen-sm pt-16'>
          <div className='flex-col h-full w-full max-w-[1240px] items-center justify-center'>
              <div className='flex justify-center py-8'>
                <Image
                  src='/assets/profile.jpg'
                  alt='Main Photo'
                  width={210}
                  height={210}
                  className='border-50 rounded-full'
                />
              </div>
              <div className='pl-[13%] pr-[7%] pb-9 text-left'>
                <Markdown content={markdown} />
              </div>
              <Footer />
          </div>
        </div>
    </>
  );
};

export default Main;

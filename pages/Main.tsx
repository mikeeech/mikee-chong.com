import Markdown from '@/components/Markdown';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

const Main = () => {
  const markdownPath = path.join(process.cwd(), '/content/maintext.md');
  const markdown = fs.readFileSync(markdownPath, 'utf-8');

  return (
    <main id="main">
      <Navbar />
      <div className="mx-auto mb-12 pt-20 max-w-screen-sm relative fixed-page  z-0">
        <div className="max-w-[1240px] w-full h-full flex justify-center items-center">
          <div>
            <div className="py-5 flex justify-center pt-20">
              <Image
                src="/assets/profile.jpg"
                alt="Photo of Mikee"
                width={230}
                height={230}
                className="rounded-full"
              />
            </div>
            <div className='text-left pl-10'>
            <Markdown content={markdown} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

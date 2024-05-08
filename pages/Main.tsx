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
      <div className="mx-auto mb-12 pt-20 max-w-screen-lg text-center relative fixed-page z-0">
        <div className="max-w-[1240px] w-full h-full flex justify-center items-center">
          <div>
            <div className="pb-1 pt-5">
              <h1 className="font-honk">Welcome to my page!</h1>
            </div>
            <div className="py-8 flex justify-center">
              <Image
                src="/assets/profile.jpg"
                alt="Photo of Mikee"
                width={230}
                height={230}
                className="rounded-full"
              />
              {/* TODO: find better pic */}
            </div>
            <Markdown content={markdown} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

import Image from 'next/image';
import Link from 'next/link';

interface ProjectItemProps {
  title: string;
  backgroundImg: string;
  tech: string;
  projectUrl: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
}) => {
  return (
    <div className='relative-flex group h-auto w-full items-center justify-center rounded-xl from-[#FFFFFF] to-[#FFFFFF] p-4 shadow-xl hover:bg-gradient-to-r'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={backgroundImg}
        width={500}
        height={300}
        alt='/'
      />
      <div className='absolute left-[50%] top-[50%] hidden translate-x-[50%] translate-y-[50%] group-hover:block'>
        <h3 className='text-center text-2xl tracking-wider text-white'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-center text-white'>{tech}</p>
        <Link href={projectUrl}>
          <p className='cursor-pointer rounded-lg bg-white py-3 text-center text-lg font-bold text-gray-700'>
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;

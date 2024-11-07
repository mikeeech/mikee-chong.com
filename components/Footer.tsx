export default function Footer() {
  return (
    <div className='flex items-center justify-center px-10 py-3 text-black'>
      <p className='text-[8px] text-black'>
        Built from scratch using Next.js and Tailwind CSS. {''}
        Check out the source code on {''}
        <a
          target='_blank'
          className='underline hover:text-black'
          href='https://github.com/mikeeech/mikee-chong.com'
          rel='noreferrer noopener'
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}

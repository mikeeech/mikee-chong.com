export default function Footer() {
  return (
    <div className='mb-20 flex justify-center py-5 w-full items-center text-black'>
      <p className='text-xs text-black'>
        Built from scratch using Next.js and Tailwind CSS.{''}
        <br />
        {''} Check out the source code on {''}
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

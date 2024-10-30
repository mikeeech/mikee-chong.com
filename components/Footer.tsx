export default function Footer() {
  return (
    <div className='flex justify-center py-3 items-center text-black'>
      <p className='text-[10px] text-black'>
        Built from scratch using Next.js and Tailwind CSS.
        <br />
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

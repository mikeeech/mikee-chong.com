'use client';
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 20) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, [window]);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        shadow
          ? 'fixed z-[100] h-20 w-full bg-[#FFEA75] shadow-xl'
          : 'fixed z-[100] h-20 w-full bg-[#FFEA75]'
      }
    >
      <div className='2xl:px16 ml-5 flex h-full w-full items-center justify-between px-2'>
        <h2>
          <Link href='/'>mikee-chong</Link>
        </h2>
        <div>
          <ul className='mr-5 hidden font-sometype-mono md:flex'>
            <li className='ml-10 border-[#86305a] text-sm uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 border-[#86305a] text-sm uppercase hover:border-b'>
              <Link href='/about'>About</Link>
            </li>
            <li className='ml-10 border-[#86305a] text-sm uppercase hover:border-b'>
              <Link href='/projects'>Projects</Link>
            </li>
            <li className='ml-10 border-[#86305a] text-sm uppercase hover:border-b'>
              <Link href='/research'>Research</Link>
            </li>
            <li className='ml-10 mr-5 border-[#86305a] text-sm uppercase hover:border-b'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className='pr-10 md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden' : ''
        }
      >
        <div
          className={
            nav
              ? 'md-w[45%] fixed left-0 top-0 h-screen w-[75%] bg-[#FFEA75] p-10 duration-500 ease-in sm:w-[60%]'
              : 'fixed left-[-100%] top-0 p-10 duration-500 ease-in'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <h2>mikee-chong</h2>
              <div
                onClick={handleNav}
                className='cursor-pointer rounded-full p-3 shadow-lg'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='my-4 border-b border-[#86305a] pt-5'></div>
          </div>
          <div className='flex flex-col py-4'>
            <ul className='uppercase'>
              <Link href='/'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 font-sometype-mono text-sm'
                >
                  Home
                </li>
              </Link>
              <Link href='/about'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 font-sometype-mono text-sm'
                >
                  About
                </li>
              </Link>
              <Link href='/projects'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 font-sometype-mono text-sm'
                >
                  Projects
                </li>
              </Link>
              <Link href='/research'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 font-sometype-mono text-sm'
                >
                  Research
                </li>
              </Link>
              <Link href='/contact'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 font-sometype-mono text-sm'
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-20'>
              <p className='py-4 font-sometype-mono text-sm'>
                LET&apos;S CONNECT!
              </p>
              <div className='my-4 flex w-full items-center justify-between sm:w-[80%]'>
                <a
                  href='linkedin.in/mikeechong'
                  target='_blank'
                  title='Linkedin'
                  rel='noreferrer noopener'
                >
                  <div className='cursor-pointer rounded-full p-3 shadow-lg duration-300 ease-in hover:scale-105'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/mikeeech'
                  target='_blank'
                  title='GitHub'
                  rel='noreferrer noopener'
                >
                  <div className='cursor-pointer rounded-full p-3 shadow-lg duration-300 ease-in hover:scale-105'>
                    <FaGithub />
                  </div>
                </a>
                <a
                  href='mailto:hello@mikee-chong.com'
                  target='_blank'
                  title='GitHub'
                  rel='noreferrer noopener'
                >
                  <div className='cursor-pointer rounded-full p-3 shadow-lg duration-300 ease-in hover:scale-105'>
                    <AiOutlineMail />
                  </div>
                </a>
                <div className='cursor-pointer rounded-full p-3 shadow-lg duration-300 ease-in hover:scale-105'>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

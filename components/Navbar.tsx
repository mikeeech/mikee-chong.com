'use client';
import '../app/globals.css';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        shadow
          ? 'fixed w-full shadow-xl h-20 z-[100] bg-[#FFEA75]'
          : 'fixed w-full h-20 z-[100] bg-[#FFEA75]'
      }
    >
      <div className='flex justify-between items-center w-full h-full ml-5 px-2 2xl:px16'>
        <h2>mikee-chong</h2>
        <div>
          <ul className='hidden md:flex font-sometype-mono mr-5'>
            <li className='ml-10 text-sm uppercase hover:border-b border-[#86305a]'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b border-[#86305a]'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b border-[#86305a]'>
              <Link href='/#skills'>Skills</Link>
            </li>
            {/* <li className='ml-10 text-sm uppercase hover:border-b border-[#86305a]'>
              <Link href='/#projects'>Projects</Link>
            </li> */}
            <li className='ml-10 mr-5 text-sm uppercase hover:border-b border-[#86305a]'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className='md:hidden pr-10'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md-w[45%] h-screen bg-[#FFEA75] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <h2>mikee-chong</h2>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='pt-5 border-b border-[#86305a] my-4'></div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-sm font-sometype-mono'
                >
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-sm font-sometype-mono'
                >
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-sm font-sometype-mono'
                >
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-sm font-sometype-mono'
                >
                  Projects
                </li>
              </Link>
              <Link href='/#contacts'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 text-sm font-sometype-mono'
                >
                  Contacts
                </li>
              </Link>
            </ul>
            <div className='pt-20'>
              <p className='py-4 text-sm font-sometype-mono'>
                LET&apos;S CONNECT!
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='linkedin.in/mikeechong'
                  target='_blank'
                  title='Linkedin'
                  rel='noreferrer noopener'
                >
                  <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/mikeeech'
                  target='_blank'
                  title='GitHub'
                  rel='noreferrer noopener'
                >
                  <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <a
                  href='mailto:hello@mikee-chong.com'
                  target='_blank'
                  title='GitHub'
                  rel='noreferrer noopener'
                >
                  <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </a>
                <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
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

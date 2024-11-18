'use client';
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';
import clsx from 'clsx';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isShadowVisible, setIsShadowVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShadowVisible(window.scrollY >= 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const closeNav = () => setIsNavOpen(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/research', label: 'Research' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div
      className={clsx(
        'fixed z-[100] h-20 w-full bg-[#FFEA75] transition-shadow duration-300',
        { 'shadow-xl': isShadowVisible }
      )}
    >
      <div className='2xl:px16 ml-5 flex h-full w-full items-center justify-between px-2'>
        <h2>
          <Link href='/'>mikee-chong</Link>
        </h2>
        <div>
          {/* desktop navbar */}
          <ul className='mr-5 hidden font-sometype-mono md:flex'>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className='ml-10 border-[#86305a] text-sm uppercase hover:border-b'
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* mobile menu icon */}
          <div
            onClick={toggleNav}
            className='pr-10 md:hidden'
            aria-label='Toggle navigation menu'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      {isNavOpen && (
        <div className='fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden'>
          <div className='fixed left-0 top-0 h-screen w-[75%] bg-[#FFEA75] p-10 duration-500 ease-in sm:w-[60%]'>
            <div className='flex w-full items-center justify-between'>
              <h2>mikee-chong</h2>
              <div
                onClick={closeNav}
                className='cursor-pointer rounded-full p-3 shadow-lg'
                aria-label='Close navigation menu'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='my-4 border-b border-[#86305a] pt-5'></div>

            {/* mobile nav links */}
            <ul className='flex flex-col uppercase'>
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  onClick={closeNav}
                  className='py-4 font-sometype-mono text-sm'
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <div className='pt-20'>
              <p className='py-4 font-sometype-mono text-sm'>
                LET&apos;S CONNECT!
              </p>
              <div className='my-4 flex w-full items-center justify-between sm:w-[80%]'>
                <a
                  href='https://linkedin.com/in/mikeechong'
                  target='_blank'
                  rel='noreferrer noopener'
                  title='LinkedIn'
                  className='cursor-pointer rounded-full p-3 shadow-lg duration-300 ease-in hover:scale-105'
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href='https://github.com/mikeeech'
                  target='_blank'
                  rel='noreferrer noopener'
                  title='GitHub'
                  className='cursor-pointer rounded-full p-3 shadow-lg duration-300 ease-in hover:scale-105'
                >
                  <FaGithub />
                </a>
                <a
                  href='mailto:hello@mikee-chong.com'
                  target='_blank'
                  rel='noreferrer'
                  title='Email'
                  className='cursor-pointer rounded-full p-3 shadow-lg duration-300 ease-in hover:scale-105'
                >
                  <AiOutlineMail />
                </a>
                <div
                  className='cursor-pointer rounded-full p-3 shadow-lg duration-300 ease-in hover:scale-105'
                  title='Resume'
                >
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div id='contact' className='w-full px-20 pt-20 lg:h-screen'>
      <h1 className='py-7 uppercase tracking-widest'>Contact</h1>
      <div className='grid gap-8 pb-12 lg:grid-cols-5'>
        {/* left side */}
        <div className='display:flex col-span-3 h-full w-full rounded-xl p-3 lg:col-span-2'>
          <Image
            className='rounded-full'
            src='/assets/contact.jpg'
            width={230}
            height={230}
            alt='/'
          />
          <h2 className='pb-5 pt-14 font-extrabold uppercase'>Mikee Chong</h2>
          <p className='pl-1 pt-5 font-bold uppercase text-black'>
            More ways to find me:
          </p>
          <div className='flex justify-items-start gap-8 pt-5'>
            <a
              href='https://www.linkedin.com/in/mikeechong/'
              target='_blank'
              title='linkedin'
              rel='noreferrer noopener'
            >
              <div className='cursor-pointer rounded-full p-6 shadow-lg duration-300 ease-in hover:scale-110'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/mikeeech'
              target='_blank'
              title='github'
              rel='noreferrer noopener'
            >
              <div className='cursor-pointer rounded-full p-6 shadow-lg duration-300 ease-in hover:scale-110'>
                <FaGithub />
              </div>
            </a>
            <a
              href='mailto:hello@mikee-chong.com'
              target='_blank'
              title='email'
              rel='noreferrer noopener'
            >
              <div className='cursor-pointer rounded-full p-6 shadow-lg duration-300 ease-in hover:scale-110'>
                <AiOutlineMail />
              </div>
            </a>
          </div>
        </div>
        {/* right side */}
        <div className='col-span-3 h-auto w-full rounded-xl'>
          <div>
            <form
              action='https://getform.io/f/pbnvymjb'
              method='POST'
              encType='multipart/form-data'
            >
              <div className='grid w-full gap-4 py-2 md:grid-cols-2'>
                <div className='flex flex-col'>
                  <label htmlFor='name'>Full Name (Required)</label>
                  <input id='name' type='text' placeholder='' name='name' />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='phone number'>Email (Required)</label>
                  <input
                    id='phone number'
                    type='text'
                    placeholder=''
                    name='phone'
                  />
                </div>
              </div>
              <div className='flex flex-col py-2'>
                <label htmlFor='subject'>Subject (Required)</label>
                <input id='subject' placeholder='' type='text' />
              </div>
              <div className='flex flex-col py-2'>
                <label htmlFor='message'>Message (Required)</label>
                <textarea id='message' placeholder='' rows={10}></textarea>
              </div>
              <button className='mt-4 w-full p-4'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <div className='flex justify-center pb-5 pt-12'>
        <Link href='/'>
          <div className='cursor-pointer rounded-full p-4 shadow-lg duration-300 ease-in hover:scale-110'>
            <HiOutlineChevronDoubleUp size={30} className='text-[#86305a]' />
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

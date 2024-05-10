import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen px-5">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <h1 className="uppercase tracking-widest py-7">Contact</h1>
        <div className="grid lg:grid-cols-5 gap-8 pb-12">
          {/* left side */}
          <div className="col-span-3 lg:col-span-2 w-full h-full rounded-xl p-15">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-full"
                  src="/assets/contact.jpg"
                  width={230}
                  height={230}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="pt-14 pb-5 uppercase font-extrabold">Mikee Chong</h2>
              </div>
              <div>
                <p className="uppercase pt-5 text-black pl-1 font-bold">More ways to find me:</p>
                <div className="flex gap-8 pt-5 justify-items-start">
                  <a
                    href="https://www.linkedin.com/in/mikeechong/"
                    target="_blank"
                    title="linkedin"
                    rel="noreferrer noopener"
                  >
                    <div className="rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/mikeeech"
                    target="_blank"
                    title="github"
                    rel="noreferrer noopener"
                  >
                    <div className="rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <div className="rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="col-span-3 w-full h-auto rounded-xl">
            <div>
              <form
                action="https://getform.io/f/pbnvymjb"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name">
                      Full Name (Required)
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder=""
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone number">
                      Email (Required)
                    </label>
                    <input
                      id="phone number"
                      type="text"
                      placeholder=""
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject">Subject (Required)</label>
                  <input
                    id="subject"
                    placeholder=""
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message">Message (Required)</label>
                  <textarea
                    id="message"
                    placeholder=""
                    rows={10}
                  ></textarea>
                </div>
                <button className="w-full p-4 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={30} className="text-[#86305a]" />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

import Head from "next/head";
import Main from "@/pages/Main";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mikee Chong</title>
      </Head>
      <Main />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

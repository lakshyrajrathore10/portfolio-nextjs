import React from 'react';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Skills from '@/components/Skills';
import Aboutme from '@/components/Aboutme'; 
import Contact from '@/components/Contactme';
import Project from '@/components/Project';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div>
      <Header />
      <Main />

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Project />
      </section>

      
      <section id="about-me">
        <Aboutme />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default page;

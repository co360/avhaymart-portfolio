import React, { Component } from 'react';
import './App.css';

// Components

// import {Button} from 'react-bootstrap';

import PageContainer from './components/PageContainer';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

import icons from './logo.json';
import work from './work.json';
import social from './social.json';

class App extends Component {
  render() {
    return (
      <PageContainer>
        <NavBar />
        {/* Hero Section */}
        <div id="hero-scroll">
          <Section odd='true'>
            <Hero social={social} />
          </Section>

          <Section>
            <AboutMe title="A little bit about me..." />
          </Section>

          <Section odd='true'>
            <Skills title="A few skills I have..."
              icons={icons} />
          </Section>

        </div>
        <div id="work-scroll">
          <Section>
            <MyWork title="My Work" work={work} />
          </Section>
        </div>

        <div id="contact-scroll">
          <Section odd='true'>
            <Contact title="Feel Free to Say Hi." />
          </Section>

          <Footer />
        </div>

      </PageContainer>
    );
  }
}

export default App;

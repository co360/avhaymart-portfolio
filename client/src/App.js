import React, { Component } from 'react';
import './App.css';

// Components

// import {Button} from 'react-bootstrap';

import PageContainer from './components/PageContainer';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills'

import icons from './logo.json';

class App extends Component {
  render() {
    return (
      <PageContainer>
        <NavBar />
        {/* Hero Section */}
        <Section>
          <Hero />
        </Section>

        <Section>
          <AboutMe title="A little bit about me..."/>
        </Section>

        <Section>
          <Skills title="A few skills I have..."
          icons={icons}/>
        </Section>

      </PageContainer>
    );
  }
}

export default App;

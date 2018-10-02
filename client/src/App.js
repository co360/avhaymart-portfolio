import React, { Component } from 'react';
import './App.css';

// Components

// import {Button} from 'react-bootstrap';

import PageContainer from './components/PageContainer';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Hero from './components/Hero';

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
          {/* <Title title="A little about me..." /> */}
        </Section>

        <Section>

        </Section>

      </PageContainer>
    );
  }
}

export default App;

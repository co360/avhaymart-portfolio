import React, { Component } from 'react';
import './App.css';

// Components

// import {Button} from 'react-bootstrap';

import PageContainer from './components/PageContainer';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <PageContainer>
        <NavBar />
      </PageContainer>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import './App.css';
import styled from 'styled-components';
import 'react-select/dist/react-select.css';

const MainContent = styled.div`
  height: 100%;
  margin-bottom: -50px;
  padding-bottom: 50px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContent>
          {this.props.children}
        </MainContent>
        <Footer/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ViewBox from './components/ViewBox';
import BurjKhalifa from './components/buildings/BurjKhalifa';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ViewBox>
          <BurjKhalifa renderedAtX={500}/>

        </ViewBox>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import './App.csss

import SearchBar from './components/SearchBar';
import GMapContainer from './components/GMap/GMapContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <GMapContainer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Movie from './components/Movie.js';


class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1>ፈልግ</h1>
        </header>
        <Movie />
      </div>
    );
  }
}

export default App;

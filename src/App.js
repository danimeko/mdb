import React, { Component ,Fragment } from 'react';
import './App.css';
import Movie from './components/Movie.js';


class App extends Component {
  render() {
    return (
      <Fragment  >
        <header className="App-header">
          <h1>ፈልግ</h1>
        </header>
        <Movie />
      </Fragment>
    );
  }
}

export default App;

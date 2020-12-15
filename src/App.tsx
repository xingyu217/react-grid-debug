import React from 'react';
import logo from './logo.svg';
import './App.css';

import ShowcaseLayout from './0-showcase';
import {SnipDemo} from './SnipDemo';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <SnipDemo/>
    <ShowcaseLayout
    className="Layout"
    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    rowHeight={100}
    />
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Logo from '../public/favicon.svg';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Esbuild: Hello World!
        </h1>
        <Logo className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://esbuild.github.io/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Esbuild
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './assets/vite.svg';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = React.useState(0);
  // Create the counter (+1 every second).
  React.useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Vite: Hello World!
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://cn.vitejs.dev/config/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Vite
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

import * as React from 'react';
import logo from './logo.png';
import LogoSvg from './logo.svg';
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
          Parcel: Hello World!
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Svg:
        </h1>
        <LogoSvg style={{ width: '200px', marginBottom: '32px' }} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://parceljs.org/getting-started/webapp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Parcel
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

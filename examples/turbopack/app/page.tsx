'use client';

import Link from 'next/link';
import * as React from 'react';
import logo from './logo.png';
import LogoSvg from './logo.svg';
import './page.css';

export default function App() {
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
          Turbopack (with next.js): Hello World!
        </h1>
        <img src={logo.src} className="App-logo" alt="logo" />
        <h1>
          Svg:
        </h1>
        <LogoSvg style={{ height: '100px', marginBottom: '32px' }} />
        <p>
          Edit <code>app/page.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <Link
            className="App-link"
            href="/sub"
          >
            to sub page
          </Link>
        </p>
        or
        <p>
          <a
            className="App-link"
            href="https://turbo.build/pack/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Turbopack
          </a>
        </p>
      </header>
    </div>
  );
}

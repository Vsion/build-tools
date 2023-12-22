import Link from 'next/link';
import * as React from 'react';

export default function App() {
  return (
    <h1 style={{ marginTop: '50px', textAlign: 'center' }}>
      this is sub page.
      
      <Link style={{ marginLeft: '8px' }} href="/">back</Link>
    </h1>
  );
}

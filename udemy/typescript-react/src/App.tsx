import React, { useState } from 'react';
import Hello from './components/Hello'

function App() {
  const [name, setName]=useState<string | null>('Momo');
  return (
    <div>
      <Hello message={`I am ${name}!`}></Hello>
    </div>
  );
}

export default App;

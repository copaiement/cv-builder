import './App.css'
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input 
        value={text}
        onChange={handleChange}
      />
      <button>Submit</button>
      <Display value={text} />
    </>
  )
}

function Display({ value }) {
  return (
    <h1>{value}</h1>
  )
}

export default App

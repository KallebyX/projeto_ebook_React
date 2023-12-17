// src/App.jsx
import React from 'react';
import PdfReader from './components/PdfReader';
import './App.css';

function App() {
  return (
    <div className="App">
      <PdfReader file="/assets/ebook.pdf" />
    </div>
  );
}

export default App;

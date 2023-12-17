// src/App.jsx
import React from 'react';
import EbookReader from './components/EbookReader';
import './App.css';

function App() {
  return (
    <div className="App">
      <EbookReader url="/assets/ebook.epub" />
    </div>
  );
}

export default App;

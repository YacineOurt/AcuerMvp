import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Note from './pages/Note';
import Export from './pages/Export';

const App = () => {
  return (
    <BrowserRouter  >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/note" element={<Note />} />
        <Route path="/export" element={<Export />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

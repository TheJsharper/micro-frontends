
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

const Home: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes >
            <Route path="/" element={<div>Home</div>} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
    </BrowserRouter>
  );
};

export default Home;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import AddReview from './components/AddReview';

function App() {
  return (
    <BrowserRouter>
      <div className='px-5 py-5'>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/add-review" element={<AddReview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
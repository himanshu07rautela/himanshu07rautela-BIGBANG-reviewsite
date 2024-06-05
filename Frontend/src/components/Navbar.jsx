import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import heading from '../assets/heading.png';
import './Navbar.css';
import Card from './Card';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='fixed grid grid-cols-12 items-center bg-white shadow-md py-4 w-full z-10'>
        <div className='col-span-2'>
          <img
            src={heading}
            alt='Heading'
            className='w-20 h-auto transform transition-transform duration-300 hover:scale-105'
          />
        </div>
        <div className='col-span-3'>
          {/* Additional content can go here if needed */}
        </div>
        <div className='col-span-6 flex justify-between px-4 hidden md:flex'>
          <Link to="/" className='nav-item text-2xl'>About</Link>
          <Link to="/reviews" className='nav-item text-2xl'>Reviews</Link>
          <Link to="/add-review" className='nav-item text-2xl'>Add one</Link>
        </div>
        <div className='col-span-1 md:hidden flex justify-end items-center px-4'>
          <button onClick={toggleMenu} className='text-3xl'>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-16 right-0 bg-white shadow-md w-full md:hidden transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col items-center py-20'>
          <Link to="/" className='nav-item text-2xl py-2'>About</Link>
          <Link to="/reviews" className='nav-item text-2xl py-2'>Reviews</Link>
          <Link to="/add-review" className='nav-item text-2xl py-2'>Add one</Link>
        </div>
      </div>
      <div className='flex-grow py-20'>
        <Card />
      </div>
    </div>
  );
}

export default Navbar;
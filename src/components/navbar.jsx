import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <header className="header bg-teal-500 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold tracking-tight text-orange-500 mr-4">
            <span className="text-white">BEA</span> 
            <span className="text-gradient-to-r from-amber-500 to-orange-300">Hotel</span> 
          </h1>
          <nav className="hidden sm:block text-xl px-16 text-center">
            <ul className="flex space-x-10 text-center">
              <li><Link to="/" className="hover:text-teal-500">Home</Link></li>
              <li><Link to="/packages" className="hover:text-teal-500">Packages</Link></li>
              <li><Link to="/restaurant" className="hover:text-teal-500">Restaurant</Link></li>
              <li><Link to="/contact" className="hover:text-teal-500">Contact Us</Link></li>
              <li><Link to="/faqs" className="hover:text-teal-500">FAQs</Link></li>
            </ul>
          </nav>
        </div>
        </div>
        </header>
    );
}

export default Navbar;
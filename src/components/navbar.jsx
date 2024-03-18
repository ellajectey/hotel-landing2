import React from 'react';

function navbar(props) {
    return (
        <header className="header bg-teal-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold tracking-tight text-orange-500 mr-4">
            <span className="text-white">BEA</span> 
            <span className="text-gradient-to-r from-amber-500 to-orange-600">Hotel</span> 
          </h1>
          <nav className="hidden sm:block text-xl px-16 text-center">
            <ul className="flex space-x-10">+
              <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
              <li><Link to="/packages" className="hover:text-orange-500">Packages</Link></li>
              <li><Link to="/restaurant" className="hover:text-orange-500">Restaurant</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500">Contact 
              Us</Link></li>
            </ul>
          </nav>
        </div>
        </div>
        </header>
    );
}

export default navbar;
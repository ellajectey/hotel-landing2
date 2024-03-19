import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div>
            <footer className="bg-teal-900 text-white p-1 ">
    <div className="flex flex-col items-center mt-3">
         <nav className="navbar flex space-x-6 justify-center">
         <ul className="flex space-x-4 ">
         <li><Link to="/" className="hover:text-teal-500">Home</Link></li>
              <li><Link to="/packages" className="hover:text-teal-500">Packages</Link></li>
              <li><Link to="/restaurant" className="hover:text-teal-500">Restaurant</Link></li>
              <li><Link to="/contact" className="hover:text-teal-500">Contact Us</Link></li>
              <li><Link to="/faqs" className="hover:text-teal-500">FAQs</Link></li>
         </ul>
          </nav>
        <p className="mt-4">&copy; 2024&nbsp; 
        All rights reserved.</p>
      </div>
    </footer>
        </div>
    );
}

export default Footer;
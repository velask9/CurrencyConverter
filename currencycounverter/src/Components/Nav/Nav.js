import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/currency-converter">Currency Converter</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;

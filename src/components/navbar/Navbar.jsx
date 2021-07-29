import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Blog Posts</h1>
      <div className='nav-options'>
        <Link to='/' className='links'>
          Home
        </Link>
        <Link to='/create' className='links'>
          New Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

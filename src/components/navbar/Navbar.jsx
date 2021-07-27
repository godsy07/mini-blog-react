import React from "react";
// import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Blog Posts</h1>
      <div className='nav-options'>
        <p>Home</p>
        <p>New Post</p>
      </div>
    </div>
  );
};

export default Navbar;

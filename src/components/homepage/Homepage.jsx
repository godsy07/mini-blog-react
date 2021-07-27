import React from "react";
import "./homepage.css";

const Homepage = ({ blogs }) => {
  return (
    <div className='homepage'>
      <h2>All Blogs</h2>
      {blogs.map((el) => (
        <p key={el.id}>{el.title}</p>
      ))}
    </div>
  );
};

export default Homepage;

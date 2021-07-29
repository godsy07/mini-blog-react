import React from "react";
import "./homepage.css";

const Homepage = ({ blogs }) => {
  return (
    <div className='homepage'>
      <h2>All Blogs</h2>
      {blogs.map((el) => (
        <div key={el.id}>
          <p>{el.title}</p>
          <span>Author: {el.author}</span>
        </div>
      ))}
    </div>
  );
};

export default Homepage;

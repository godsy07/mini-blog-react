import React from "react";

import "./bloglists.css";

const BlogLists = ({ blogs }) => {
  return (
    <div className='blog-lists'>
      {blogs.map((el) => (
        <div key={el.id} className='blog-preview'>
          <p>{el.title}</p>
          <span>Author: {el.author}</span>
        </div>
      ))}
    </div>
  );
};

export default BlogLists;

import React from "react";
import { Link } from "react-router-dom";

import "./bloglists.css";

const BlogLists = ({ blogs }) => {
  return (
    <div className='blog-lists'>
      {blogs.map((el) => (
        <div key={el.id} className='blog-preview'>
          <Link to={`/blogs/${el.id}`}>
            <h2>{el.title}</h2>
            <p>Author: {el.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogLists;

import React from "react";
import { useParams } from "react-router";
import useFetch from "../useFetch";

import "./blogitem.css";

const BlogItem = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:5000/blogs/" + id);

  return (
    <div className='blog-item'>
      {isLoading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogItem;

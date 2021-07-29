import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import useFetch from "../useFetch";

import "./blogitem.css";

const BlogItem = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:5000/blogs/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:5000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className='blog-item'>
      {isLoading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogItem;

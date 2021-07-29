import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./createblog.css";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const history = useHistory();

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);
    fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });

    setTitle("");
    setBody("");
    setAuthor("");
  };

  return (
    <div className='create-blog'>
      <h2>Add New Blog</h2>
      <form className='add-blog' onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author: </label>
        <input
          type='text'
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {isPending && <button disabled>Adding Blog....</button>}
        {!isPending && <button>Add Blog</button>}
      </form>
    </div>
  );
};

export default CreateBlog;

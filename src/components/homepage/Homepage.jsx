import React from "react";
import useFetch from "../useFetch";

import BlogLists from "../blog-lists/BlogLists";
import "./homepage.css";

const Homepage = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:5000/blogs/");

  return (
    <div className='homepage'>
      <h2>All Blogs</h2>

      {isLoading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {blogs && <BlogLists blogs={blogs} />}
    </div>
  );
};

export default Homepage;

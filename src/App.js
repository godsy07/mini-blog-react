import React from "react";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/Homepage";

const App = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    const fetchdata = (url) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setBlogs(data));
    };

    fetchdata("http://localhost:5000/blogs");
  }, []);

  return (
    <div className='app'>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path='/'>
          {blogs && <HomePage blogs={blogs} />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;

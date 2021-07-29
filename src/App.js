import React from "react";
import { Switch, Route } from "react-router-dom";
import useFetch from "./components/useFetch";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/Homepage";
import CreateBlog from "./components/createblog/CreateBlog";

const App = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:5000/blogs");

  return (
    <div className='app'>
      <header>
        <Navbar />
      </header>
      {isLoading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      <Switch>
        <Route exact path='/'>
          {blogs && <HomePage blogs={blogs} />}
        </Route>
        <Route exact path='/create'>
          <CreateBlog />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

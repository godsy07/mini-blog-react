import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/Homepage";
import CreateBlog from "./components/createblog/CreateBlog";
import BlogItem from "./components/blog-item/BlogItem";
import NotFound from "./components/NotFound.jsx";

const App = () => {
  return (
    <div className='app'>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/create'>
          <CreateBlog />
        </Route>
        <Route exact path='/blogs/:id'>
          <BlogItem />
        </Route>
        <Route exact path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

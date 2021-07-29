import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/Homepage";
import CreateBlog from "./components/createblog/CreateBlog";

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
      </Switch>
    </div>
  );
};

export default App;

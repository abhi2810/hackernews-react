import React from "react";
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import Comment from "./Pages/Comment";
import Header from "./components/Header";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/comment">
            <Comment />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

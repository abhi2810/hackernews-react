import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Home.css";

export default function Home() {
  return (
    <Jumbotron className="home">
      <h1>Hacker News</h1>
      <p>
        This is the React port of basic features from{" "}
        <a href="https://news.ycombinator.com/">Hacker News</a>.
        <br />
        Please refer to the{" "}
        <a href="https://github.com/HackerNews/API">api documentation</a> for
        more details.
      </p>
      <p>
        <Link className="btn btn-primary" to="/post/top">
          Top Posts
        </Link>
      </p>
    </Jumbotron>
  );
}

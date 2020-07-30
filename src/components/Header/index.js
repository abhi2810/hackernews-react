import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://news.ycombinator.com/y18.gif"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Hacker News
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav activeKey="/home">
          <Nav.Item>
            <Link className="nav-link active" to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/post/top">Top</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/post/new">New</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

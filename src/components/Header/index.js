import React from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export default function Header() {
  let location = useLocation();
  let [selected, setSelected] = React.useState("");

  React.useEffect(() => {
    console.log(location.pathname);
    switch (location.pathname) {
      case "/post/top":
        setSelected("top");
        break;
      case "/post/new":
        setSelected("new");
        break;
      default:
        setSelected("");
    }
  }, [location]);

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
            <Link
              className={clsx("nav-link", selected === "" && "active")}
              to="/"
            >
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className={clsx("nav-link", selected === "top" && "active")}
              to="/post/top"
            >
              Top
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className={clsx("nav-link", selected === "new" && "active")}
              to="/post/new"
            >
              New
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

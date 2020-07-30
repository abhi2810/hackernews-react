import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/post">Post</Link>
    </li>
    <li>
      <Link to="/comment">Comment</Link>
    </li>
  </ul>;
}
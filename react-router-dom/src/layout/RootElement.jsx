import React from "react";
import { Link, Outlet } from "react-router-dom";

function RootElement() {
  return (
    <div>
      <h1>Root Element</h1>
      <nav>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"about"}>
            <li>About</li>
          </Link>

          <Link to={"contact"}>
            <li>Contact</li>
          </Link>
          <Link to={"posts"}>
            <li>Posts</li>
          </Link>
        </ul>
      </nav>
      <main>
        <h2>Main Content</h2>
        <Outlet />
      </main>
    </div>
  );
}

export default RootElement;

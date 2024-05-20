import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function RootElement() {
  return (
    <div>
      <h1>Root Element</h1>
      <nav>
        <ul>
          {/* <Link to={"/"}>
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
          </Link> */}

          {/* NavLink */}
          {/* A special version of the <Link> that will add styling attributes(class=active) to the rendered element when it matches the current URL. with this active class we can style our link when they are in active state. active class keep highlighted */}
          <NavLink
            to={"/"}
            className={(obj) => {
              return obj.isActive ? "activeNav" : null;
            }}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"about"}
            className={(obj) => {
              return obj.isActive ? "activeNav" : null;
            }}
          >
            <li>About</li>
          </NavLink>

          <NavLink
            to={"contact"}
            className={(obj) => {
              return obj.isActive ? "activeNav" : null;
            }}
          >
            <li>Contact</li>
          </NavLink>
          <NavLink
            to={"posts"}
            className={(obj) => {
              return obj.isActive ? "activeNav" : null;
            }}
          >
            <li>Posts</li>
          </NavLink>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootElement;

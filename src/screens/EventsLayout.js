import React from "react";
import { Link, Outlet } from "react-router-dom";

const EventsLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Events/1">Events 1</Link>
          </li>
          <li>
            <Link to="/Events/2">Events 2</Link>
          </li>
          <li>
            <Link to="/Events/new">Add New Events</Link>
          </li>
        </ul>
      </nav>
      <Outlet context={{ role: "user" }} />
    </>
  );
};

export default EventsLayout;

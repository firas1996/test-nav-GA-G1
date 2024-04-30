import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const Events = () => {
  const { role } = useOutletContext();
  const navigate = useNavigate();
  const handelClick = () => {
    if (role === "admin") {
      navigate("/events/new");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <div>Events Screen</div>
      <button onClick={handelClick}>Add New Event</button>
    </>
  );
};

export default Events;

import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const EventDetails = () => {
  const { role } = useOutletContext();
  const { id } = useParams();
  return (
    <div style={{ backgroundColor: role === "admin" ? "red" : "yellow" }}>
      EventDetails {id} Screen
    </div>
  );
};

export default EventDetails;

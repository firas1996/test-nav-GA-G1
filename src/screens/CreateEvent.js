import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const CreateEvent = () => {
  const { role } = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (role != "admin") {
      navigate("/");
    }
  }, []);
  return <div>CreateEvent Screen</div>;
};

export default CreateEvent;

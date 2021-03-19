import React from "react";
import {BsFillBellFill} from "react-icons/bs";
import {useState, useEffect} from "react";
import axios from "axios";

export default function Notification(props) {
  useEffect(() => {
    axios.get("/api/appointments/").then((response) => {
      console.log("success!!");
      console.log("THIS IS RESPONSE:", response.data.length);
    });
  }, []);

  return <BsFillBellFill />;
}

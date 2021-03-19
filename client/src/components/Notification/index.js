import React from "react";
import {BsFillBellFill} from "react-icons/bs";
import {useState, useEffect} from "react";
import axios from "axios";

export default function Notification() {
  const [mode, setMode] = useState("empty");

  let appCount = 0;

  useEffect(() => {
    axios.get("/api/appointments/").then((response) => {
      console.log("success!!");

      appCount = response.data.length;
    });
  }, []);

  const compareApps = () => {
    axios.get("/api/appointments/").then((response) => {
      console.log("CHECKING");
      if (response.data.length !== appCount) {
        setMode("alert").then((appCount = response.data.length));
      }
    });
  };

  const checkNewApp = () => {
    setInterval(compareApps, 15000);
  };

  const removeAlert = () => {
    setMode("empty");
  };

  checkNewApp();

  return (
    <>
      {mode === "empty" ? (
        <BsFillBellFill className="notif-btn" onClick={removeAlert} />
      ) : (
        <BsFillBellFill className="notif-btn-alert" onClick={removeAlert} />
      )}
    </>
  );
}

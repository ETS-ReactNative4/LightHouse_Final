import React from "react";
import {BsFillBellFill} from "react-icons/bs";
import {useState, useEffect} from "react";
import axios from "axios";

export default function Notification(props) {
  const [mode, setMode] = useState("empty");
  let notifyAppoints;

  //let mode = "empty";
  const userID = props.user.id;

  let appCount = 0;

  useEffect(() => {
    axios.get(`/api/appointments/provider/${userID}`).then((response) => {
      console.log("success!!");

      appCount = response.data.length;
      checkNewApp();
    });
  }, []);

  const compareApps = () => {
    axios.get(`/api/appointments/provider/${userID}`).then((response) => {
      console.log(response);
      console.log(appCount);

      notifyAppoints = response.data;
      if (response.data.length !== appCount) {
        setMode("alert");
        appCount = response.data.length;
      }
    });
  };

  const checkNewApp = () => {
    setInterval(compareApps, 15000);
  };

  const removeAlert = () => {
    setMode("empty");
  };

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

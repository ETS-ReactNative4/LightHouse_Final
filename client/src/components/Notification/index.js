import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Overlay from "react-bootstrap/Overlay";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function Notification(props) {
  const [mode, setMode] = useState("empty");
  const history = useHistory();
  const goToLink = (link) => {
    history.push(link);
  };

  let notifyAppoints = [];

  //let mode = "empty";
  const userID = props.user.id;
  console.log("THIS IS USER ID:", userID);

  let appCount = 0;
  let countClient = 0;

  useEffect(() => {
    axios.get(`/api/appointments/provider/${userID}`).then((response) => {
      console.log("success!!");
      console.log("THIS IS COUNT FOR provider APP", response.data.length);

      appCount = response.data.length;

      axios.get(`/api/appointments/${userID}`).then((res) => {
        console.log("checked client side appointments");
        console.log("THIS IS COUNT FOR CLIENT APP", res.data.length);

        countClient = res.data.length;
        checkNewApp();
      });
    });
  }, []);
  // NOTIFICATIONS
  // CLIENT_ID_ID APPOINTMENT_ID NOTIFIED
  // 9 12 1

  // SELECT FROM APPOINTMENTS WHERE NOTIFIED = 0

  // UPDATE NOTIFIED = 1FROM APPOINTMENTS WHERE APPOINTMENT_ID IN (1,3,4,5,9)

  const compareApps = () => {
    axios.get(`/api/appointments/provider/${userID}`).then((response) => {
      console.log("THIS IS COUNT FOR PROVIDER APP", response.data.length);

      notifyAppoints.push(response.data);
      if (response.data.length !== appCount) {
        setMode("alert");
        appCount = response.data.length;
      }

      axios.get(`/api/appointments/${userID}`).then((res) => {
        console.log("checked client side appointments");
        console.log("THIS IS COUNT FOR CLIENT APP", res.data.length);
        console.log("THIS IS RES FOR CLIENT:", res.data);
        if (res.data.length !== countClient) {
          setMode("alert");
          countClient = res.data.length;
        }
      });
    });
  };

  const checkNewApp = () => {
    setInterval(compareApps, 5000);
  };

  const removeAlert = () => {
    setMode("empty");
    goToLink(`/appointments/${userID}`);
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

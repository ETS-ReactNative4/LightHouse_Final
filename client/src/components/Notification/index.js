import React from "react";
import {BsFillBellFill} from "react-icons/bs";
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

import axios from "axios";

export default function Notification(props) {
  const [mode, setMode] = useState("empty");
  const history = useHistory();
  const goToLink = (link) => {
    history.push(link);
  };

  let notifyAppoints = [];

  //let mode = "empty";
  const userID = props.user.id;

  let appCount = 0;
  let countClient = 0;

  useEffect(() => {
    axios.get(`/api/appointments/provider/${userID}`).then((response) => {
      appCount = response.data.length;

      axios.get(`/api/appointments/${userID}`).then((res) => {
        countClient = res.data.length;
        checkNewApp();
      });
    });
  }, []);

  const compareApps = () => {
    axios.get(`/api/appointments/provider/${userID}`).then((response) => {
      notifyAppoints.push(response.data);
      if (response.data.length !== appCount) {
        setMode("alert");
        appCount = response.data.length;
      }

      axios.get(`/api/appointments/${userID}`).then((res) => {
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

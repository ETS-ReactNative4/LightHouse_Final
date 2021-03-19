const express = require("express");
const router = express.Router();

module.exports = ({
  getAppointments,
  getAppointmentsByUserId,
  addAppointment,
}) => {
  router.get("/", (req, res) => {
    getAppointments()
      .then((apps) => res.json(apps))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.get("/:id", (req, res) => {
    // console.log("appointments",req.params.id);
    getAppointmentsByUserId(req.params.id)
      .then((result) => res.json(result))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  router.post("/", (req, res) => {
    const {
      title,
      rating,
      isConfirmed,
      users_id,
      start_date,
      end_date,
      services_id,
      availabilities_id,
    } = req.body.data;
    console.log("WHY THIS IS NOT WORKI", req.body);
    console.log("WHY THIS IS NOT WORKI", isConfirmed);
    addAppointment(
      title,
      rating,
      isConfirmed,
      users_id,
      start_date,
      end_date,
      services_id,
      availabilities_id
    )
      .then(() =>
        res.status(201).json({
          msg: "created",
        })
      )
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  return router;
};

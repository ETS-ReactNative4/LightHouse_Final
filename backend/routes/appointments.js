const express = require("express");
const router = express.Router();

module.exports = ({
  getAppointments,
  getAppointmentsByUserId,
  addAppointment,
  getAppForProvider,
  setIsConfirm,
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
    getAppointmentsByUserId(req.params.id)
      .then((result) => res.json(result))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.put("/:id", (req, res) => {
    setIsConfirm(req.body.isconfirmed, req.params.id)
      .then(() =>
        res.status(201).json({
          msg: "updated!",
        })
      )
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.get("/provider/:id", (req, res) => {
    getAppForProvider(req.params.id)
      .then((result) => res.json(result))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/", (req, res) => {
    console.log("WHY THIS IS NOT WORKjjjI", req.body);

    const {
      title,
      rating,
      isconfirmed,
      st_date,
      end_date,
      services_id,
      availabilities_id,
      users_id,
    } = req.body.data;
    // console.log("WHY THIS IS NOT WORKI", isConfirmed);

    addAppointment(
      title,
      rating,
      isconfirmed,
      st_date,
      end_date,
      services_id,
      availabilities_id,
      users_id
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

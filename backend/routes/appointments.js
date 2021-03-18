const express = require('express');
const router = express.Router();


module.exports = ({
  getAppointments,
  getAppointmentsByUserId
}) => {

  router.get('/', (req, res) => {
    getAppointments()
        .then((apps) => res.json(apps))
        .catch((err) => res.json({
            error: err.message
        }));
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
    return router;
};
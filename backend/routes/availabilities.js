const express = require('express');
const router = express.Router();

module.exports = ({
  getavailabilities,
  getAvailabilitiesByUserId,
  addAvailability
}) => {
    router.get('/', (req, res) => {
      getavailabilities()
          .then((avbl) => res.json(avbl))
          .catch((err) => res.json({
              error: err.message
          }));
    });

    router.get("/:id", (req, res) => {
      getAvailabilitiesByUserId(req.params.id)
        .then((result) => res.json(result))
        .catch((err) =>
          res.json({
            error: err.message,
          })
        );
    });
    router.post("/:id", (req, res) => {
      console.log("1",req.body.availability);
      console.log("2",req.params.id);
      const users_id = req.params.id;
      const { start_time, end_time } = req.body.availability;
      addAvailability(users_id, start_time, end_time)
        .then(() => res.status(201).json({
          msg : "created",
        }))
        .catch((err) =>
          res.json({
            error: err.message,
          })
        );
    });

    return router;
};
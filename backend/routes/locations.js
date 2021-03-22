const express = require("express");
const router = express.Router();

module.exports = ({ getLocations, getUserLocation }) => {

  router.get("/:id", (req, res) => {
    console.log(req.params.id);
    getUserLocation(req.params.id)
      .then((location) => res.json(location))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  router.get("/", (req, res) => {
    getLocations()
      .then((users) => res.json(users))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};

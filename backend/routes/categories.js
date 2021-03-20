const express = require("express");
const router = express.Router();

module.exports = ({ getCategories }) => {

  router.get("/", (req, res) => {
    getCategories()
      .then((results) => res.json(results))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};

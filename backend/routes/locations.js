const express = require('express');
const router = express.Router();


module.exports = ({
  getLocations
}) => {
    /* GET users listing. */

    router.get('/', (req, res) => {
      getLocations()
          .then((users) => res.json(users))
          .catch((err) => res.json({
              error: err.message
          }));
  });
    return router;
};
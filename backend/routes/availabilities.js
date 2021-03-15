const express = require('express');
const router = express.Router();


module.exports = ({
  getavailabilities
}) => {
    /* GET users listing. */

    router.get('/', (req, res) => {
      getavailabilities()
          .then((users) => res.json(users))
          .catch((err) => res.json({
              error: err.message
          }));
  });
    return router;
};
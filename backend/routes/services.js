const express = require('express');
const router = express.Router();


module.exports = ({
  getServices
}) => {
    /* GET users listing. */

    router.get('/', (req, res) => {
      getServices()
          .then((users) => res.json(users))
          .catch((err) => res.json({
              error: err.message
          }));
  });
    return router;
};
const express = require('express');
const router = express.Router();


module.exports = ({
  getAppointments
}) => {
    /* GET users listing. */

    router.get('/', (req, res) => {
      getAppointments()
          .then((users) => res.json(users))
          .catch((err) => res.json({
              error: err.message
          }));
  });
    return router;
};
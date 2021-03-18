const express = require('express');
const router = express.Router();


module.exports = ({
  getAppointments
}) => {

    router.get('/', (req, res) => {
      getAppointments()
          .then((users) => res.json(users))
          .catch((err) => res.json({
              error: err.message
          }));
  });
    return router;
};
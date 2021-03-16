const express = require('express');
const router = express.Router();


module.exports = ({
  getServices,
  getServicesByValue
}) => {
    /* GET users listing. */

    router.get('/', (req, res) => {
      getServices()
          .then((users) => res.json(users))
          .catch((err) => res.json({
              error: err.message
          }));
  });
  router.get('/:value', (req, res) => {
    getServicesByValue(req.params.value)
        .then((users) => res.json(users))
        .catch((err) => res.json({
            error: err.message
        }));
});
    return router;
};
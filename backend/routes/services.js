const express = require('express');
const router = express.Router();


module.exports = ({
  getServices,
  getServicesByValue,
  addService
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
        .then((services) => res.json(services))
        .catch((err) => res.json({
            error: err.message
        }));
});

  router.post("/new", (req, res) => {
    const { formTitle, formCategory, formDescription, formFee } = req.body.data;
    console.log("ThIS IS NEW",req.body);
    addService(formTitle, formCategory, formDescription, formFee)
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
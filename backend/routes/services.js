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
    const { title, category, description, fee } = req.body;
    console.log("ThIS IS NEW",req.body);
    addService(title, category, description, fee)
      // .then((service) => {
      //   if (service) {
      //     res.json({
      //       msg: "Sorry, a user account with this email already exists",
      //     });
      //   } else {
      //     return addService(title, category, description, fee );
      //   }
      // })
      .then((nService) => addService(title, category, description, fee ))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
    return router;
};
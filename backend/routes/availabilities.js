const express = require('express');
const router = express.Router();


module.exports = ({
  getavailabilities,
  getAvailabilitiesByUserId
}) => {
    router.get('/', (req, res) => {
      getavailabilities()
          .then((avbl) => res.json(avbl))
          .catch((err) => res.json({
              error: err.message
          }));
    });

    router.get("/:id", (req, res) => {
      console.log("Armins",req.params.id);
      getAvailabilitiesByUserId(req.params.id)
        .then((result) => res.json(result))
        .catch((err) =>
          res.json({
            error: err.message,
          })
        );
    });

    


    return router;
};
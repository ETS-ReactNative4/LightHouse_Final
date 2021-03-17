var express = require("express");
var router = express.Router();

module.exports = ({ getUsers, getUserByEmail, addUser, addLocation }) => {
  // /* GET home page. */
  router.post("/", (req, res) => {
    console.log("this is seb log", req.body.location);
    getUserByEmail(req.body.user.email).then((result) => {
      if (result) {
        // return res.json({
        //   msg: result,
        //   });
      } else {
        // const { name, email } = req.body;
        // console.log("this is givenName val", req.body.user);
        addUser(req.body.user.name, req.body.user.email).then((r) => {
          addLocation(
            req.body.location.address,
            req.body.location.city,
            req.body.location.postal,
            req.body.location.country,
            req.body.location.lat,
            req.body.location.long,
            r.id
          ).then((response) => console.log(response));
          return res.json({
            register: true,
            msg: r,
          });
          //DOTO armin implement and add location using the user id from the response of add user
        });
      }
    });
  });
  return router;
};

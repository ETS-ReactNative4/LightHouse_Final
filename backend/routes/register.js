var express = require("express");
var router = express.Router();

module.exports = ({ getUsers, getUserByEmail, addUser, getUsersPosts }) => {
  // /* GET home page. */
  router.post("/", (req, res) => {
    console.log("this is seb log", req.body.user.email);
    getUserByEmail(req.body.user.email).then((result) => {
      if (result) {
        // return res.json({
        //   msg: result,
        //   });
        return res.redirect("/services");
      } else {
        // const { name, email } = req.body;
        // console.log("this is givenName val", req.body.user);
        addUser(req.body.user.name, req.body.user.email).then((r) => {
          return res.json({
            register: true,
            msg: r,
          });
          //DOTO armin implement and add location using the user id from the response of add user
          return res.redirect("/services");
        });
      }
    });
  });
  return router;
};

var express = require("express");
var router = express.Router();

module.exports = ({ getUsers, getUserByEmail, addUser, getUsersPosts }) => {
  // /* GET home page. */
  router.post("/", (req, res) => {
    getUserByEmail(req.body.email).then((result) => {
      if (!result) {
        // const { name, email } = req.body;
        // console.log("this is givenName val", req.body);
        // addUser(name, email).then((r) => {
        return res.json({
          register: true,
          // msg: r,
          //   });
        });
      } else {
        return res.json({
          msg: result,
        });
      }
    });
  });
  return router;
};

var express = require("express");
var router = express.Router();

module.exports = ({ getUsers, getUserByEmail, addUser, getUsersPosts }) => {
  // /* GET home page. */
  router.post("/", (req, res) => {
    getUserByEmail(req.body.email).then((result) => {
      if (!result) {
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

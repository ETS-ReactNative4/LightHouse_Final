var express = require("express");
var router = express.Router();

module.exports = ({ getUsers, getUserByEmail, addUser, getUsersPosts }) => {
  // /* GET home page. */
  router.post("/", (req, res) => {
    console.log(req.body);

    getUserByEmail(req.body.email)
      .then((result) => {
        res.json({
          msg: result,
        });
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  return router;
};

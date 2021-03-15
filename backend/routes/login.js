var express = require("express");
var router = express.Router();

module.exports = ({ getUsers, getUserByEmail, addUser, getUsersPosts }) => {
  // /* GET home page. */
  router.post("/", (req, res) => {
    //   console.log(req.body);

    getUserByEmail(req.body.email).then((result) => {
      if (!result) {
        const { name, email } = req.body;
        console.log("this is givenName val", req.body);
        addUser(name, email).then((r) => {
          res.json({
            register: true,
            msg: r,
          });
        });
      } else {
        res.json({
          msg: result,
        });
      }
    });
  });
  return router;
};

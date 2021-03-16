var express = require("express");
var router = express.Router();

module.exports = ({ getUsers, getUserByEmail, addUser, getUsersPosts }) => {
  // /* GET home page. */
  router.post("/", (req, res) => {
      console.log("HHHH",req.body.name[0]);

    getUserByEmail(req.body.name[1]).then((result) => {
      if (result) {
        // return res.json({
        //   msg: result,
        //   });
        return res.redirect('/services');
      } else {
        // const { name, email } = req.body;
        console.log("this is givenName val", req.body);
        addUser(req.body.name[0], req.body.name[1]).then((r) => {
          return res.json({
            register : true,
            msg: r
          });
          return res.redirect('/services');
        });
      }
    });
  });
  return router;
};

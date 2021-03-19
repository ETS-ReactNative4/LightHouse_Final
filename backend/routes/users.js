const express = require("express");
const router = express.Router();
const {getPostsByUsers} = require("../helpers/dataHelpers");

module.exports = ({
  getUsers,
  getUserByEmail,
  getUserById,
  addUser,
  getUsersPosts,
  updateUserPhoto,
  updateUserProviderStatus,
}) => {
  /* GET users listing. */
  router.get("/", (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.get("/:id", (req, res) => {
    getUserById(req.params.id)
      .then((users) => res.json(users))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/:id/photo", (req, res) => {
    const {photo} = req.body;
    console.log("THIS IS PHOTO:", photo);

    if (photo) {
      updateUserPhoto(photo, req.params.id)
        .then(() =>
          res.status(201).json({
            msg: "updated!",
          })
        )
        .catch((err) =>
          res.json({
            error: err.message,
          })
        );
    }
  });

  router.post("/:id/provider", (req, res) => {
    const {provider} = req.body;
    console.log("THIS IS PROVIDER:", provider);

    updateUserProviderStatus(provider, req.params.id)
      .then(() => {
        console.log("success!");
        getUserById(req.params.id)
          .then((users) => res.json(users))
          .catch((err) =>
            res.json({
              error: err.message,
            })
          );
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.get("/posts", (req, res) => {
    getUsersPosts()
      .then((usersPosts) => {
        const formattedPosts = getPostsByUsers(usersPosts);
        res.json(formattedPosts);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/", (req, res) => {
    const {first_name, last_name, email, password} = req.body;

    getUserByEmail(email)
      .then((user) => {
        if (user) {
          res.json({
            msg: "Sorry, a user account with this email already exists",
          });
        } else {
          return addUser(first_name, last_name, email, password);
        }
      })
      .then((newUser) => res.json(newUser))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};

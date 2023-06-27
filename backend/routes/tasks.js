const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createNewUser,
  getUser,
  checkUser,
  deleteUser,
} = require("../controllers/tasks");
router.route("/").get(getAllUsers).post(createNewUser);
router.route("/:id").get(getUser).delete(deleteUser);
router.route("/find/:id").get(checkUser);
module.exports = router;

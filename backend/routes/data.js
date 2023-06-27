const express = require("express");
const router = express.Router();
const {
  createNewData,
  getData,
  updateData,
  deleteData,
} = require("../controllers/data");
router.route("/").post(createNewData).patch(updateData);
router.route("/:id").get(getData).delete(deleteData);
module.exports = router;

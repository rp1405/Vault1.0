const users = require("../models/users");
const getAllUsers = (req, res) => {
  res.send("All items");
};
const createNewUser = async (req, res) => {
  try {
    const user = await users.create(req.body);
    res.json({ user });
  } catch (err) {
    console.log(err);
  }
};
const getUser = async (req, res) => {
  try {
    const data = await users.findOne({ username: req.params.id }).exec();
    if (data === null) {
      res.status(404).send("User not found");
    } else {
      res.json(data);
    }
    return data;
  } catch (err) {
    res.status(404).send("User not found");
    console.log(err);
  }
};
const checkUser = async (req, res) => {
  try {
    const data = await users.findOne({ username: req.params.id }).exec();
    if (data != null) {
      res.status(400).send({ error: "User Exists" });
    } else {
      res.send("OK");
    }
  } catch (err) {
    console.log(err);
  }
};
const deleteUser = async (req, res) => {
  try {
    const data = await users.deleteOne({ username: req.params.id }).exec();
    res.json({ data });
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  getAllUsers,
  createNewUser,
  getUser,
  checkUser,
  deleteUser,
};

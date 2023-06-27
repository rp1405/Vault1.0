const datas = require("../models/data");
const createNewData = async (req, res) => {
  try {
    const data = await datas.create(req.body);
    res.json({ data });
  } catch (err) {
    console.log(err);
  }
};
const getData = async (req, res) => {
  try {
    const secrets = await datas.findOne({ username: req.params.id }).exec();
    res.json(secrets);
    return secrets;
  } catch (err) {
    res.status(404).send("User not found");
    console.log(err);
  }
};
const updateData = async (req, res) => {
  try {
    const data = await datas.updateOne(req.body.query, req.body.changes).exec();
    res.json({ data });
  } catch (err) {
    console.log(err);
  }
};
const deleteData = async (req, res) => {
  try {
    const data = await datas.deleteOne({ username: req.params.id }).exec();
    res.json({ data });
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  createNewData,
  getData,
  updateData,
  deleteData,
};

const { doDuring } = require("async");
const db = require("../models");

module.exports = {
  create: async (req, res, next) => {
    let newData = await db.Data.create(req.body);
    res.json(newData);
  },
  read: async (req, res, next) => {
    let allDatum = await db.Data.find({});
    res.render("data", { data: allDatum });
  },
  update: async (req, res, next) => {
    let updateData = await db.Data.findOneAndUpdate({ id: req.params.id });
    console.log(req.body);
    res.json(updateData);
  },
  delete: async (req, res, next) => {
    let deleteUser = await db.Data.findOneAndDelete({ _id: req.params.id });
    res.send(deleteUser);
  },
};

const { doDuring } = require("async");
const db = require("../models");

module.exports = {
  create: async (req, res, next) => {
    console.log(req.body);
    try {
      let newData = await db.Data.create(req.body);
      res.json(newData);
    } catch (err) {
      console.log(error);
    }
  },
  read: async (req, res, next) => {
    let allDatum = await db.Data.find({});
    res.json(allDatum);
  },
  update: async (req, res, next) => {
    let updateData = await db.Data.FindOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      (docs) => {
        console.log(docs);
      }
    );
    res.send(updateData);
  },
  delete: async (req, res, next) => {
    let deleteUser = await db.Data.findOneAndDelete(
      { _id: req.params.id },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          res.send(deleteUser);
        }
      }
    );
  },
};

const { doDuring } = require("async");
const db = require("../models");

module.exports = {
  create: async (req, res, next) => {
    try {
      let newUser = await db.User.create(req.body);
      res.json(newUser);
    } catch (err) {
      //console.log(error);
    }
  },
  read: async (req, res, next) => {
    let allUsers = await db.User.find({});
    res.json(allUsers);
  },
  update: async (req, res, next) => {
    let updateUser = await db.User.FindOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      (err, docs) => {
        console.log(docs);
      }
    );
    res.send(updateData);
  },
  delete: async (req, res, next) => {
    let deleteUser = await db.User.findOneAndDelete(
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

const { doDuring } = require("async");
const db = require("../models");

module.exports = {
  create: async (req, res, next) => {
    console.log(req.body);
    try {
      let newUser = await db.User.create(req.body);
      res.json(newUser);
    } catch (err) {
      console.log(error);
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
        res.send("edit", { user: docs });
      }
    );
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

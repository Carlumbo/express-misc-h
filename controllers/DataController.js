const { doDuring } = require("async");
const db = require("../models");

module.exports = {
  create: async (req, res, next) => {
    let newData = await db.Data.create(req.body);
    res.json(newData);
  },
  read: async (req, res, next) => {
    let allDatum = await db.Data.find({});
    var fData = allDatum.filter (sData =>  sData.Uploader = req.session.passport.user.email) 
    console.log(fData)
    res.render("data", { data: fData });
  },
  update: async (req, res, next) => {
    let updateData = await db.Data.findOneAndUpdate({ id: req.params.id });
    console.log(req.body);
    res.json(updateData);
  },
  delete: async (req, res, next) => {
    console.log(req.params.id)
    let deleteUser = await db.Data.findOneAndDelete({ id: req.params.id });
    res.send(deleteUser);
  },
};

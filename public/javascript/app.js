const express = require("express");
const router = express.Router();
const passport = require("passport");

var form = document.querySelector("#reg-form");

form.addEventListener(
  "submit",

  function (e) {
    e.preventDefault();
    var inputs = document.querySelectorAll("input");
    // console.log(inputs);
    var inputsArray = Array.from(inputs);
    //console.log(inputsArray);
    var emptyObj = {};
    inputsArray.forEach((input) => {
      var key = input.dataset.key;
      emptyObj[key] = input.value;
    });
    var jobj = JSON.stringify(emptyObj);
    //console.log(jobj);
    // alert("failure");

    api.getUser(jobj);
  },
  null
);

function getUser(req, res, next) {}

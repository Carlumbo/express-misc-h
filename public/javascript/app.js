var form = document.querySelector("#reg-form");

console.log(form);
form.addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
    var inputs = document.querySelectorAll("#form-control");
    console.log(inputs);
    var inputsArray = Array.from(inputs);
    console.log(inputsArray);
    var emptyObj = {};
    inputsArray.forEach((input) => {
      var key = input.dataset.key;
      emptyObj[key] = input.value;
    });
    var jobj = JSON.stringify(emptyObj);
    console.log(jobj);
    api.postUser(jobj);
  },
  null
);

var api = {
  postUser: async function (data = {}) {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    return response.json();
  },
};

/*
var api = {
  passport.authenticate() 
}
router.post("/login", (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return res.status(400).json({ errors: err });
    }
    if (!user) {
      return res.status(400).json({ errors: "No user found" });
    }
    req.logIn(user, function (err) {
      if (err) {
        return res.status(400).json({ errors: err });
      }
      return res.status(200).json({ success: `logged in ${user.id}` });
    });
  })(req, res, next);
});
*/

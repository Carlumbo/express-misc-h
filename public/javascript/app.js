var form = document.querySelector("#login-form");
//console.log("cp1")
form.addEventListener(
  "submit",

  function (e) {
   // console.log("I am here")
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
    //console.log(jobj)
    api.getUser(jobj);
  },
  null
);
var api = {
  getUser: async function (data = {}) {
   // console.log(data)
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    //console.log(response.json())
    return response.json();
  },
};

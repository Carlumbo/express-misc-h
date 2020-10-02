var form = document.querySelector("#reg-form");
form.addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
    var inputs = document.querySelectorAll("input");
    var inputsArray = Array.from(inputs);
    console.log(inputsArray);
    var emptyObj = {};
    let filteredArray = inputsArray.filter((input) => {
      return input.dataset.key != "undefined";
    });
    console.log(filteredArray);
    inputsArray.forEach(() => {
      console.log(input);
      var key = input.dataset.key;
      emptyObj[key] = input.value;
    });
    var jobj = JSON.stringify(emptyObj);
    var result = api.postUser(jobj);
    console.log(jobj);
  },
  null
);

var api = {
  postUser: async function (data = {}) {
    const response = await fetch("/reg/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    //alert("Login Succsful");
    return response.json();
  },
};

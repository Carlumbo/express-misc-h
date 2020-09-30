var table = document.querySelectorAll(".objectId");

console.log(table);

// table.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var inputs = docment.querySelector(".objectId");
//   console.log(inputs);
// });

// form.addEventListener(
//   "edit",
//   function (e) {
//     e.preventDefault();
//     var inputs = document.querySelectorAll("input");
//     var inputsArray = Array.from(inputs);
//     var emptyObj = {};
//     inputsArray.forEach((input) => {
//       var key = input.dataset.key;
//       emptyObj[key] = input.value;
//     });
//     var jobj = JSON.stringify(emptyObj);
//     var result = api.postUser(jobj);
//     console.log("Success");
//   },
//   null
// );

var form = document.querySelectorAll("div.card-body button");
console.log(form);

form.addEventListener(
  "click",

  function (e) {
    e.preventDefault();
    console.log("Hello");
    // var inputs = document.querySelectorAll(".card");
    // console.log("hello");
    //     var inputsArray = Array.from(inputs);
    //     //console.log(inputsArray);
    //     var emptyObj = {};
    //     inputsArray.forEach((input) => {
    //       var key = input.dataset.key;
    //       emptyObj[key] = input.value;
    //     });
    //     var jobj = JSON.stringify(emptyObj);
    //     //console.log(jobj);
    //     // alert("failure");

    //     api.getUser(jobj);
    //   },
    //   null
  }
);

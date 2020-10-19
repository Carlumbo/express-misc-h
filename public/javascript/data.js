var form = document.querySelectorAll("wrapper");
console.log(form);



wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  data = event.target.id
  api.deleteData(data)
})

var api = {
  deleteData: async function (data = {}) {
    const response = await fetch(`/index/${data}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
    //alert("Login Succsful");
    //
    return response.json();
  },
};



//     // var inputs = document.querySelectorAll(".card");
//     // console.log("hello");
//     //     var inputsArray = Array.from(inputs);
//     //     //console.log(inputsArray);
//     //     var emptyObj = {};
//     //     inputsArray.forEach((input) => {
//     //       var key = input.dataset.key;
//     //       emptyObj[key] = input.value;
//     //     });
//     //     var jobj = JSON.stringify(emptyObj);
//     //     //console.log(jobj);
//     //     // alert("failure");

//     //     api.getUser(jobj);
//     //   },
//     //   null
//   }
// );

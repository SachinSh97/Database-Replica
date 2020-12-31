const localStorage = require("local-storage"); // package providing feature's like create, delete ,read from localStorage

//Result :- Success Message: local-data Key added successfully
console.log(
  localStorage.Create(
    "local-data",
    {
      Time: new Date().toLocaleTimeString(),
      Date: new Date().toLocaleDateString(),
    },
    10
  )
);

//Result :- Error Message: This key already exists
console.log(localStorage.Create("local-data", { key: "value" }, 10));

//Result :- {"local-data":{"Time":"6:59:02 PM","Date":"12/31/2020"}}
console.log(localStorage.Read("local-data"));

//Result :- Success Message: local-data key is successfully deleted from Database
console.log(localStorage.Delete("local-data"));

//Result :- Success Message: local-data Key added successfully
console.log(localStorage.Create("local-data", { key: "value" }, 10));

//this will execute after 10seconds
setTimeout(() => {
  //Result :- Error Message :  Given key does not exist in database. Please enter a valid key
  console.log(localStorage.Read("local-data"));

  //Result :- Error Message :  Given key does not exist in database. Please enter a valid key
  console.log(localStorage.Delete("local-data"));

  //Result :- Success Message: local-data Key added successfully
  console.log(localStorage.Create("local-data", { key: "value" }, 10));
  //Result :- {"local-data":{"key":"value"}}
  console.log(localStorage.Read("local-data"));
}, 11 * 1000);

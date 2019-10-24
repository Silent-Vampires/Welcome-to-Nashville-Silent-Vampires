
const parkURL = "https://data.nashville.gov/resource/74d7-b74t.json";  //map the endpoint to a variable
let parkELCounter=0;
function fetchParkApi() {
  
  const inputField = document.querySelector("#parkText") //map the #parktext id to a variable
  console.log("user input", inputField.value) // console log the value inserted in the text field
  const inputFieldValue = inputField.value;
  // *******************************************************************************
  /// idiot proof feature that style the user's input to match the json objects, replacing uppercase letters with lowercase letters and spaces/dashes with underscore
  // *******************************************************************************
  const capitalizedArr = []; // initializing an empty array. the styled user input will be pushed here
  for (let i = 0; i < inputFieldValue.length; i++) { //looping through the string characters
    if (inputFieldValue[i] === " " || inputFieldValue[i] === "-") {
      capitalizedArr.push("_") ////  push underscore instead of space or dash
    capitalizedArr.push(inputFieldValue[i + 1].toLowerCase()) // push push push
    i++ //
    console.log(capitalizedArr)
  } else {
    capitalizedArr.push(inputFieldValue[i].toLowerCase()) // push push push
    console.log(capitalizedArr)
  }
  capitalizedString = capitalizedArr.join("")
}
let encodedUserInput = encodeURI(capitalizedString) // encode the variable
console.log(encodedUserInput);
// *******************************************************************************
// fetching the api endpoint
// *******************************************************************************
fetch(`${parkURL}`) // fetch endpoint 
  .then(response => response.json())
  .then(jsonedResponse =>
    iterateJson(jsonedResponse, encodedUserInput)) //  calling the json iterator helper function
  }

// *******************************************************************************
// iterating through the json response and looking for the entered amenity
// *******************************************************************************
function iterateJson(jsonfiedResponse, encodedUserInput) {
  for (i = 0; i < jsonfiedResponse.length; i++) {
    if (jsonfiedResponse[i][encodedUserInput] == "Yes") {
      console.log(jsonfiedResponse[i].park_name, jsonfiedResponse[i].mapped_location.human_address)
      parkName = jsonfiedResponse[i].park_name
      parkAddress = jsonfiedResponse[i].mapped_location.human_address
      displayParksHTML (parkName, parkAddress);
    }
  }
}
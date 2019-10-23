
const parkURL="https://data.nashville.gov/resource/74d7-b74t.json";
const inputField = document.querySelector("#parkText").value //map the #parktext id to a variable

function fetchParkApi() {
  const inputField = document.querySelector("#parkText") //map the #parktext id to a variable
  console.log("user input", inputField.value) // console log the value inserted in the text field
  const inputFieldValue = inputField.value;
  /// idiot proof feature that style the user input to match the expected endpoint
  const capitalizedArr = [];
   for (let i=0; i<inputFieldValue.length; i++) {
     if (i===0){
      capitalizedArr.push(inputFieldValue[i].toLowerCase())
      i++
     }

    if (inputFieldValue[i] ===" " || inputFieldValue[i] ==="-") {
      capitalizedArr.push("_")
      capitalizedArr.push(inputFieldValue[i+1].toLowerCase())
      i++
      console.log(capitalizedArr)
    }else{
      capitalizedArr.push(inputFieldValue[i])
      console.log(capitalizedArr)
    }
      capitalizedString = capitalizedArr.join("")
   }
   let encodedUserInput = encodeURI(capitalizedString) // encode the variable
    console.log(encodedUserInput);
    // console.log(`${parkURL}?park_name=${encodedUserInput}`)
    
  fetch (`${parkURL}`) // fetch endpoint 
  .then(response => response.json()) 
  .then(jsonedResponse=>
    iterateJson(jsonedResponse,encodedUserInput))
 }

 function iterateJson(jsonfiedResponse,encodedUserInput) {
  for (i=0; i<jsonfiedResponse.length; i++) {
    if (jsonfiedResponse[i][encodedUserInput]=="Yes") {
    console.log("TRUE", jsonfiedResponse[i].park_name, jsonfiedResponse[i].mapped_location.human_address)
  }
  }}
  


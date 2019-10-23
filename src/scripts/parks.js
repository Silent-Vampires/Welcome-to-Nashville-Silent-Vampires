

const fetchParkApiTest = () => {
  fetch (`https://data.nashville.gov/resource/74d7-b74t.json`)
  .then(response => response.json()) 
  .then(jsonedResponse=>
    iterateJson(jsonedResponse))
}


const parkURL="https://data.nashville.gov/resource/74d7-b74t.json";
const inputField = document.querySelector("#parkText").value //map the #parktext id to a variable
    console.log("user input", inputField) // console log the value inserted in the text field


function iterateJson(jsonfiedResponse) {
for (i=0; i<jsonfiedResponse.length; i++) {
  const inputField = document.querySelector("#parkText").value //map the #parktext id to a variable
  console.log(jsonfiedResponse[i][inputField])
  if (jsonfiedResponse[i][inputField]=="Yes") {
  console.log("TRUE", jsonfiedResponse[i].park_name)
}
}}

//there is a click. lets do something
const fetchParkApi = () => {
  const inputField = document.querySelector("#parkText") //map the #parktext id to a variable
  console.log("user input", inputField.value) // console log the value inserted in the text field
  const inputFieldValue = inputField.value;
  /// idiot proof feature that style the user input to match the expected endpoint
  const capitalizedArr = [];
   for (let i=0; i<inputFieldValue.length; i++) {
     if (i===0){
      capitalizedArr.push(inputFieldValue[i].toUpperCase())
      i++
     }

    if (inputFieldValue[i] ===" " || inputFieldValue[i] ==="-") {
      capitalizedArr.push(" ")
      capitalizedArr.push(inputFieldValue[i+1].toUpperCase())
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
    console.log(`${parkURL}?park_name=${encodedUserInput}`)
    
  fetch (`${parkURL}?park_name=${encodedUserInput}`) // fetch BASICURL + "?PARK_NAME=" + Encoded text (add %20 instead of space)
 .then(response => response.json()) 
 .then(jsonedResponse=>
   console.log(jsonedResponse));
 }


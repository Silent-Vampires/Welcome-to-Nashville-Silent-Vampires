

const parkURL="https://data.nashville.gov/resource/74d7-b74t.json";

//looking for the click
  const addParksEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("searchButtonParks")
  searchButton.addEventListener("click", fetchParkApi)
}

//there is a click. lets do something
const fetchParkApi = () => {
  const inputField = document.querySelector("#parkText") //map the #parktext id to a variable
  console.log("user input", inputField.value) // console log the value inserted in the text field
  const inputFieldValue = inputField.value;
  /// idiot proof feature that style the user input the match the expected endpoint
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


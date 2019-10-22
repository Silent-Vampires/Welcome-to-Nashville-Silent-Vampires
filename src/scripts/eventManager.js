const handleSearchParks = event => {
    const inputField = document.querySelector("#parkText")
    console.log("user input", inputField.value)

  searchRecipes(inputField.value)
  .then(response => {
    displayRecipeHtml(response.recipes)
    inputField.value = ""
  })
}

const addParksEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("searchButtonParks")
  searchButton.addEventListener("click", handleSearchParks)
}

const handleSearchRest = event => {
    const inputField = document.querySelector("#restText")
    console.log("user input", inputField.value)
    
  // searchRecipes(inputField.value)
  // .then(response => {
  //   displayRecipeHtml(response.recipes)
  //   inputField.value = ""
  // })
  searchRestaurant(inputField.value)
  .then(response => {
    
    displayRestHTML(restaurant.name, response.restaurant.location.address, response.restaurant.phone_numbers)
    inputField.value = ""
})
}

const addRestarauntsEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("searchButtonRestaraunts")
  searchButton.addEventListener("click", handleSearchRest)
}


const handleSearchMeet = event => {
    const inputField = document.querySelector("#meetText")
    console.log("user input", inputField.value)
    
//   searchRecipes(inputField.value)
//   .then(response => {
//     displayRecipeHtml(response.recipes)
//     inputField.value = ""
//   })
}

const addMeetupEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("searchButtonMeetup")
  searchButton.addEventListener("click", handleSearchMeet)
}


const handleSearchConcerts = event => {
    const inputField = document.querySelector("#concertText")
    console.log("user input", inputField.value)
    
//   searchRecipes(inputField.value)
//   .then(response => {
//     displayRecipeHtml(response.recipes)
//     inputField.value = ""
//   })
}

const addConcertEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("searchButtonConcerts")
  searchButton.addEventListener("click", handleSearchConcerts)
}
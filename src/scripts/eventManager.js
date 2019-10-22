const handleSearchParks = event => {
    const inputField = document.querySelector("#parkText")
    console.log("user input", inputField.value)

//   handleSearchParks(inputField.value)
//   .then(response => {
//     displayParksHtml(response.parks)
//     inputField.value = ""
//   })
// }

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


const addRestaurantsEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("searchButtonRestaurants")
  searchButton.addEventListener("click", handleSearchRest)
}


const handleSearchMeet = event => {
    const inputField = document.querySelector("#meetText")
    console.log("user input", inputField.value)
    
//   searchMeet(inputField.value)
//   .then(response => {
//     displayMeetHtml(response.meetup)
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
    

//   searchConcerts(inputField.value)
//   .then(response => {
//     displayConcertsHtml(response.concerts)
//     inputField.value = ""
//   })
}

const addConcertEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("searchButtonConcerts")
  searchButton.addEventListener("click", handleSearchConcerts)
}
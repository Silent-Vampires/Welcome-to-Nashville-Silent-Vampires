
// PARKS
const handleSearchParks = event => {
    const inputField = document.querySelector("#parkText")
    console.log("user input", inputField.value)
    fetchParkApi();
}

const addParksEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("searchButtonParks")
  searchButton.addEventListener("click", handleSearchParks)
}

// RESTAURANTS
const handleSearchRest = event => {
  const inputField = document.querySelector("#restText")
  console.log("user input", inputField.value)
    
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


// MEETUP
const handleSearchMeet = event => {
    const inputField = document.querySelector("#meetText")
    
  searchMeetups(inputField.value)
  .then(response => {
    displayMeetupHtml(response.events)
    inputField.value = ""
  })
}

const addMeetupEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("searchButtonMeetup")
  searchButton.addEventListener("click", handleSearchMeet)
}


// CONCERTS

// creates function to assigned text to input field variable


const handleSearchConcerts = event => {
    const inputField = document.querySelector("#concertText")
    console.log("user input", inputField.value)
    
//Calls API search function with inputField as argument, takes returns response, and calls function to build DOM

  searchConcerts(inputField.value)
  .then(response => {
    // console.log(response)
    displayConcertsHTML(response)
    inputField.value = ""
  })
}

const addConcertEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("searchButtonConcerts")
  searchButton.addEventListener("click", handleSearchConcerts)
}


// BUILD SEARCH FORM
const buildAndAppendSearchForm = () => {
    const searchForm = `
    <h1>Welcome to Nashville</h1>
    <h3>Search to Create Itinerary: </h3>
        <section class="parkSearch">
            <input type="text" id="parkText" placeholder="Parks">
            <button id = "searchButtonParks">Search</button>
        </section>

        <section class="restSearch">
            <input type="text" id="restText" placeholder="Restaurants">
            <button id = "searchButtonRestaurants">Search</button>
        </section>

        <section class="meetupSearch">
            <input type="text" id="meetText" placeholder="Meetup">
            <button id = "searchButtonMeetup">Search</button>
        </section>

        <section class="concertSearch">
            <input type="text" id="concertText" placeholder="Concerts by artist or genre">
            <button id = "searchButtonConcerts">Search</button>
        </section>

    `
    const containerDiv = document.querySelector("#searchForm")
    containerDiv.innerHTML = searchForm
  }
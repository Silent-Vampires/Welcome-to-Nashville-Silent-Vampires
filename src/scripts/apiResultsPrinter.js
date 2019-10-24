
// PARKS
// const buildParksHtml = parksDisplay => `
// <article>
//   <h4>${parksDisplay.title}</h4>
//   <p>
//       <a href="${parksDisplay.source_url}">Click here to see the park</a>
//   </p>
// </article>
// `


// const displayParksHTML = allParksDisplay => {
//   let parksResultsHtml = ""
//   allParksDisplay.forEach(parksDisplay => {
//     let parksHtml = buildParksHtml(parksDisplay)
//     parksResultsHtml += parksHtml
//   });

//   const searchResultsSection = document.querySelector(".search-results")
//   searchResultsSection.innerHTML = parksResultsHtml
// }

let tempArr = []
let tempStr =""
let styledParkAddress =""


// ********************************************************************************************************
// helper function to deal with the unstyled json response string
// ********************************************************************************************************

function parkAddressStyler (parkAddress){ 
  
  let tempStr=  parkAddress
  console.log(tempStr, parkAddress)
  for (let i=0; i<parkAddress.length; i++){
    if (tempStr[i] === "{" || tempStr[i] === "}"  || tempStr[i] === `"`) {
      tempArr.push(" ")
      // debugger
    console.log(tempArr)
  } else {
    // debugger
    tempArr.push(tempStr[i]) 
    console.log(tempArr)
  }
  }
  styledParkAddress = tempArr.join("")
  tempArr=[]
  tempStr=""
  console.log(styledParkAddress)
  return styledParkAddress.replace("address", "")
   
  }
 // ********************************************************************************************************
// dynamically populating search result to the dom by creating dom elements and append them as childs
// *********************************************************************************************************
function displayParksHTML (parkName, parkAddress) {
  parkELCounter++
  console.log ("Park Element Counter", parkELCounter)

  let returnedStyledParkAddress = parkAddressStyler (parkAddress)

  parkResultsContainer = document.querySelector("#resultsForm")
  const parkNameEl = document.createElement("h4")
  const parkAddressEL = document.createElement("p")
  const parkSaveButton = document.createElement("button")
  parkSaveButton.id = `park-save-${parkELCounter}`

  parkNameEl.textContent = `Name: ${parkName}`
  parkAddressEL.textContent = `Address: ${returnedStyledParkAddress}`
  parkSaveButton.textContent = 'Save'

  parkResultsContainer.appendChild(parkNameEl)
  parkResultsContainer.appendChild(parkAddressEL)
  parkResultsContainer.appendChild(parkSaveButton)

  parkSaveButton.addEventListener("click", () => document.querySelector("#itineraryForm").innerHTML = `PARK NAME: ${parkName}` )
  }
// *********************************************************************************************************

// RESTAURANTS
// const buildRestHtml = (restaurant) =>{ 
//   console.log(restaurant.restaurant.name)
//   return `
// <article>
//   <h4>${restaurant.restaurant.name}</h4>
//   <p>
//       <a href="${restaurant.restaurant.url}">Click here to see the restaurant</a>

//   </p>
//   <button class="restSave--">save</button>
// </article>
// `
// }
// const displayRestHTML = restaurantArray=> {
//   //i did this console log to make sure the information was making it to this point
//   console.log(restaurantArray)
//   let restResultsHtml = ""
//   // let num = 1
//   restaurantArray.forEach(restaurant => {
//     let restaurantHtml = buildRestHtml(restaurant)
//     restResultsHtml += restaurantHtml
//     // num += 1
//   });

//   const searchResultsSection = document.querySelector("#resultsForm")
//   searchResultsSection.innerHTML = restResultsHtml
// }


//restaurant 2.0

const displayRestHTML = restaurantArray => {
  //by doing adding a counter I am making a unique name for each search result
  let counter = 1

  restaurantArray.forEach(restaurant => {
    // console.log(restaurantArray)
    const searchResultsSection = document.querySelector("#resultsForm")

    //these lines create the structure of the return, by creating and element(title, address, phone, save) then give them a HTML element
    const titleElement = document.createElement('h4')
    const addressElement = document.createElement('p')
    const phoneElement = document.createElement('p')
    const saveButton = document.createElement('button')

    //this line uses the counter that we give each result then saves it by use of the save button
    saveButton.id = `save--${counter}`
    //these lines pull the information form the fetch call and assign them to an element that will populate the DOM
    titleElement.textContent = `${restaurant.restaurant.name}`
    addressElement.textContent = `${restaurant.restaurant.location.address}`
    phoneElement.textContent = `${restaurant.restaurant.phone_numbers}`
    saveButton.textContent = `Save`

    //these items will append the elements to the Node and makes them useable
    searchResultsSection.appendChild(titleElement)
    searchResultsSection.appendChild(addressElement)
    searchResultsSection.appendChild(phoneElement)
    searchResultsSection.appendChild(saveButton)
    //this is an event listener for the save button that will take the information and attach it to the DOM at #restSaved
    saveButton.addEventListener('click', event => document.querySelector('#restSaved').innerHTML = `${restaurant.restaurant.name}`)
    counter ++
  })
}


// *********************************************************************************************************




// CONCERTS

// const buildConcertsHtml = (concertsDisplay, count) =>
// `
// <article id="concertResult--${count}">
// const buildConcertsHtml = (concertsDisplay, count) =>
// <h4>${concertsDisplay.name}</h4>
//   <p> Date: ${concertsDisplay.dates.start.localDate}</p>
//   <p>Venue: ${concertsDisplay._embedded.venues[0].name}
// </article>
// `

//creates function that iterates thru search results, creates elements for each, adds content to each, appends them to the DOM, and add event listener to save button and populate itinerary

const displayConcertsHTML = allConcertsDisplay => {
  
  // console.log(allConcertsDisplay._embedded.events, typeof allConcertsDisplay._embedded.events)
  let counter = 1
  // let concertsResultsHtml = ""
  const searchResultsSection = document.querySelector("#resultsForm")

  searchResultsSection.innerHTML = ""

  allConcertsDisplay._embedded.events.forEach(concertsDisplay => {
    
    
    const searchResult = document.createElement("div")
    const titleElement = document.createElement("h4")
    const dateElement = document.createElement("p")
    const venueElement = document.createElement("p")
    const saveButton = document.createElement("button")

    searchResult.classList.add("searchResult")
    saveButton.id = `save--${counter}`
    titleElement.textContent = `${concertsDisplay.name}`
    dateElement.textContent = `Date: ${concertsDisplay.dates.start.localDate}`
    venueElement.textContent = `Venue: ${concertsDisplay._embedded.venues[0].name}`
    saveButton.textContent = 'Save'

    searchResult.appendChild(titleElement)
    searchResult.appendChild(dateElement)
    searchResult.appendChild(venueElement)
    searchResult.appendChild(saveButton)
    searchResultsSection.appendChild(searchResult)
    
    saveButton.addEventListener("click", () => document.querySelector("#concertSaved").innerHTML = `<h4>Concert:</h4> ${concertsDisplay.name} at ${concertsDisplay._embedded.venues[0].name} on ${concertsDisplay.dates.start.localDate}</div>`)
    counter++

  })
  
  // searchResultsSection.innerHTML = concertsResultsHtml
}

// *********************************************************************************************************
// MEETUP
// create an function that builds the HTML string for each meetup.
const buildMeetupHtml = (meetup, number) => {

  // creating the tags for a single meetup
  const meetupContainer = document.createElement("article")
  const meetupTitle = document.createElement("h4")
  const websiteParagraph = document.createElement("p")
  const websiteAnchor = document.createElement("a")
  const saveButton = document.createElement("button")

  // modifying the classes, id's, etc for each tag
  meetupContainer.classList.add("searchResult")
  websiteAnchor.href = `${meetup.url}` 
  websiteAnchor.target = "_blank"
  saveButton.id = `meetup save--${number}`

  // adding the text content to each tag
  meetupTitle.textContent = `${meetup.name.text}`
  websiteAnchor.textContent = `${meetup.url}`
  saveButton.textContent = "Save"

  // appendChild to but websiteAnchor inside of websiteParagraph
  websiteParagraph.appendChild(websiteAnchor)

  // appendChild for all the tags to be inside meetupContainer
  meetupContainer.appendChild(meetupTitle)
  meetupContainer.appendChild(websiteParagraph)
  meetupContainer.appendChild(saveButton)

  // event listener for save button. This will move things to the Itinerary part of the DOM
  saveButton.addEventListener("click", function () {
    // targeting the div for meetup in Itinerary
    const meetupItinerary = document.querySelector("#meetSaved")
    
    meetupItinerary.innerHTML = ""  // clearing the current meetupItinerary
    const meetupLabel = document.createElement("h4")
    meetupLabel.textContent = "Meetup:"

    //cloning nodes from results to go in itinerary
    const cloneMeetupTitle = meetupTitle.cloneNode(true)
    const cloneMeetupSite = websiteParagraph.cloneNode(true)

    // add meetupLable and the saved item to the itinerary
    meetupItinerary.appendChild(meetupLabel)
    meetupItinerary.appendChild(cloneMeetupTitle)
    meetupItinerary.appendChild(cloneMeetupSite)

  
  })

  return meetupContainer
}

// create a function to display meetups to the DOM
const displayMeetupHtml = meetupArray => {
  let num = 1
  const meetupResultHtml = document.createElement("div")
  if (meetupArray.length <= 4) {
    meetupArray.forEach(meetup => {
        const meetupHtml = buildMeetupHtml(meetup, num)
        meetupResultHtml.appendChild(meetupHtml)
        num += 1 
    } )
  } else {
    for (i = 0; i < 4; i++) {
      const meetupHtml = buildMeetupHtml(meetupArray[i], num)
      meetupResultHtml.appendChild(meetupHtml)
      num += 1
    }
  }

  // then, display this to the DOM
  const searchResultsSection = document.querySelector("#resultsForm")
  searchResultsSection.innerHTML = ""
  searchResultsSection.appendChild(meetupResultHtml)
}

  

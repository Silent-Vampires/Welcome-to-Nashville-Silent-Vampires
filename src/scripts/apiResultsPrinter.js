
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


// RESTAURANTS
const buildRestHtml = restDisplay => `
<article>
  <h4>${restDisplay.title}</h4>
  <p>
      <a href="${restDisplay.source_url}">Click here to see the restaurant</a>
  </p>
</article>
`
const displayRestHTML = allRestDisplay => {
  let restResultsHtml = ""
  allRestDisplay.forEach(restDisplay => {
    let restHtml = buildRestHtml(restDisplay)
    restResultsHtml += restHtml
  });

  const searchResultsSection = document.querySelector(".search-results")
  searchResultsSection.innerHTML = restResultsHtml
}







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
  
  allConcertsDisplay._embedded.events.forEach(concertsDisplay => {
    
    const searchResultsSection = document.querySelector("#resultsForm")

    const titleElement = document.createElement("h4")
    const dateElement = document.createElement("p")
    const venueElement = document.createElement("p")
    const saveButton = document.createElement("button")

    saveButton.id = `save--${counter}`
    titleElement.textContent = `${concertsDisplay.name}`
    dateElement.textContent = `Date: ${concertsDisplay.dates.start.localDate}`
    venueElement.textContent = `Venue: ${concertsDisplay._embedded.venues[0].name}`
    saveButton.textContent = 'Save'

    searchResultsSection.appendChild(titleElement)
    searchResultsSection.appendChild(dateElement)
    searchResultsSection.appendChild(venueElement)
    searchResultsSection.appendChild(saveButton)
    saveButton.addEventListener("click", () => document.querySelector("#itineraryForm").innerHTML = `${concertsDisplay.name}`)
    counter++

  })
  
  // searchResultsSection.innerHTML = concertsResultsHtml
}



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
  // ***************************************************************************************
  // WORKING ON THIS PART OF THE CODE!! NEED TO GET TO THE ITINERARY
  // ***************************************************************************************

  saveButton.addEventListener("click", function () {
    const apiType = saveButton.id.split(" ")[0] // targets the part of the id that says "meetup"
    const thisMeetup = meetupTitle.innerHTML // title of the selected meetup
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



  

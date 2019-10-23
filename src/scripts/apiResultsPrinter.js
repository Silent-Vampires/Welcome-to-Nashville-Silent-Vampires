
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
  return `
<article>
<h4>${meetup.name.text}</h4>
<p>
    <a href="${meetup.url}" target="_blank">${meetup.url}</a>
</p>
<button class="meetup save--${number}" >Save</button>
</article>
`
}

// create a function to display meetups to the DOM
const displayMeetupHtml = meetupArray => {
  let num = 1
  let meetupResultHtml = ""
  if (meetupArray.length <= 4) {
    meetupArray.forEach(meetup => {
        const meetupHtml = buildMeetupHtml(meetup, num)
        meetupResultHtml += meetupHtml
        num += 1 
    } )
  } else {
    for (i = 0; i < 4; i++) {
      const meetupHtml = buildMeetupHtml(meetupArray[i], num)
      meetupResultHtml += meetupHtml
      num += 1
    }
  }

  // then, display this to the DOM
  const searchResultsSection = document.querySelector("#resultsForm")
  searchResultsSection.innerHTML = meetupResultHtml
}



  

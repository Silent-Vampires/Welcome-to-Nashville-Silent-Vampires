
// PARKS
const buildParksHtml = parksDisplay => `
<article>
  <h4>${parksDisplay.title}</h4>
  <p>
      <a href="${parksDisplay.source_url}">Click here to see the park</a>
  </p>
</article>
`


const displayParksHTML = allParksDisplay => {
  let parksResultsHtml = ""
  allParksDisplay.forEach(parksDisplay => {
    let parksHtml = buildParksHtml(parksDisplay)
    parksResultsHtml += parksHtml
  });

  const searchResultsSection = document.querySelector(".search-results")
  searchResultsSection.innerHTML = parksResultsHtml
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
  const searchResultsSection = document.querySelector("#resultsForm")

  searchResultsSection.innerHTML = ""

  allConcertsDisplay._embedded.events.forEach(concertsDisplay => {
    
    

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
    
    saveButton.addEventListener("click", () => document.querySelector("#itineraryForm").innerHTML = `<h4>${concertsDisplay.name}</h4>${concertsDisplay.dates.start.localDate}`)
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




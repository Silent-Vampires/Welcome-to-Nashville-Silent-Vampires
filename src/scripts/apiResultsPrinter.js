
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
  let counter = 1

  restaurantArray.forEach(restaurant => {
    // console.log(restaurantArray)
    const searchResultsSection = document.querySelector("#resultsForm")

    const titleElement = document.createElement('h4')
    const urlElement = document.createElement('p')
    const phoneElement = document.createElement('p')
    const saveButton = document.createElement('button')

    saveButton.id = `save--${counter}`
    titleElement.textContent = `${restaurant.restaurant.name}`
    urlElement.textContent = `${restaurant.restaurant.location.address}`
    phoneElement.textContent = `${restaurant.restaurant.phone_numbers}`
    saveButton.textContent = `Save`

    searchResultsSection.appendChild(titleElement)
    searchResultsSection.appendChild(urlElement)
    searchResultsSection.appendChild(phoneElement)
    searchResultsSection.appendChild(saveButton)
    saveButton.addEventListener('click', event => document.querySelector('#restSaved').innerHTML = `${restaurantArray.name}`)
    counter ++
  })
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
  <button class="save--${number}" >Save</button>
</article>
`
}

// create a function to display meetups to the DOM
const displayMeetupHtml = meetupArray => {
  let meetupResultHtml = ""
  let num = 1
  meetupArray.forEach(meetup => {
    const meetupHtml = buildMeetupHtml(meetup, num)
    meetupResultHtml += meetupHtml
    num =+ 1
  })
  // then, display this to the DOM
  const searchResultsSection = document.querySelector("#resultsForm")
  searchResultsSection.innerHTML = meetupResultHtml
}





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
const buildConcertsHtml = (concertsDisplay, count) =>
`
<article id="concertResult--${count}">
  <h4>${concertsDisplay.name}</h4>
  <p> Date: ${concertsDisplay.dates.start.localDate}</p>
  <p>Venue: ${concertsDisplay._embedded.venues[0].name}
</article>
`


const displayConcertsHTML = allConcertsDisplay => {
  console.log(allConcertsDisplay._embedded.events, typeof allConcertsDisplay._embedded.events)
  let counter = 1
  let concertsResultsHtml = ""
  allConcertsDisplay._embedded.events.forEach(concertsDisplay => {
    let concertsHtml = buildConcertsHtml(concertsDisplay, counter)
    concertsResultsHtml += concertsHtml
    counter++
  })
  const searchResultsSection = document.querySelector("#resultsForm")
  searchResultsSection.innerHTML = concertsResultsHtml
}



// MEETUP
// create an function that builds the HTML string for each meetup.
const buildMeetupHtml = meetup => {
  return `
<article>
  <h4>${meetup.name.text}</h4>
  <p>
      <a href="${meetup.url}">Click here to see the restaurant</a>
  </p>
</article>
`
}

// create a function to display meetups to the DOM
const displayMeetupHtml = meetupArray => {
  let meetupResultHtml = ""
  meetupArray.forEach(meetup => {
    const meetupHtml = buildMeetupHtml(meetup)
    meetupResultHtml += meetupHtml
  })
  // then, display this to the DOM
  const searchResultsSection = document.querySelector("#resultsForm")
  searchResultsSection.innerHTML = meetupResultHtml
}




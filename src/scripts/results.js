
// for parks API
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

// for restaurants API
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

// for concerts API
const buildConcertsHtml = concertsDisplay => `
<article>
  <h4>${concertsDisplay.title}</h4>
  <p>
      <a href="${concertsDisplay.source_url}">Click here to see the park</a>
  </p>
</article>
`


const displayConcertsHTML = allCocnertsDisplay => {
  let concertsResultsHtml = ""
  allConcertsDisplay.forEach(concertsDisplay => {
    let concertsHtml = buildConcertsHtml(concertsDisplay)
    concertsResultsHtml += concertsHtml
  })}

  const searchResultsSection = document.querySelector(".search-results")
  searchResultsSection.innerHTML = concertsResultsHtml


  // For the meetup API
const buildMeetupHtml = meetupDisplay => `
<article>
  <h4>${meetupDisplay.name.text}</h4>
  <p>
      <a href="${meetupDisplay.url}">Click here to see the restaurant</a>
  </p>
</article>
`
const displayMeetHTML = allmeetupDisplay => {
    let meetupResultHTML = ""
    allmeetupDisplay.forEach(meetupDisplay => {
      let meetupHTML = buildMeetupHTML(meetupDisplay)
      meetupResultHTML += meetupHTML
    });

    const searchResultsSection = document.querySelector(".search-results")
    searchResultsSection.innerHTML = meetupResultHTML
  }
  
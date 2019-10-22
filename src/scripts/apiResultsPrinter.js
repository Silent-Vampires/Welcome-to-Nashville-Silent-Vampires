
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
const buildRestHtml = restaurant =>{ 
  console.log(restaurant.restaurant.name)
  return `
<article>
  <h4>${restaurant.restaurant.name}</h4>
  <p>
      <a href="${restaurant.restaurant.url}">Click here to see the restaurant</a>
  </p>
</article>
`
}
const displayRestHTML = restaurantArray=> {
  console.log(restaurantArray)
  let restResultsHtml = ""
  restaurantArray.forEach(restaurant => {
    let restaurantHtml = buildRestHtml(restaurant)
    restResultsHtml += restaurantHtml
  });

  const searchResultsSection = document.querySelector("#resultsForm")
  searchResultsSection.innerHTML = restResultsHtml
}

// CONCERTS
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
})
    const searchResultsSection = document.querySelector(".search-results")
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





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
const buildRestHtml = restaurant => {
  return `
<article>
  <h4>${restaurant.name}</h4>
  <p>
      <a href="${restaurant.url}">Click here to see the restaurant</a>
  </p>
</article>
`
}
const displayRestHTML = restaurantArray => {
  let restResultsHtml = ""
  restaurantArray.forEach(restaurant => {
    let restaurantHtml = buildRestHtml(restaurant)
    restResultsHtml += restaurantHtml
  });

  const searchResultsSection = document.querySelector("#search-results")
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
  })
  const searchResultsSection = document.querySelector(".search-results")
  searchResultsSection.innerHTML = concertsResultsHtml
}







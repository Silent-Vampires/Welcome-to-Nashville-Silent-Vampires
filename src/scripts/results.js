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

const buildRestHtml = restDisplay => `
<article>
  <h4>${restDisplay.title}</h4>
  <p>
      <a href="${restDisplay.source_url}">Click here to see the restaraunt</a>
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
  
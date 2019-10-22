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


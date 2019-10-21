const baseUrl = "https://www.eventbriteapi.com/v3/events/"

const searchMeetups = searchInput => fetch(`${baseUrl}search/?q=${searchInput}&location.address=nashville&token=${meetupsApi}`)
.then(response => response.json())
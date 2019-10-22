// // beginning of the url for the eventbrite api
// const baseUrl = "https://www.eventbriteapi.com/v3/events/"

// // function that takes in a searchInput (which will be a topic the user enters), does a fetch call to the api, then translates from JSON
// const searchMeetups = searchInput => fetch(`${baseUrl}search/?q=${searchInput}&location.address=nashville&token=${meetupsApi}`, {
//     "headers": {
//         "Accept": "application/json"
//     }
//   })
// .then(response => response.json())

// this is the temporary work-around that works so that I can at least see how to access the api
const searchMeetups = searchInput => fetch(`https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json`)
.then(r => r.json())
// .then(results => {
//     // getting the name of the FIRST event
//     console.log(results.events)
//     });

// things that might be needed:
// meetupName = results.events[index].name.text
// meetupWebsite = results.event[index].resource_uri (or is it results.events[index].url)
// meetupVenue = results.events[index].venue.name
// meetupAddress = results.events[index].venue.address.address_1
// meetupCategory = results.events[index].category.name

searchMeetups();


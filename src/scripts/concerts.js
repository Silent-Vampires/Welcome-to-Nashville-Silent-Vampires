// create function to fetch ticketmaster api and convert to js object

const ticketMasterApiBaseUrl = "https://app.ticketmaster.com/discovery/v2/"

const searchConcerts = searchInput => fetch(`${ticketMasterApiBaseUrl}events.json?classificationName=music&dmaId=343&genre&keyword=${searchInput}&apikey=${ticketMasterApi}`)
    .then(response => response.json())

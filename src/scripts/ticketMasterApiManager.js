// create function to fetch tiketmaster api and convert to json

const ticketMasterApiBaseUrl = "https://app.ticketmaster.com/discovery/v2/"

const searchConcerts = searchInput => fetch(`${ticketMasterApiBaseUrl}events.json?classificationName=music&dmaId=324&keyword=${searchInput}&apikey=${ticketMasterApi}`)
    .then(response => response.json())
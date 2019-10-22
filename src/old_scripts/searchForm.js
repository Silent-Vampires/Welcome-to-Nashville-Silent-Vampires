const buildAndAppendSearchForm = () => {
    const searchForm = `
    <h1>Welcome to Nashville</h1>
    <h3>Search to Create Itinerary: </h3>
        <section class="parkSearch">
            <input type="text" id="parkText" placeholder="Parks">
            <button id = "searchButtonParks">Search</button>
        </section>

        <section class="restSearch">
            <input type="text" id="restText" placeholder="Restaurants">
            <button id = "searchButtonRestaurants">Search</button>
        </section>

        <section class="meetupSearch">
            <input type="text" id="meetText" placeholder="Meetup">
            <button id = "searchButtonMeetup">Search</button>
        </section>

        <section class="concertSearch">
            <input type="text" id="concertText" placeholder="Concerts">
            <button id = "searchButtonConcerts">Search</button>
        </section>

    `
    const containerDiv = document.querySelector("#searchForm")
    containerDiv.innerHTML = searchForm
  }
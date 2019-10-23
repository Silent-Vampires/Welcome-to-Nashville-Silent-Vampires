const buildItinerary = () => {
    const savedDivs = document.querySelector("#itineraryForm")
    const itineraryDisplay = `
    <h2>Itinerary</h2>
    <section class="itineraryForm">
        <div id="parkSaved"></div>
        <div id="restSaved"></div>
        <div id="meetSaved"></div>
        <div id="concertSaved"></div>
    </section>
    `
    savedDivs.innerHTML = itineraryDisplay;
}


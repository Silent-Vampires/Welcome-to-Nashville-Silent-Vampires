const buildItinerary = () => {
    const savedDivs = document.querySelector("#itineraryForm")
    const itineraryDisplay = `
    <h2 class="itineraryHeader">Itinerary</h2>
    <section class="itineraryForm">
        <div class="itineraryFinal" id="parkSaved"></div>
        <div class="itineraryFinal" id="restSaved"></div>
        <div class="itineraryFinal" id="meetSaved"></div>
        <div class="itineraryFinal" id="concertSaved"></div>
    </section>
    `
    savedDivs.innerHTML = itineraryDisplay;
}


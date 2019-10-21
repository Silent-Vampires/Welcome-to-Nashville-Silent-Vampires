const zomatoApiBaseURL = 'https://developers.zomato.com/api/v2.1'

const searchRestaurant = searchInput => fetch(`${zomatoApiBaseURL}/search?entity_id=1138&entity_type=city&${searchInput}`,
    //this header is there for accessing the credentials you have to have a header object
    {
        'header': {
            "accept": "application/json",
            //calling the restaurant api key from the apiKeys.js that is currently in .gitignore
            "user-key": `${restarauntsApi}`
        }
    }
)
    .then(response => response.json())
    .then(response => {
        console.log(response.restaurant.name)
        displayHtml(restaurantResponse.restaurant.name, restaurantResponse.restaurant.location.address, restaurantResponse.restaurant.phone_numbers)
    })

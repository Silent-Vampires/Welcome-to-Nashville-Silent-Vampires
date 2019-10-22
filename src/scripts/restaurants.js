const zomatoApiBaseURL = 'https://developers.zomato.com/api/v2.1'

const searchRestaurant = inputField => fetch(`${zomatoApiBaseURL}/search?entity_id=1138&entity_type=city&q=${inputField}`,
    //this header is there for accessing the credentials you have to have a header object
    {
        'headers': {
            "Content-Type": "application/json",
            //calling the restaurant api key from the apiKeys.js that is currently in .gitignore
            "user-key": `${restaurantsApi}`
        }
    }
)
    .then(response => response.json())

    searchRestaurant();
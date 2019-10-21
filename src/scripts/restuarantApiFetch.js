const zomatoApiBaseURL = 'https://developers.zomato.com/api/v2.1'

const searchRestaurant = searchInput => fetch(`${zomatoApiBaseURL}/search?entity_id=1138&entity_type=city&${searchInput}`, 

{'header':{
    "accept": "application/json",
    "user-key": '9fecd4ad44dabd6b0ef78a23c0491e3e'  
}})
.then(response => response.json())
.then(response=> {
        console.log(response.restaurant.name)
        displayHtml(restaurantResponse.restaurant.name, restaurantResponse.restaurant.location.address, restaurantResponse.restaurant.cuisines)
})

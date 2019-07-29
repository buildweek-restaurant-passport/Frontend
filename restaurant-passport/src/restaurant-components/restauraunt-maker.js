import React from "react";
import RestaurantInfo from './restaurant-info'

const RestaurantList = () => {

    const restaurants = [
        {
            name : 'Restaurant 1',
            type : 'Breakfast',
            address : '123 Main St',
            hours : '4AM - 2PM',
            favoriteDish: 'Eggs',
            cuisine: 'American'
        },
        {
            name : 'Restaurant 2',
            type : 'Fast-Food',
            address : '123 Main Ave',
            hours : '6AM - 10PM',
            favoriteDish: 'Chicken Sandwich',
            cuisine: 'Southern BBQ'
        },
        {
            name : 'Restaurant 3',
            type : 'Casual',
            address : '123 Main Ct',
            hours : '10AM - 9PM',
            favoriteDish: 'Fajitas',
            cuisine: 'Mexican'
        },    
        {
            name : 'Restaurant 4',
            type : 'Fine Dining',
            address : '123 Main Rd',
            hours : '4pm - 12AM',
            favoriteDish: 'Chicken Alfredo',
            cuisine: 'Italian'
        }
        ]

        return (

            restaurants.map((restaurant, index) => {
                return <RestaurantInfo {...restaurant} key = {index}/>
            })
        )
    
}

export default RestaurantList
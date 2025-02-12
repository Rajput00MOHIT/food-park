import React, { createContext, useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../data";

export const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();

        const restaurants = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    };

    const filterBySearch = (query) => {
        setSearchRestaurant(query);
        const filteredRes = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredRestaurants(filteredRes);
    };

    const filterTopRated = () => {
        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
        setFilteredRestaurants(filteredList);
    };

    return (
        <RestaurantContext.Provider
            value={{
                listOfRestaurants,
                filteredRestaurants,
                searchRestaurant,
                setSearchRestaurant: filterBySearch,
                filterTopRated,
            }}
        >
            {children}
        </RestaurantContext.Provider>
    );
};

export default RestaurantProvider;

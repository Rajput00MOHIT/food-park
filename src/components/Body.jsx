import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RestaurantContext } from "../context/RestaurantContext.jsx";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import Carousel from "./Carousel.jsx";


const Body = () => {
    const {
        listOfRestaurants,
        filteredRestaurants,
        searchRestaurant,
        setSearchRestaurant,
        filterTopRated,
    } = useContext(RestaurantContext);

    const [topRatedRestaurants, setTopRatedRestaurants] = useState([]);

    useEffect(() => {
        // Fetch and set top-rated restaurants
        const topRated = listOfRestaurants.filter((res) => res.info.avgRating > 4);
        setTopRatedRestaurants(topRated);
    }, [listOfRestaurants]);

    if (listOfRestaurants.length === 0) return <Shimmer />;

   
   
    return (
        <div className="body bg-gray-50 p-4 min-h-screen">
          <Carousel topRatedRestaurants={topRatedRestaurants} />
            <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(searchRestaurant.length > 0 ? filteredRestaurants : listOfRestaurants).map(
                    (restaurant) => (
                        <Link
                            to={`/restaurant/${restaurant.info.id}`}
                            key={restaurant.info.id}
                            className="block"
                        >
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    )
                )}
            </div>
        </div>
    );
};

export default Body;

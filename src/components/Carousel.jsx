import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ topRatedRestaurants }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="carousel-container mb-8">
            <h2 className="text-xl font-bold mb-4">Top Rated Restaurants</h2>
            <Slider {...settings} className="block border border-gray-800 rounded-lg overflow-hidden w-[80%] center ml-[140px] shadow-lg transition-shadow">
                {topRatedRestaurants.map((restaurant) => (
                    <div
                        key={restaurant.info.id}
                        className="p-[2px] flex items-center justify-center"
                    >
                        <Link
                            to={`/restaurant/${restaurant.info.id}`}
                            className="block border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;

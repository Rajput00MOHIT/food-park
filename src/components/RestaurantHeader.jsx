import React from "react";
import { CDN_URL } from "../data";

const RestaurantHeader = ({ cloudinaryImageId, areaName, cuisines, locality, avgRating, totalRatingsString }) => {
    return (
        <section className="res-header flex justify-between bg-white shadow-md p-6 rounded-lg mb-6">
            <div>
                <img
                    className="w-32 h-32 rounded-lg object-cover"
                    src={CDN_URL + cloudinaryImageId}
                    alt={areaName}
                />
                <h1 className="text-2xl font-semibold mt-4">{areaName || "Restaurant Name"}</h1>
                <p className="text-gray-600">{cuisines.join(", ") || "Cuisines not available"}</p>
                <p className="text-gray-600">{locality || "Locality not available"}</p>
            </div>
            <div className="res-rating flex flex-col items-center">
                <h2 className="text-xl font-bold text-green-500">⭐ {avgRating || "N/A"}</h2>
                <p className="text-gray-600">{totalRatingsString || "No ratings available"}</p>
            </div>
        </section>
    );
};

export default RestaurantHeader;

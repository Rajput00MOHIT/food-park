// components/RestaurantMenu.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_API_URL } from "../data";
import Shimmer from "./Shimmer";
import RestaurantHeader from "./RestaurantHeader";
import MenuItem from "./MenuItem";
import CartPopup from "./CartPopup";
import FloatingCartIcon from "./FloatingCartIcon";  // Import FloatingCartIcon component

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const response = await fetch(SWIGGY_MENU_API_URL + resId);
                const data = await response.json();
                setRestaurant(data.data);
            } catch (error) {
                console.error("Error fetching restaurant data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurant();
    }, [resId]);

    if (loading) return <Shimmer />;
    if (!restaurant) return <div>Error loading restaurant data.</div>;

    const {
        areaName,
        cuisines = [],
        costForTwoMessage,
        cloudinaryImageId,
        locality,
        avgRating,
        totalRatingsString,
    } = restaurant?.cards[2]?.card?.card?.info || {};

    const itemCards =
        restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
            (c) => c?.card?.card?.itemCards
        )?.card?.card?.itemCards || [];

    return (
        <div className="container mx-auto p-4">
            <RestaurantHeader
                cloudinaryImageId={cloudinaryImageId}
                areaName={areaName}
                cuisines={cuisines}
                locality={locality}
                avgRating={avgRating}
                totalRatingsString={totalRatingsString}
            />
            <section className="res-recomends">
                <h2 className="text-xl font-semibold mb-4">Recommended ({itemCards.length})</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {itemCards.map((item) => (
                        <MenuItem key={item.card.info.id} item={item.card.info} />
                    ))}
                </ul>
            </section>

            {/* Popup and Cart Icon */}
            <CartPopup />
            <FloatingCartIcon />
        </div>
    );
};

export default RestaurantMenu;

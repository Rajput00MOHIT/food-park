import { CDN_URL } from "../data";

const RestaurantCard = (props) => {
    const { resData } = props;

    return (
        <div className="res-card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105">
            {/* Restaurant Image */}
            <img
                className="res-logo w-full h-40 object-cover"
                src={CDN_URL + resData.info.cloudinaryImageId}
                alt={resData.info.name}
            />
            
            {/* Restaurant Info */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {resData.info.name}
                </h3>
                <h4 className="text-sm text-gray-600 truncate">
                    {resData.info.cuisines.join(", ")}
                </h4>
                <div className="flex items-center justify-between mt-2">
                    {/* Average Rating */}
                    <span
                        className={`text-sm font-medium px-2 py-1 rounded-lg ${
                            resData.info.avgRating >= 4
                                ? "bg-green-100 text-green-600"
                                : resData.info.avgRating >= 3
                                ? "bg-yellow-100 text-yellow-600"
                                : "bg-red-100 text-red-600"
                        }`}
                    >
                        ★ {resData.info.avgRating}
                    </span>

                    {/* Delivery Time */}
                    <h4 className="text-sm text-gray-600">
                        {resData.info.sla.deliveryTime} mins
                    </h4>
                </div>
                {/* Cost for Two */}
                <h4 className="text-sm text-gray-800 mt-2">
                    {resData.info.costForTwo}
                </h4>
            </div>
        </div>
    );
};

export default RestaurantCard;

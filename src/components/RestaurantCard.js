import {IMG_CDN_URL} from "../constants";

const RestaurantCard = ({
    name, cuisines, cloudinaryImageId, totalRatingsString}) => {
    return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img src={IMG_CDN_URL+cloudinaryImageId
        } />
        <h2 className="font-bold test-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{totalRatingsString} stars</h4>
    </div>
    );
};

export default RestaurantCard;
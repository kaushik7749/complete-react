import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestraunt] = useState([]); //keeping a copy of all resaurants
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //By default useState() should have dummy data i.e. restaurantList
  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  //1. empty dependency array => once after render
  //2. dep array[searchText] => once after initial render + everytime after
  //-(my searchText changes).

  useEffect(() => {
    //API call
    fetchData();
  }, []);

  const fetchData = async () => {
    //when we do fetch it awaits 1st time and returns you the promise with readable stream.
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    //Now when we convert it to json, 2nd promise is returned here
    const json = await data.json();
    //optional chaining
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); //rendering json data
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);
  console.log(listOfRestaurants);

  //when I don't I have my restaurant don't return anything(Early return)

  //if(!allRestaurants.length) return null;

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-50"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            // Filter the restraunt cards and update the UI
            // searchText
            console.log(searchText);

            const filteredRestaurant = listOfRestaurants?.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search m-4 p-4 flex items-center">
        <label>UserName : </label>
        <input
          className="border border-black p-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => {
          //I will show in my UI filtered restaurant.
          //Now we are mapping our key component to Link component
          //-So, key which is present in RestaurantCard should be in our Link component.
          return (
            <Link
              key={restaurant?.info.id}
              to={"/restaurants/" + restaurant?.data?.id}
            >
              {restaurant?.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant?.info} />
              ) : (
                <RestaurantCard resData={restaurant?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

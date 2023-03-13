import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]); //keeping a copy of all resaurants
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); //By default useState() should have dummy data i.e. restaurantList
    
//1. empty dependency array => once after render
//2. dep array[searchText] => once after initial render + everytime after
//-(my searchText changes).

    useEffect(() => {
        //API call
        getRestaurants();
    }, []);
    
   async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); //rendering json data
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
   }

   const isOnline = useOnline();

   if(!isOnline) {
    return <h1>🔴Offline, please check your internet connection!!</h1>
   }

   //when I don't I have my restaurant don't return anything(Early return)
  
   //if(!allRestaurants.length) return null;

    return allRestaurants.length === 0 ? (
        <Shimmer />
    ) : (    
        <>
            <div className="search-container p-5 bg-pink-50 my-5">
                <input type="text" className="focus:bg-green-50" placeholder="search" 
                value={searchText}
                onChange = {(e) => {
                    setSearchText(e.target.value);
                }}
                />
                <button className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md" onClick={() => {
                    //I am searching the data from allRestaurants
                    const data = filterData(searchText, allRestaurants); 
                    //I want to update my filteredRestaurant on click of it.
                    setFilteredRestaurants(data);

                }}>Search</button>
            </div>

      <div className="flex flex-wrap">
          {
          filteredRestaurants.map((restaurant) => {
            //I will show in my UI filtered restaurant.
            //Now we are mapping our key component to Link component
            //-So, key which is present in RestaurantCard should be in our Link component.
              return( <Link to={"/restaurant/" +restaurant.data.id} key={restaurant.data.id}> 
              <RestaurantCard {...restaurant.data} /></Link>
              );
            })}
            
        </div>
        </>
    );
};

export default Body;
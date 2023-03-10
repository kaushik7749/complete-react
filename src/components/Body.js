import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => 
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
}


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


   //when I don't I have my restaurant don't return anything(Early return)
  
   //if(!allRestaurants.length) return null;

    return allRestaurants.length === 0 ? (
        <Shimmer />
    ) : (    
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="search" 
                value={searchText}
                onChange = {(e) => {
                    setSearchText(e.target.value);
                }}
                />
                <button className="search-btn" onClick={() => {
                    //I am searching the data from allRestaurants
                    const data = filterData(searchText, allRestaurants); 
                    //I want to update my filteredRestaurant on click of it.
                    setFilteredRestaurants(data);

                }}>Search</button>
            </div>

      <div className="restaurant-list">
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
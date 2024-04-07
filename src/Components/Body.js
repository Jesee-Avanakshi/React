import { resList } from "../utils/mockdata";
import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body =() => {
    
    const [listOfRestaurants,setListOfRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredRestaurants,setFilteredRestaurants] = useState(listOfRestaurants);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8636868&lng=77.5804993&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json_data = await data.json()
        console.log(json_data);

        setListOfRestaurant(json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(listOfRestaurants);
        setFilteredRestaurants(json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if (listOfRestaurants.length === 0 ){
        return <Shimmer />;
    }
    
    return(
      <div className="body">
          <div className="filter">
            <div className="search">
                <input type="text" className= "search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button className = "search-btn" onClick={()=>{
                    const filtered_restaurants = listOfRestaurants.filter((restaurant)=>{
                        return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                    });
                    console.log(filtered_restaurants);
                    setFilteredRestaurants(filtered_restaurants);
                    console.log(filteredRestaurants);
                }}>Search</button>

            </div>
            <button className ="filter-btn" onClick={()=> {
                const filtered_restaurants = listOfRestaurants.filter((restaurant)=> restaurant.info.avgRating >=4.2);
                setListOfRestaurant(filtered_restaurants);

            }}> Top Rated Restaurant </button>
          </div>
          <div className="res-container">
              {
                  filteredRestaurants.map((restaurant) =>
                    <ResCard key = {restaurant.info.id} resData = {restaurant}/>
            
                   )
              }
          </div>
      </div>
    )
  }
export default Body;
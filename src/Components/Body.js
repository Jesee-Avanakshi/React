import { resList } from "../utils/mockdata";
import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { resList } from "../utils/mockdata";

const Body =() => {
    
    const [listOfRestaurants,setListOfRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredRestaurants,setFilteredRestaurants] = useState(listOfRestaurants);

    const onlineStatus = useOnlineStatus();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8636868&lng=77.5804993&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json_data = await data.json()
        console.log(json_data);

        setListOfRestaurant(json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(listOfRestaurants);
        setFilteredRestaurants(json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if (listOfRestaurants.length === 0 ){
        return <Shimmer />;
    }
    
    

    if(onlineStatus == false){
        return <div>
            <h1> Looks like you lost the connection. Please check!!</h1>
        </div>
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
                console.log(listOfRestaurants);
                const filtered_restaurants = listOfRestaurants.filter((restaurant)=> restaurant.info.avgRating >= 4.5);
                console.log(filtered_restaurants);
                setListOfRestaurant(filtered_restaurants);

            }}> Top Rated Restaurant </button>
          </div>
          <div className="res-container">
              {
                  filteredRestaurants.map((restaurant) =>
                    <Link to = {"/restaurants/" +restaurant.info.id } key = {restaurant.info.id} className = "res-link">
                        <ResCard  resData = {restaurant}/>
                    </Link>
                    
            
                   )
              }
          </div>
      </div>
    )
  }
export default Body;
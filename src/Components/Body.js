import { resList } from "../utils/mockdata";
import ResCard from "./ResCard";
import { useState } from "react";



const Body =() => {
    const [listOfRestaurants,setListOfRestaurant] = useState(resList);
    return(
      <div className="body">
          <div className="filter">
            <button className ="filter-btn" onClick={()=> {
                const filtered_restaurants = listOfRestaurants.filter((restaurant)=> restaurant.info.avgRating >=4.5);
                setListOfRestaurant(filtered_restaurants);
                console.log(filtered_restaurants)
            }}> Top Rated Restaurant </button>
          </div>
          <div className="res-container">
              {
                  listOfRestaurants.map(restaurant =><ResCard key = {restaurant.info.id} resData = {restaurant}/>)
              }
          </div>
      </div>
    )
  }
export default Body;
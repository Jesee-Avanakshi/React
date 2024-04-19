import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";


const RestaurantMenu =() => {
    const [resInfo,setResInfo]=useState([]);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_URL + resId);
        const json_data = await data.json();
        // console.log(json_data)
        setResInfo (json_data);
    };

    if (resInfo.length === 0){
        return <Shimmer />   ;
    }

    // const {name} = resInfo?.data?.cards[2]?.card?.card?.info;
    console.log(resInfo);
    const {name,cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;
    console.log("print something");
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log("card",itemCards);
    return ( 
    <div className="menu">
        <div className="menu-card-container">
            <h1> {name}</h1>
            <h2> {cuisines.join(", ")}</h2>
        
        <h1> Menu</h1>
        <div className="menu-items">
            <ul>
                {itemCards.map((item)=>(
                    <li key = {item.card.info.id}>
                        {item.card.info.name} - <b>Rs.{item.card.info.price/100 ||item.card.info.defaultPrice /100}</b>
                    </li>))}
            </ul> 
        </div>
        
        </div>       
    </div>)
};

export default RestaurantMenu
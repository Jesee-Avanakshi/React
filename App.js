import React from "react";
import ReactDOM from "react-dom"

// const title = (<h1> LET US HAVE A TITLE</h1>) ;

// const HeadingComponent = () => (
//     <div className="parent">
        
//         <h1> Welcome Jesee!!</h1> 
//         <p> New learnings lead to new earnings</p>  
        
//     </div>
// );

/**
 * Header
 *  logo
 *  nav items
 * Body
 *  search
 *  restaurantcontainer
 *      restaurant cards
 *          img
 *          res name, star rating, cuisine, delivery time etc.,
 * Footer
 *  Links
 *  Licence
 *  Address
 *  Contact
 * 
 */
// styles can be given as javascript object

 const Header =() => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li> Cart</li>
                </ul>
            </div>

        </div>
    )
};


const ResCard = () => {
    return (
        <div className="res-card" style={{
            backgroundColor : "#f0f0f0"
        }}>
            <img className="res-logo" src="https://meghanafoods.co.in/photo/Meghana%20special%20biryani.jpg"/>
            <h3>Meghana Foods</h3>
            <h4> Biryani, Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4> 38 minutes</h4>
        </div>
    );
};
const Body =() => {
  return(
    <div className="body">
        <div className="search">
            search
        </div>
        <div className="res-container">
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
        </div>
    </div>
  )
}

const AppLayout = ()=>{
    return (
    <div className="app">
        <Header/>
        <Body/>
    </div>);
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
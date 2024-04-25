import React  from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Grocery from "./Components/Grocery";
import { Suspense ,lazy } from "react";
import Shimmer from "./Components/Shimmer";


const Grocery = lazy(()=>import("./Components/Grocery"));

const AppLayout = ()=>{
    return (
    <div className="app">
        <Header/>
        <Outlet/>
    </div>);
};



const appRouter = createBrowserRouter([
 {
  path :'/',
  element : <AppLayout />,
  children :[
    {
      path : '/',
      element : <Body />
     },
    {
      path : '/AboutUs',
      element : <AboutUs />
     },
     {
      path : '/Contact',
      element : <Contact />
     },
     {
      path : '/Grocery',
      element : <Suspense fallback={<Shimmer />}> <Grocery /> </Suspense>
     },
     {
      path: '/restaurants/:resId',
      element : <RestaurantMenu />
     }
  ],
  errorElement :<Error />
 },
 


]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
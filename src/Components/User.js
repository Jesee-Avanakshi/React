import { useState } from "react";

const User = ({name}) =>{
    
    let [count,setCount] = useState(0);
    



    return (
        <div className="user-card">
            <h1> count : {count}</h1>
            <button onClick={()=>{
                setCount(count+1)
                console.log(count);
            }}> Button increase</button>
            <h1> Name : {name}</h1>
            <h2> Location : Tirupathi</h2>
            <h2> Contact : 9164326625</h2>
        </div>
    )
}

export default User;
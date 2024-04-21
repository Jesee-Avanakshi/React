import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutUs extends React.Component{
    constructor(props){
        super(props)
        console.log("parent constructor");
        this.state ={
            userInfo:{
                name:"default",
                location:"default"
            },
        };
    }

    async componentDidMount(){
        console.log("Parent mount");
        //API call
        const data = await fetch("https://api.github.com/users/jesee-avanakshi");
        const json =await data.json();
        
        this.setState({
            userInfo :json,
        })

        console.log(json);


    }

    render(){
        console.log("parent render");
        const {name,location,avatar_url} = this.state.userInfo;
        return <div>
        <h1>About Us</h1>
        {/* <User name ={'Jesee Avanakshi (Function)'}/> */}
        
        <UserClass name ={name} location ={location} avatar_url={avatar_url}/>
    </div>
    }
}

export default AboutUs;
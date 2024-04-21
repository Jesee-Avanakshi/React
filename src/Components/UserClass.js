import React from "react";


class UserClass extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {}
        console.log("child constructor");
    }
    componentDidMount(){
        console.log("Child mount");
    }

    componentDidUpdate(){
        console.log("child did update")
    }

    componentWillUnmount(){
        console.log("Unmount");
    }
    render(){
        const {name,location,avatar_url} =this.props;
        const {count} = this.state
        console.log("child render");
        return (
            <div className="user-card">
                <img src ={avatar_url}/>
                <h1> Name : {name}</h1>
                <h2> Location : {location}</h2>
                <h2> Contact : @jeseereddy</h2>
            </div>
        );
    }
}

export default UserClass;
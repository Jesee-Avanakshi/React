import React from "react";
import ReactDOM from "react-dom"

{/* <div id = "parent">
    <div id = "child1">
        <h1>
            This is h1 tag!!
        </h1>
        <h2> this is a h2 tag!!</h2>
    </div>
</div> */}


const heading = React.createElement("div",{id :"parent"},
[React.createElement("div",{id :"child1"},[React.createElement("h1",{},"This is a h1 tag!!"),React.createElement("h2",{},"This is a h2 tag!!")]),
React.createElement("div",{id :"child2"},[React.createElement("h1",{},"This is a lovely tag!!"),React.createElement("h2",{},"This is a h2 tag!!")])]);
console.log(heading)   //return object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
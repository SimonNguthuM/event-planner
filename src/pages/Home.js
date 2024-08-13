import React from "react";
import Events from "../components/Events";
import Navbar from "../components/Navbar";

function Home (){
    return (
    <div>
        <Navbar />
        <h1>Event-Planner Elite</h1>
        <Events />
    </div>)
}

export default Home
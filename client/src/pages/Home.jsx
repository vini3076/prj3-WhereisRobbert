import React, { useEffect } from "react";
import { getCamps } from "../utils/API";



const Home = () => {
    useEffect(() => {
        getCamps().then (response => response.json())
        .then(data => console.log(data))
    }, [])
    return (
        <>
        <h1>
           Home
        </h1>
        </>
    )
}

export default Home;
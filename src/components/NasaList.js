import React, { useState, useEffect } from "react";
import NasaCard from "../components/NasaCard";
import axios from "axios";

function NasaList() {
    const [nasaData, setNasaData] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=hRngM2bQ3jURPjrIBKB0oVjLBpqKfAgxLSnISh6V")
            .then(response => {
                console.log(response.data)
                setNasaData(response.data)
            })
            .catch(error => {
                console.log("sorry", error)
            })
    }, [])
   

    return (
        <div className="nasaList">
            <NasaCard  title={nasaData.title} hdurl={nasaData.hdurl} explanation={nasaData.explanation} date={nasaData.date} />
        </div>
    );
}

export default NasaList;

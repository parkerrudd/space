import React, { useEffect, useState } from "react";
import styles from '../styles/styles.css'; 
import axios from "axios";

const NASA_API_BASE = 'https://images-api.nasa.gov/search?q='

function NASA() {

    const [query, setQuery] = useState('')

    const searchNASA = async (q) => {
        const req = await fetch(NASA_API_BASE + q)
        const data = await req.json()
        console.log(data);
    }



    return (
        <div className="NASA-container">
            <h1>Search the Stars</h1>
            <div className="search-nasa-api">
                <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search the stars..."/>
                <button onClick={searchNASA(query)} type="submit">Search</button>
            </div>
        </div>
    ); 
}

export default NASA
import React, { useEffect, useState } from "react";
import styles from '../styles/styles.css'; 
import axios from "axios";

const NASA_API_BASE = 'https://images-api.nasa.gov/search?q='

function NASA() {

    const [query, setQuery] = useState('')
    const [image, setImage] = useState('')

    function searchNASA() {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
            fetch(NASA_API_BASE + query, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result.collection.items[1].links[0].href))
            .catch(error => console.log('error', error));
    }



    return (
        <div className="NASA-container">
            <h1>Search the Stars</h1>
            <div className="search-nasa-api">
                <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search the stars..."/>
                <button onClick={() => searchNASA()} type="submit">Search</button>
            </div>

            {image.length ? 
                <div className="image">
                    <img src="image" alt="NASA Space Image" />
                </div>
                : null
            }

        </div>
    ); 
}

export default NASA
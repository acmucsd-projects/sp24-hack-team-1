"use client"
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import List from "./list";
import styles from "../../explore/page.module.css"
import './Searchbar.css';
import ExploreCard from '../exploreCard/ExploreCard';

const Searchbar = () => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        let autocomplete;
        function initAutocomplete() {
            autocomplete = new google.maps.places.SearchBox(
                document.getElementById('autocomplete'),
                {
                    types: ['establishment'],
                    componentRestrictions: {'country': ['US']},
                    fields: ['place_id', 'geometry', 'name', 'photos']
                }
            );
            autocomplete.addListener("places_changed", () => {
                let places = autocomplete.getPlaces();
                
                let newResults = [];
                for (let i = 0; i < places.length; i++) {
                    let newName = places[i].name;
                    let newPhoto = places[i].photos[0].getUrl();
                    newResults[i] = [newName, newPhoto];
                }

                setResults(newResults);
            });
        }
        // Ensure the Google Maps API is loaded before calling initAutocomplete
        if (typeof google !== 'undefined') {
            initAutocomplete();
        }
    }, []);

    return (
        <div className="main">
             <script async
               src='https://maps.googleapis.com/maps/api/js?key=AIzaSyA5b2NXZOUrWpQZ4_1ZT8rKok3tcc1sYq0&loading=async&libraries=places&callback=initMap'>
           </script>  

            <h1>SD Hack Tours</h1>
            <div className="search">
                <TextField
                    id="autocomplete"
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
            </div>
            <List />
            <div className={styles.exploreCardsContainer}>
                {results.map((result) => (
                    <ExploreCard 
                        title={result[0]}
                        imageURL={result[1]}
                        body="test desc 2"
                        />
                ))}
            </div>
        </div>
    );
}

export default Searchbar;
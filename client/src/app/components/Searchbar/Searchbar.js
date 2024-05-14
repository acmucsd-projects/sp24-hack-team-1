"use client"
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import List from "./list";
import './Searchbar.css';

const Searchbar = () => {
    useEffect(() => {
        let autocomplete;
        function initAutocomplete() {
            autocomplete = new google.maps.places.Autocomplete(
                document.getElementById('autocomplete'),
                {
                    types: ['establishment'],
                    componentRestrictions: {'country': ['US']},
                    fields: ['place_id', 'geometry', 'name']
                }
            );
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
        </div>
    );
}

export default Searchbar;

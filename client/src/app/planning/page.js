"use client";

import Link from "next/link"
import styles from "./page.module.css"
import NavBar from '../components/navbar/navbar'
import Card from '../components/locationCard/Card'
import React, { useState, useEffect } from "react";
import axios from "axios";

function Planning() {
    const [planner, setPlanner] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/plan");
            setPlanner(response.data);
        }
        catch(error) {
            console.error("Failed to fetch planner: ", error);
        };
    }
    useEffect(() => {
        fetchData();
    }, []); 

    return(
        <div>
            <div>
            <NavBar></NavBar>
            </div>
            <h1>
                Your planner is empty. Click the plus to get planning!
            </h1>
            <div className={styles.cardsContainer}>
                {planner.map((place) => (
                    <Card
                    title={place.title}
                    imageURL={place.imageURL}
                    body="this is a test desc"
                    />
                ))}        
            </div>
        </div>
    )
}
export default Planning;
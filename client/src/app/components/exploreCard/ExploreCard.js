import React from 'react';
import './ExploreCard.css'
import Image from 'next/image';
import axios from "axios";

export default function ExploreCard({title, imageURL, body}) {
    const handleClick = async () => {
        try {
          const response = await axios.post("http://localhost:5000/api/plan", {title: title, imageURL: imageURL, description: body});
          console.log(response.data);
        } catch (error) {
          console.error("Failed to update: ", error);
        }
    };

    return (
        <div className="card-container">  
            <div className="image-container">
                <img src={imageURL} alt='card-image'/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
            </div>
            <div className='btn'>
                <button onClick={()=>{handleClick()}}>
                    <a>
                        Add to Itinerary
                    </a>
                </button>
            </div>
        </div>
    )
}

import React from 'react'
import './ExploreCard.css'
import Image from 'next/image';

export default function ExploreCard({title, imageURL, body}) {
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
                <button>
                    <a>
                        Add to Itinerary
                    </a>
                </button>
            </div>
        </div>
    )
}

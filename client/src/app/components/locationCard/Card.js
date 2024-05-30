import React from 'react'
import './Card.css'
import Image from 'next/image';

export default function Card({title, imageURL, body}) {
    return (
        <div className="card-container">  
            Card
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
                        Edit
                    </a>
                </button>
            </div>
        </div>
    )
}

import React from 'react'
import './navbar.css'
import Link from 'next/link';
import Image from 'next/image';

export default function navbar(){
    return(
        <div id="navbar" className= 'logo'>
            <div className = "title">
                <a href="/" >
                    <Image
                    src="/logo.svg"
                    alt="placeholder logo"
                    width={150}
                    height={110}
                    priority
                    />
                </a>
            </div>
            <div className = "titleHolder">
                    <Link href='/'>
                        Hack Tours
                    </Link>
                </div>
            <div className = "navButtons">
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Yeseva+One&display=swap" rel="stylesheet"></link>
                <Link href='/explore'>
                    Explore
                </Link>
                <Link href='/Schedule Planner'>
                    Planner
                </Link>
                <Link href='/Map'>
                    Map
                </Link>
            </div>
        </div>
    )
}

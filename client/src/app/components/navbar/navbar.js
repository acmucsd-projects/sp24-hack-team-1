import React from 'react'
import './navbar.css'
import Link from 'next/link';
import Image from 'next/image';

export default function navbar(){
    return(
        <div id="navbar" className= 'logo'>
            <div className = "title">
            <Image
                src="/logo_placeholder.png"
                alt="placeholder logo"
                width={150}
                height={110}
                priority
            />
                <Link href='/'>
                    Hack Tours
                </Link>
            </div>
            <div className = "navButtons">
                <Link href="/home">
                    Home
                </Link>
                <Link href='/explore'>
                    Explore
                </Link>
                <Link href='/Schedule Planner'>
                    Schedule Planner
                </Link>
                <Link href='/Map'>
                    Map
                </Link>
            </div>
        </div>
    )
}

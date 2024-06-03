"use client";
import React, { useEffect, useRef } from "react";
import { Loader } from '@googlemaps/js-api-loader';

export default function Map() {
<<<<<<< HEAD
=======
    console.log("bruh")
    console.log("Process:" + process.env);
    console.log(process.env.NEXT_PUBLIC_MAPS_API_KEY);
>>>>>>> 85bf20c7bd64a570a5da2646def19dd415161b9b
    const mapRef = useRef(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
<<<<<<< HEAD
                apiKey: 'AIzaSyA5b2NXZOUrWpQZ4_1ZT8rKok3tcc1sYq0',
=======
                apiKey: '',
>>>>>>> 85bf20c7bd64a570a5da2646def19dd415161b9b
                version: 'weekly'
            });

            const { Map } = await loader.importLibrary('maps');
            const position = {
                lat: 32.7157,
                lng: -117.1611
            };

            // Map options
            const mapOptions = {
                center: position,
                zoom: 11,
                mapId: '104dc8e32646e1c4'
            };
            
            // Setup map
            const map = new Map(mapRef.current, mapOptions);
        };
        
        initMap();
    }, []);

    return (
        <div style={{ height: '600px'}} ref={mapRef} />
    );
}

"use client";
import React, { useEffect, useRef } from "react";
import { Loader } from '@googlemaps/js-api-loader';

export default function Map() {
    console.log("bruh")
    console.log("Process:" + process.env);
    console.log(process.env.NEXT_PUBLIC_MAPS_API_KEY);
    const mapRef = useRef(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: ,
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

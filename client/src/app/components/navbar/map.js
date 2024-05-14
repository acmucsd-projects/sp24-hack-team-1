"use client";
import React, { useEffect, useRef } from "react";
import { Loader } from '@googlemaps/js-api-loader';

export default function Map() {
    const mapRef = useRef(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
                version: 'weekly'
            });

            const { Map } = await loader.importLibrary('maps');
            const position = {
                lat: 32.7157,
                lng: 117.1611
            };

            // Map options
            const mapOptions = {
                center: position,
                zoom: 11,
                mapId: 'MY_NEXTJS_MAPID'
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

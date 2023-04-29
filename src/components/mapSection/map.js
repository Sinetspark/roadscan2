import styles from "./styleMap.module.css";
import React, {useEffect, useState} from 'react';
import { useMemo} from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api"

// import axios from "axios";

export const Section1 = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })

    const center = useMemo(() => ({lat: 43.238189, lng: 76.893086}), []);

    const API_URL="https://gentle-harbor-31655.herokuapp.com/api/cracks/"

    // const [data, setData] = useState([])
    // const fetchUserData = () => {
    //     fetch(API_URL)
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             setData(data)
    //             console.log(data)
    //         })
    // }
    //
    // useEffect(() => {
    //     fetchUserData()
    // }, [])

    if (!isLoaded) return <div>Loading...</div>
    return(

        <GoogleMap
        zoom={12}
        center={center}
        mapContainerClassName={styles.mapContainer}>
        </GoogleMap>


    )

}


export default Section1;

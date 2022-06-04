import React, {useEffect, useRef} from "react"
import { Wrapper } from "@googlemaps/react-wrapper"

const Map = () => {
    const mapRef = useRef()

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 3,
            mapId: "5f6d810b56f31bd3",
            disableDefaultUI: true,
            minZoom: 3,
            maxZoom: 15,
            restriction: {
                latLngBounds: {
                    east: 180,
                    north: 85,
                    south: -85,
                    west: -180
                }
            },
        })

        const marker = new window.google.maps.Marker({
            position: { lat: -34.397, lng: 150.644 },
            map,
            title: "Hello World!",
        });
    }, [])

    return <div style={{height: "100vh", position: "absolute", width: "100vw", top: 0, left: 0, zIndex: -1}} ref={ mapRef }></div>

}

export default Map
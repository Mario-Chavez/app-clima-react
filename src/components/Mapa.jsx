import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

const Mapa = ({ lati, long }) => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken =
            "pk.eyJ1IjoibWFyaW9hY2hhdmV6IiwiYSI6ImNsaWgyeTh6MDBua20zZm1xY3AxNWpveHIifQ.-fJZqwUHo68pkVtBtbwNLQ";

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-74.5, 40],
            zoom: 11,
        });

        const lat = lati;
        const lon = long;
        map.setCenter([lon, lat]);

        return () => {
            map.remove();
        };
    }, [lati]);

    return <div ref={mapContainerRef} style={{ width: "100%", height: "400px" }} />;
};

export default Mapa;

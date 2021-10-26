import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken =
  "pk.eyJ1IjoidmlldGN0aSIsImEiOiJja2twejJ0c2gwY2F2MnFvNW00enZ3NHl2In0.TVhNUtbDIMYHTZUSLmjpAQ";

const Map = (props) => {
  const mapRef = useRef(null);
  //const map = useRef(null);
  const { center, zoom } = props;
  useEffect(() => {
    //if (map.current) return;
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: zoom,
    });

    new mapboxgl.Marker().setLngLat(center).addTo(map);
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;

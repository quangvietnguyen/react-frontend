import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router";


const DUMMY_Places = [
    {
        id: 'p1',
        title: 'CN Tower',
        description: 'Highest site in Canada',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Toronto_-_ON_-_Toronto_Harbourfront7.jpg',
        address: '290 Bremner Blvd, Toronto, ON M5V 3L9',
        location: {
            lng: -79.3852341,
            lat: 43.6430207
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'CN Tower',
        description: 'Highest site in Canada',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Toronto_-_ON_-_Toronto_Harbourfront7.jpg',
        address: '290 Bremner Blvd, Toronto, ON M5V 3L9',
        location: {
            lng: -79.3852341,
            lat: 43.6430207
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_Places.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces;
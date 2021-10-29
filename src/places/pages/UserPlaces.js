import React, { useEffect, useState } from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

// const DUMMY_Places = [
//   {
//     id: "p1",
//     title: "CN Tower",
//     description: "Highest site in Canada",
//     imageUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/9/96/Toronto_-_ON_-_Toronto_Harbourfront7.jpg",
//     address: "290 Bremner Blvd, Toronto, ON M5V 3L9",
//     location: {
//       lng: -79.3852341,
//       lat: 43.6430207,
//     },
//     creator: "u1",
//   },
//   {
//     id: "p2",
//     title: "CNN Tower",
//     description: "Highest site in Canada",
//     imageUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/9/96/Toronto_-_ON_-_Toronto_Harbourfront7.jpg",
//     address: "290 Bremner Blvd, Toronto, ON M5V 3L9",
//     location: {
//       lng: -79.3852341,
//       lat: 43.6430207,
//     },
//     creator: "u2",
//   },
// ];

const UserPlaces = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPlaces, setLoadedPlaces] = useState();
  const userId = useParams().userId;
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:4000/api/places/user/${userId}`
        );
        setLoadedPlaces(responseData.places);
      } catch (e) {}
    };
    fetchPlaces();
  }, [sendRequest, userId]);

  const placeDeleteHandler = (deletedPlaceId) => {
    setLoadedPlaces(prevPlaces => prevPlaces.filter(place => place.id !== deletedPlaceId))
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} onDelete={placeDeleteHandler}/>}
    </React.Fragment>
  );
};

export default UserPlaces;

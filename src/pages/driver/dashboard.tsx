import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";

export const Dashboard = () => {
  const onWatchSucces = (coord: Position) => {
    console.log(coord);
  };
  useEffect(() => {
    navigator.geolocation.watchPosition(onWatchSucces);
  }, []);
  return (
    <div>
      <div
        className="overflow-hidden"
        style={{ width: window.innerWidth, height: "95vh" }}
      >
        <GoogleMapReact
          defaultZoom={10}
          draggable={false}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33,
          }}
          bootstrapURLKeys={{ key: "AIzaSyDBoOMuQsFzQJJ-UAxEItgE3K3-JfH7opA" }}
        ></GoogleMapReact>
      </div>
    </div>
  );
};

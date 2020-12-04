import React from "react";
import GoogleMapReact from "google-map-react";

export const Dashboard = () => {
  return (
    <div>
      <div
        className="overflow-hidden"
        style={{ width: window.innerWidth, height: "95vh" }}
      >
        <GoogleMapReact
          defaultZoom={20}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33,
          }}
          bootstrapURLKeys={{ key: "AIzaSyDBoOMuQsFzQJJ-UAxEItgE3K3-JfH7opA" }}
        >
          <h1>hello</h1>
        </GoogleMapReact>
      </div>
    </div>
  );
};

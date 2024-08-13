import React, { useCallback, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  height: "100vh",
};

const MapsView = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const mapRef = useRef();

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={{ lat: -6.9189553594069455, lng: 107.61826572207039 }} zoom={10} onUnmount={onUnmount}></GoogleMap>
  ) : (
    <div className="h-screen flex justify-center items-center">
      <h1 className="titel2">Loading...</h1>
    </div>
  );
};

export default MapsView;

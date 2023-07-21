import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React from "react";
import logo from "/images/logo_icon.png";

export default function MapGoogle() {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return "";
  return (
    <GoogleMap
      options={{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,

        styles: [
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#eeeeee",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            stylers: [
              {
                saturation: -100,
              },
              {
                invert_lightness: true,
              },
            ],
          },
        ],
      }}
      zoom={16}
      center={{ lat: -8.0924454, lng: -79.047668 }}
      mapContainerStyle={{ width: "100%", height: "100%" }}
    >
      <Marker icon={logo} position={{ lat: -8.092538, lng: -79.047883 }} />
    </GoogleMap>
  );
}

import React, { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";
import { mockInstitutions } from "../configs/Institutions";
import axios from "axios";

const InstitutionMap = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    // Initialize Leaflet map
    const leafletMap = L.map("map").setView([-1.2921, 36.8219], 6);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(leafletMap);

    setMap(leafletMap);

    // Fetch geocoding details for mock institutions using OpenCage API
    const geocodeInstitutions = async () => {
      const geocodedMarkers = await Promise.all(
        mockInstitutions.map(async (institution) => {
          try {
            // Perform geocoding using OpenCage API
            const response = await axios.get(
              "https://api.opencagedata.com/geocode/v1/json",
              {
                params: {
                  key: "92d6c9fe5c024809b6c1c041b6a6af53",
                  q: `${institution.latitude},${institution.longitude}`,
                  no_annotations: 1, // Optional: Exclude annotations
                  language: "en", // Optional: Specify language for results
                  limit: 1, // Optional: Limit number of results
                },
              }
            );

            // Extract formatted address from response
            const address = response.data.results[0].formatted;

            // Create marker
            const marker = L.marker([
              institution.latitude,
              institution.longitude,
            ])
              .bindPopup(`<b>${institution.name}</b><br>${address}`)
              .addTo(leafletMap);

            // Add click event listener to marker
            marker.on("click", () => {
              setSelectedMarker(marker);
            });

            return marker;
          } catch (error) {
            console.error("Error geocoding institution:", error);
            return null;
          }
        })
      );

      setMarkers(geocodedMarkers.filter((marker) => marker !== null));
    };

    geocodeInstitutions();

    return () => {
      leafletMap.remove();
    };
  }, []);

  return <div id="map" style={{ height: "100vh" }} />;
};

export default InstitutionMap;

import React, { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const InstitutionMap = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [nearestInstitution, setNearestInstitution] = useState(null);

  useEffect(() => {
    // Initialize Leaflet map
    const leafletMap = L.map("map").setView([0, 0], 2); // Initial view, can be adjusted

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(leafletMap);

    setMap(leafletMap);

    // Fetch user's location if available
    const fetchUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          leafletMap.setView([latitude, longitude], 10); // Adjust map view to user's location
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    };

    fetchUserLocation();

    return () => {
      // Clean up: Remove map instance and markers
      if (leafletMap) {
        leafletMap.remove();
      }
    };
  }, []);

  // Function to handle course search
  const handleCourseSearch = async () => {
    try {
      // Clear previous markers
      markers.forEach((marker) => map.removeLayer(marker));
      setMarkers([]);

      // Fetch institutions offering the selected course from backend
      const response = await axios.get(
        "http://localhost:3000/api/institutions/search",
        {
          params: {
            courseName: selectedCourse,
            userLat: userLocation.latitude,
            userLng: userLocation.longitude,
          },
        }
      );

      const institutions = response.data.institutions;

      // Calculate distances from user's location (if needed)
      institutions.forEach((institution) => {
        const { latitude, longitude } = institution;
        const distance = calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          latitude,
          longitude
        );
        institution.distance = distance;
      });

      // Set nearest institution
      institutions.sort((a, b) => a.distance - b.distance);
      setNearestInstitution(institutions[0]); // Set nearest institution

      // Display markers for all institutions on the map
      const institutionMarkers = institutions.map((institution) => {
        const marker = L.marker([
          institution.latitude,
          institution.longitude,
        ]).addTo(map);
        marker.bindPopup(
          `<b>${institution.name}</b><br>${
            institution.address
          }<br>Distance: ${institution.distance.toFixed(2)} km`
        );
        return marker;
      });

      setMarkers(institutionMarkers);
    } catch (error) {
      console.error("Error searching for institutions:", error);
    }
  };

  // Function to calculate distance between two points (Haversine formula)
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  return (
    <div>
      <div id="map" style={{ height: "400px" }}></div>
      <div>
        <label htmlFor="course">Search Course:</label>
        <input
          type="text"
          id="course"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        />
        <button
          onClick={handleCourseSearch}
          className="bg-yellow-600 ml-1 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Search
        </button>
      </div>
      {nearestInstitution && (
        <div className="text-white">
          <h2>Nearest Institution Offering {selectedCourse}</h2>
          <p>Name: {nearestInstitution.name}</p>
          <p>Address: {nearestInstitution.address}</p>
          <p>Distance: {nearestInstitution.distance.toFixed(2)} km</p>
        </div>
      )}
    </div>
  );
};

export default InstitutionMap;

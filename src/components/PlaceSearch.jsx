import React, { useState, useRef, useEffect } from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

const PlaceSearch = ({ onAddPlace, initialPlaceId, placeholder }) => {
  const [query, setQuery] = useState("");
  const autocompleteRef = useRef(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (place && place.geometry) {
      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      onAddPlace({
        place_id: place.place_id,
        name: place.name,
        location,
        address: place.formatted_address,
      });
      setQuery(place.formatted_address);
    }
  };

  const fetchPlaceDetails = (placeId) => {
    const service = new window.google.maps.places.PlacesService(document.createElement("div"));
    service.getDetails({ placeId }, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setQuery(place.formatted_address);
      }
    });
  };

  useEffect(() => {
    if (initialPlaceId) {
      fetchPlaceDetails(initialPlaceId);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && autocompleteRef.current) {
      const autocomplete = autocompleteRef.current;
      autocomplete.addListener("place_changed", handlePlaceChanged);

      const observer = new MutationObserver(() => {
        const autocompleteItems = document.querySelectorAll(".pac-item");
        autocompleteItems.forEach((item) => {
          item.classList.add("bg-white", "text-gray-700", "hover:bg-gray-100", "px-4", "py-2.5", "cursor-pointer", "text-body");
        });

        const autocompleteContainer = document.querySelector(".pac-container");
        if (autocompleteContainer) {
          autocompleteContainer.classList.add("bg-white", "border", "border-gray-300", "rounded-xl", "shadow-lg");
        }

        const outerContainer = document.querySelector(".pac-container").parentElement;
        if (outerContainer) {
          outerContainer.classList.add("rounded-xl");
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [isLoaded, query]);

  return isLoaded ? (
    <div className="w-full">
      <Autocomplete onLoad={(ref) => (autocompleteRef.current = ref)} onPlaceChanged={handlePlaceChanged}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="text-[#595959] text-body bg-transparent placeholder:text-body rounded-lg border-none outline-none focus:ring-0 focus:border-none focus:outline-none w-full py-2.5 px-1"
          required
        />
      </Autocomplete>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default PlaceSearch;

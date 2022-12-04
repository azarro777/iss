import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import IMap from "../../utils/interfaces/IMap.interface";
import IMarker from "../../utils/interfaces/IMarker.interface";
import { GoogleLatLng, GoogleMap, GoogleMarker } from "../../utils/types/types";
import "./Map.css";

export const Map: React.FC<IMap> = ({ mapType, mapTypeControl = false }) => {
  const coords = useAppSelector((state) => state.locationSlice.coords);
  console.log(coords.iss_position.longitude); //!

  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<GoogleMap>();
  const [marker, setMarker] = useState<IMarker>();

  console.log("marker", marker); //! marker;

  const startMap = (): void => {
    const defaultAddress = new google.maps.LatLng(
      +coords.iss_position.latitude,
      +coords.iss_position.longitude
    ); //! default coordinats
    if (!map) {
      initMap(4, defaultAddress);
    } else {
      addHomeMarker(defaultAddress);
    }
  };
  useEffect(startMap, [map]);

  const initEventListener = (): void => {
    if (map) {
      google.maps.event.addListener(map, "click", function (e) {
        coordinateToAddress(e.latLng);
      });
    }
  };
  useEffect(initEventListener, [map]);

  const coordinateToAddress = async (coordinate: GoogleLatLng) => {
    const geocoder = new google.maps.Geocoder();
    await geocoder.geocode({ location: coordinate }, function (results, status) {
      if (status === "OK") {
        setMarker({
          address: results[0].formatted_address,
          latitude: coordinate.lat(),
          longitude: coordinate.lng(),
        });
      }
    });
  };

  const addHomeMarker = (location: GoogleLatLng): GoogleMarker => {
    //! home marker
    console.log("location", location); //!

    const homeMarkerConst: GoogleMarker = new google.maps.Marker({
      position: location,
      map: map,
      icon: {
        url: window.location.origin + "/assets/images/homeAddressMarker.png",
      },
    });

    homeMarkerConst.addListener("click", () => {
      map?.panTo(location);
      map?.setZoom(6);
    });

    return homeMarkerConst;
  };

  const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
    if (ref.current) {
      setMap(
        new google.maps.Map(ref.current, {
          zoom: zoomLevel,
          center: address,
          mapTypeControl: mapTypeControl,
          streetViewControl: false,
          rotateControl: false,
          scaleControl: true,
          fullscreenControl: false,
          panControl: false,
          zoomControl: true,
          gestureHandling: "cooperative",
          mapTypeId: mapType,
          draggableCursor: "pointer",
        })
      );
    }
  };

  return (
    <div className='map-container'>
      <div ref={ref} className='map-container__map'></div>
    </div>
  );
};

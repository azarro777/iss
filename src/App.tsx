import React, { useEffect, useState } from "react";
import "./App.css";
import { Crew } from "./components/Crew/Crew";
import { Date } from "./components/Date/Date";
import { Location } from "./components/Location/Location";
import { Map } from "./components/map/Map";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchIissCoords, fetchPeopleInSpace } from "./store/reducer/actionCreators";
import { googleMap } from "./utils/googleMap";

function App() {
  const dispatch = useAppDispatch();
  const coords = useAppSelector(state => state.locationSlice.coords);

  console.log('state', coords); //! state
  

  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [distanceInKm, setDistanceInKm] = useState<number>(-1);

  useEffect(() => {
    setInterval(() => {
      dispatch(fetchIissCoords());
      dispatch(fetchPeopleInSpace());
    }, 5000);
    
    const googleMapScript = googleMap();
    googleMapScript.addEventListener("load", function () {
      setScriptLoaded(true);
    });
  }, []);

  const renderDistanceSentence = () => { //! distance
    return (
      <div className='distance-info'>
        {`Distance between selected marker and home address is ${distanceInKm}km.`}
      </div>
    );
  };

  return (
    <div className='app'>
      <div className='app__map-container'>
        <Location />
        {scriptLoaded && (
          <Map
            mapType={google.maps.MapTypeId.ROADMAP}
            mapTypeControl={true}
            setDistanceInKm={setDistanceInKm}
          />
        )}
        {distanceInKm > -1 && renderDistanceSentence()}
      </div>
      <div className='app__people-container'>
        <Date/>
        <Crew/>
      </div>
    </div>
  );
}

export default App;

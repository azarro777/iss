import React, { useEffect } from "react";
import "./App.css";
import { Crew } from "./components/Crew/Crew";
import { Date } from "./components/Date/Date";
import { Location } from "./components/Location/Location";
import { Map } from "./components/map/Map";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchIissCoords, fetchPeopleInSpace } from "./store/reducer/actionCreators";
import { script } from "./store/reducer/locationReducer";
import { googleMap } from "./utils/googleMap";

function App() {
  const dispatch = useAppDispatch();
  const scriptLoaded = useAppSelector((state) => state.locationSlice.scriptLoaded);

  useEffect(() => {
    setInterval(() => {
      dispatch(fetchIissCoords());
      dispatch(fetchPeopleInSpace());
    }, 5000);

    const googleMapScript = googleMap();
    googleMapScript.addEventListener("load", function () {
      dispatch(script());
    });
  }, []);

  return (
    <div className='app'>
      <div className='app__map-container'>
        <Location />
        {scriptLoaded && <Map mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} />}
      </div>
      <div className='app__people-container'>
        <Date />
        <Crew />
      </div>
    </div>
  );
}

export default App;

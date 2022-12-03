import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import './Location.css';

export const Location = () => {
  const location = useAppSelector(state => state.locationSlice.coords);
  return (
    <div className='location'>
      <h1 className='location__title'>ISS is now located at:</h1>
      <p className='location__coords'>longitude: {location.iss_position.longitude} lattitude: {location.iss_position.latitude}</p>
    </div>
  );
};
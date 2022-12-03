import moment from "moment";
import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import "./Date.css";

export const Date = () => {
  const coords = useAppSelector((state) => state.locationSlice.coords);
  const { timestamp }: { timestamp: number } = coords;
  const time: string = moment.unix(timestamp).format("h:mm");
  const date: string = moment.unix(timestamp).format("dddd, MMM D YYYY");

  return (
    <div className='date'>
      <h1 className='date__current'>Current UTC time: {time}</h1>
      <p className='date__day'>{date}</p>
    </div>
  );
};

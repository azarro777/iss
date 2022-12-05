import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { countPeople } from "../../utils/countPeople";
import "./Crew.css";

export const Crew = () => {
  const people = useAppSelector((state) => state.peopleSlice.people);

  return (
    <div className='crew'>
      {people.map((el, index) => {
        if (el.craft === "ISS") {
          return (
            <div key={index}>
              <p>{el.name}</p>
            </div>
          );
        }
      })}
      <p>Total amount: {countPeople(people)} people on ISS</p>
    </div>
  );
};

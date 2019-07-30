import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

const dummyData  = [
  {
    id: 0,
    city: 'New York, NY',
    restaurantCount: 0,
  },
  {
    id: 1,
    city: 'San Fransico, CA',
    restaurantCount: 0,
  },
  {
    id: 2,
    city: 'Seattle, WA',
    restaurantCount: 0,
  },
];

const Passports = () => {
  const [activePassportId, setactivePassportId] = useState();
  const [passports, setPassports] = useState();

  const retrievePassports = () => {
    (async () => {
      try {
        const repsonse = await axios.get('https://rickandmortyapi.com/api/episode/');

        setPassports(repsonse.data);
      } catch (error) {
        console.error(error);
      }
    })();
  };
  useEffect(retrievePassports, []);

  return (
    <div>
      <h2>Passports</h2>
      <h3>Current: {dummyData.find((passport) => passport.id === activePassportId)}</h3>
      <div className="Passports">
        <div className="add-passport">
          {/* <img src="" alt=""></img> // uncomment once you have an svg for a plus sign */}
          <h3>+</h3>
          <p>Add Passport</p>
        </div>
        {dummyData.map((passport) => {
          return (
            <div className="passport">
              <h3>{passport.city}</h3>
              <p>🧭 {passport.restaurantCount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Passports;

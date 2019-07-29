import { useState, useEffect } from 'react';
import axios from "axios";

const Passports = () => {
  const [passports, setPassports] = useState();

  const retrievePassports = () => {
    (async () => {
      try {
        const repsonse = await axios.get('https://rickandmortyapi.com/api/episode/');

        console.log(repsonse);
        setPassports(repsonse.data);
      } catch (error) {
        console.error(error);
      }
    })();
  };
  useEffect(retrievePassports, []);

  return (
    <div>
      {passports}
    </div>
  );
};

export default Passports;

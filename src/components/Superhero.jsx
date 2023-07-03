import React, { useState, useEffect } from "react";
import axios from "axios";

export const BASE_URL = "http://localhost:4000";
export const Superhero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // try{
    //   const reponse = await axios.get(`${BASE_URL}/superheroes`);
    //   return reponse
    //   setData(reponse)
    //   setIsLoading(flase)
    // }
    // catch (err) {
    //  return err
    // }
    axios
      .get(`${BASE_URL}/superheroes`)
      .then((res) => {
        setData(res.data);
        // console.log(res.data)
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h3>Data is Loading...</h3>;
  }

  if(error) {
    return <h2>{error}</h2>
  } 
  return (
    <div>
      <h2>Super Hero</h2>
      {data.map((hero) => {
        return <div key={hero.id}>{hero.name} </div>;
      })}
    </div>
  );
};

// Traditional Way of Fetching Data

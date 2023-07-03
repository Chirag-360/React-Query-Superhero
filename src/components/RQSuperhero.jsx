import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./Superhero";

const fetchSuperHeroes = () => {
  return axios.get(`${BASE_URL}/superheroes`);
};

export const RQSuperhero = () => {
  const { isLoading, data, isError, error , isFetched , refetch} = useQuery(
    ["superhero"],
    fetchSuperHeroes,
    {
      enabled:true
    }
  );

  // console.log({isFetched})

  if (isLoading ) {
    return <h2>Data Is Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h2>RQSuperhero</h2>
      <button onClick={refetch}>Fetch</button>
      <ul>
        {data?.data.map((hero) => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </div>
  );
};

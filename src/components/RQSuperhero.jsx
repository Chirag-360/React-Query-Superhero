import React from "react";
import { useSuperheroData } from "../hooks/useSuperheroData";
import { Link } from "react-router-dom";

const onSuccess = () => {
  console.log("Performed Side-Effect after data fetching");
};

const onError = () => {
  console.log("Performed Side-Effect after Encountering Error");
};
export const RQSuperhero = () => {
  const { isLoading, data, isError, error, isFetched, refetch } = useSuperheroData(onError, onSuccess) 

  if (isLoading) {
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
          <li key={hero.id}>
          <Link to={`/rqsinglesuperhero/${hero.id}`}>
            {hero.name}
            </Link>
            </li>
        ))}
        {/* {data.map((hero) => (<li key={hero}>{hero}</li>))} */}
      </ul>
    </div>
  );
};

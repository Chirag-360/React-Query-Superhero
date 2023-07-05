import React, { useState } from "react";
import { useAddSuperheroData, useSuperheroData } from "../hooks/useSuperheroData";
import { Link } from "react-router-dom";

const onSuccess = () => {
  console.log("Performed Side-Effect after data fetching");
};

const onError = () => {
  console.log("Performed Side-Effect after Encountering Error");
};
export const RQSuperhero = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const { isLoading, data, isError, error, isFetched, refetch } =
    useSuperheroData(onError, onSuccess);

  const {mutate:addHero} =    useAddSuperheroData()
  
  const submitHanlder = () => {
    if (name !== "" && alterEgo !== "" ) {
        console.log({ name, alterEgo });
        const Hero = {name, alterEgo}
        addHero(Hero)
    } else {
      console.log("fill form");
    }
  };

  if (isLoading) {
    return <h2>Data Is Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h2>RQSuperhero</h2>
      <input
        name="name"
        placeholder="Hero Name"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="alterEgo"
        placeholder="Hero Alter Ego"
        type="text"
        id="alterEgo"
        value={alterEgo}
        onChange={(e) => setAlterEgo(e.target.value)}
      />
      <button type="button" onClick={submitHanlder}>
        Submit
      </button>
      <button onClick={refetch}>Fetch</button>
      <ul>
        {data?.data.map((hero) => (
          <li key={hero.id}>
            <Link to={`/rqsinglesuperhero/${hero.id}`}>{hero.name}</Link>
          </li>
        ))}
        {/* {data.map((hero) => (<li key={hero}>{hero}</li>))} */}
      </ul>
    </div>
  );
};

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchHero = ({queryKey}) => {
    const heroId = queryKey[1]
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const useSuperheroesData = (heroId) => {
  return useQuery(["sueprhero", heroId], fetchHero);
};

export default useSuperheroesData;

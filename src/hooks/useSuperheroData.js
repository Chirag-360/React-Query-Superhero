import React from 'react'
import { useQuery } from '@tanstack/react-query';

import axios from "axios";
import { BASE_URL} from "../components/Superhero"

const fetchSuperHeroes = () => {
  return axios.get(`${BASE_URL}/superheroes`);
};


export const useSuperheroData = (onError , onSuccess) => {

   return   useQuery(
        ["superhero"],
        fetchSuperHeroes,
        {
          enabled: true,
          onError,
          onSuccess,
        //   select:(data) => {
        //     const superhero = data.data.map((hero) => (hero.name))
        //     return superhero
        //   }
        }
      );
}

import React from 'react'
import { useQuery , useMutation } from '@tanstack/react-query';

import axios from "axios";
import { BASE_URL} from "../components/Superhero"

const fetchSuperHeroes = () => {
  return axios.get(`${BASE_URL}/superheroes`);
};


export const useSuperheroData = (onError , onSuccess) => {

   return useQuery(
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

const postSuperhero = (hero) => {
  return axios.post("http://localhost:4000/superheroes",hero)
}
export const useAddSuperheroData = () => {

  return useMutation(postSuperhero)
}

import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../utils/axios-utils"

import axios from "axios";
import { BASE_URL } from "../components/Superhero";

const fetchSuperHeroes = () => {
  // return axios.get(`${BASE_URL}/superheroes`);

  return request({url:"/superheroes"})
};

export const useSuperheroData = (onError, onSuccess) => {
  return useQuery(["superhero"], fetchSuperHeroes, {
    enabled: true,
    onError,
    onSuccess,
    //   select:(data) => {
    //     const superhero = data.data.map((hero) => (hero.name))
    //     return superhero
    //   }
  });
};

const postSuperhero = (hero) => {
  // return axios.post("http://localhost:4000/superheroes", hero);
  return request({method:"post" , url:"/superheroes" , data:hero})
};

export const useAddSuperheroData = () => {
  const queryClint = useQueryClient();
  return useMutation(postSuperhero, {
    onSuccess: (data) => {
      // queryClint.invalidateQueries("superhero");
      queryClint.setQueriesData("superhero", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};

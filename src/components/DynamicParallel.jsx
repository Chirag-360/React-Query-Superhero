// import axios from "axios";
import { useQueries } from "@tanstack/react-query";


// const fetchSuperheroes = (heroId) => {

//     return axios.get(`http://localhost:4000/superheroes/${heroId}`)
// }

//  const DynamicParallel = ({heroId}) => {

//     const queryResults = useQueries(
//         heroId.map((id) => {
//             return {
//                 queryKey: ["super-hero", id],
//                 queryFn: () => fetchSuperheroes(id),
//             }
//         })
//     )
//     console.log({queryResults})
//     return ( 

//         <>
//         <h2>Dynamic Parallel Queries</h2>
//         </>
//     )
//     }

//     export default DynamicParallel

import axios from 'axios'

const fetchSuperHero = heroId => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const DynamicParallelPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map(id => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id)
      }
    })
  )

  console.log({ queryResults })
  return <div>Dynamic Parallel Queries</div>
}
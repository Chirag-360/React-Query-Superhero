import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const fetchSuperheroes = () => {
    return axios.get("http://localhost:4000/superheroes")
}

const fetchFriends = () => {
   return axios.get("http://localhost:4000/friends")
}
const ParallelQueries = () => {

   const {data:superheroes} = useQuery(["superheroes"], fetchSuperheroes)
   const {data:friends} = useQuery(["friends"], fetchFriends)

    return (
        <>
        <h2>Parallel Queries</h2>
        </>
    )
}

export default ParallelQueries;
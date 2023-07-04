import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
const fetchAcoterName = (pageNumber) =>  {

return axios.get(`http://localhost:4000/actorName?_limit=3&_page=${pageNumber}`)

}
export const PaginatedQueries = () => {

    const [pageNumber , setPageNumber] = useState(1)
    const {data , isError , isLoading , error} = useQuery(["fetchActor",pageNumber], () => fetchAcoterName(parseInt(pageNumber)) )



    if(isLoading){
        return <p>...Loading</p>
    }
    if(isError){
        return <p>{error.message}</p>
    }

    console.log(data)
    return (<>
      
      <ul>
        {data?.data.map((data) => (<li key={data.id}>{data.label}</li>))}
      </ul>

      <button onClick={() => (setPageNumber( pageNumber - 1)) } disabled={pageNumber === 1}>Prev Page</button>
      <button onClick={() => (setPageNumber( pageNumber + 1))} disabled={pageNumber === 3}>Next Page</button>
    </>)
}
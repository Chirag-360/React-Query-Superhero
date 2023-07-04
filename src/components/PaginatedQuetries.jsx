import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
const fetchAcoterName = (pageNumber) =>  {

return axios.get(`http://localhost:4000/actorName?_limit=3&_page=${pageNumber}`)

}
export const PaginatedQueries = () => {

    const [pageNumber , setPageNumber] = useState(1)
    const {data , isError , isLoading , error , isFetching} = useQuery(["fetchActor",pageNumber], () => fetchAcoterName(parseInt(pageNumber)), {
        keepPreviousData: true
    } )



    if(isLoading){
        return <p>...Loading</p>
    }
    if(isError){
        return <p>{error.message}</p>
    }

    return (<>
      
      <ul>
        {data?.data.map((data) => (<li key={data.id}>{data.label}</li>))}
      </ul>

{isFetching && <p>...Loading</p>}
      <button onClick={() => (setPageNumber( pageNumber - 1)) } disabled={pageNumber === 1}>Prev Page</button>
      <button onClick={() => (setPageNumber( pageNumber + 1))} disabled={pageNumber === 3}>Next Page</button>
    </>)
}
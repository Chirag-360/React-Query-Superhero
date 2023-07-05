import axios from "axios";
import { useQueries } from "@tanstack/react-query";

const fetchSuperheroes = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallel = ({ heroId }) => {
  const queryResults = useQueries(
    {
      queries: heroId.map((id) => {
        return {
          queryKey: ["super-hero", id],
          queryFn: () => fetchSuperheroes(id),
        };
      }),
    }
    //Below Method don't work now worked on older version of react-query
    // heroId.map((id) => {
    //     return {
    //         queryKey: ["super-hero", id],
    //         queryFn: () => fetchSuperheroes(id),
    //     }
    // })
  );
  console.log({ queryResults });
  return (
    <>
      <h2>Dynamic Parallel Queries</h2>
    </>
  );
};

export default DynamicParallel;

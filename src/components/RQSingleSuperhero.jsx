import { useParams } from "react-router";
import useSuperheroesData from "../hooks/useSuperheroesData";

const RQSingleSuperhero = () => {

    const {heroId} = useParams(); 
const {isLoading , isError , error, data} = useSuperheroesData(heroId)

if(isLoading){
    <h2>Loading...</h2>
}
if(isError){
    <h2>{error?.message}</h2>
}
  return (
    <>
      <h1>Superhero Details</h1>
      {<h2>Name : {data?.data.name} & <br /> AlterEgo : {data?.data.alterEgo}</h2>}
    </>
  );
};


export default RQSingleSuperhero
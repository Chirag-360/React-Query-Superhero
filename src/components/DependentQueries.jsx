import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const fetchActorByEmail = (email) => {
    return axios.get(`http://localhost:4000/actors/${email}`)
}

const fetchSitcomeByShowName = (showname) => {
    return axios.get(`http://localhost:4000/sitcomes/${showname}`)
}
export const DependentQueries = ({email}) => {

   const {data:actor} = useQuery(['actor',email], () => fetchActorByEmail(email))
   const showname = actor?.data?.showname

   const {data:sitcome , isLoading , isError , error} = useQuery(["sitcomes",showname], () => fetchSitcomeByShowName(showname),{
    enabled: !!showname
   })

   if(isLoading) {
    <h3>...Loading</h3>
   }
   if(isError){
    <p>{error.message}</p>
   }
//    console.log(sitcome.data)
  return (
    <>
    <h2>DependentQueries</h2>
    <h3>{sitcome?.data?.id}</h3>
    {sitcome?.data?.episods.map((data) => (<p key={data.id}>{data}</p>))}
    </>
    
  )
}

import React from 'react'
import { useQuery } from 'react-query'
import User from './User'


const Chart = () =>
{
  const fetchUsers = async () =>
  {
    const res = await fetch( 'https://jsonplaceholder.typicode.com/users' );
    return res.json();
  }

  const { isLoading, isError, error, data, isFetching } = useQuery( [ 'user' ], () => fetchUsers(), {
    keepPreviousData: true
  } );

  if( isLoading ) {
    return <h2>Loading</h2>
  }

  if( isError ) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <div>{data.map( user => <User key={user.name} user={user} /> )}</div>
      {isFetching && 'Loading'}
    </>
  )
}

export default Chart
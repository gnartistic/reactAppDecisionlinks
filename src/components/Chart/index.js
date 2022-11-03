import React from 'react'
import { useQuery } from 'react-query'
import User from './User'
import './index.scss'


const Chart = () =>
{
  // async function to fetch user data from API
  const fetchUsers = async () =>
  {
    
    const res = await fetch( 'https://jsonplaceholder.typicode.com/users' );
    // return data in json format
    return res.json();
  }

  // function to process request using react-query
  const { isLoading, isError, error, data, isFetching } = useQuery( [ 'user' ], () => fetchUsers());

  // if data is loading, display 'Loading'
  if( isLoading ) {
    return <h2>Loading</h2>
  }
//  if there's an error, display the error message
  if( isError ) {
    return <h2>{error.message}</h2>
  }
// if success, render component
  return (
    <>
      <div className='table'>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Phone</th>
            <th>City</th>
            <th>Company</th>
          </tr>
          {/* map out array of user data, passing it along to a child component that displays the data for each user. I'm using user.id as the key because it is unique to each user. */}
          {data.map( user => <User key={user.id} user={user} /> )}
        </table>
      </div>
      {/* if fetching, return 'loading' */}
      {isFetching && 'Loading'}
    </>
  )
}

export default Chart
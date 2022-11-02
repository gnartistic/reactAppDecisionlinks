import React from 'react'

const User = ( { user } ) =>
{
    return (
        <tr>
            <th>{user.id}</th>
            <th>{user.name}</th>
            <th><a href={user.website}>website</a></th>
            
        </tr>
    )
}

export default User
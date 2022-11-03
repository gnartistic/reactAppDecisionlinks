import React from 'react'
import './index.scss'

const User = ( { user } ) =>
{
    return (
        <tr>
            {/* user's ID */}
            <td>{user.id}</td>
            {/* user's name */}
            <td>{user.name}</td>
            <td>
                {/* user's email as a link */}
                <a href={`mailto:${ user.email }`}>
                    {user.email}
                </a>
            </td>
            <td>
                {/* user's website as a link */}
                <a href={user.website}>
                    {user.website}
                </a>
            </td>
            <td>
                {/* user's phone number as a link */}
                <a href={`tel:${ user.phone }`}>
                    {user.phone}
                </a>
            </td>
            {/* user's city */}
            <td>{user.address.city}</td>
            {/* user's company */}
            <td>{user.company.name}</td>
            
        </tr>
    )
}

export default User
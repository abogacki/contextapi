import React, { useContext } from 'react'
import {UserContext} from '../contexts/userContext'


// example using useContext hook
const UserName = (props) => {
    const user = useContext(UserContext)
    console.log(user);
    
    return (
        <>
            {user.name} {user.surname}
        </>
    )
}

export default UserName
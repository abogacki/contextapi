import React from 'react'


// data received from API
const userData = {
    name: 'John',
    surname: 'Doe',
    hasAccess: true
}


export const UserContext = React.createContext(userData)



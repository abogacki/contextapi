import React, { useContext, useState, useReducer } from 'react'
import { UserContext } from '../contexts/userContext'
import { Avatar, Typography, Button } from '@material-ui/core';

// class UserContainer extends React.Component {
//     state = {
//         count: 0
//     }

//     constructor(){
//         super()
//         this.onSetCount = this.onSetCount.bind(this)
//     }

//     onSetCount = () => {
//         this.setState(prevState => ({count: prevState.count + 1}))
//     }

//     render() {
        
//         const { avatar, name, surname } = this.context
//         return (<React.Fragment>
//             <Button onClick={this.onSetCount}>
//                 {this.state.count}
//             </Button>
//             <Avatar align="center" alt={name + surname} src={avatar} />
//         </React.Fragment>)
//     }
// }

const UserContainer = props => {
    const { name, surname, avatar } = useContext(UserContext)

    const [count, setCount] = useState(0)


    return (
        <>
        <Typography>
            {count}
        </Typography>
        <Button onClick={() => setCount(count+1)}>
            click
        </Button>
        <Avatar align="center" alt={name + surname} src={avatar} />
        </>
    )
}



// UserContainer.contextType = UserContext

export default UserContainer
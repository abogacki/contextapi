import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles, Avatar } from '@material-ui/core';
import { UserContext } from '../contexts/userContext'


const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing.unit * 6,
        color: theme.palette.primary.contrastText
    },
    avatar: {
        margin: 10,
    }
})

const Footer = ({ classes }) => {
    const { name, surname } = useContext(UserContext)
    return (<footer className={classes.footer} >
        <Typography variant="h6" align="center" color="inherit" gutterBottom>
            Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="inherit" component="p">
            And in footer the user is {`${name} ${surname}`}
        </Typography>
            <Avatar align="center" alt={name + surname} src="https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg" className={classes.avatar} />
        <Typography variant="subtitle2" align="center">
            Created with Material UI
        </Typography>
    </footer>)
}


export default withStyles(styles)(Footer)
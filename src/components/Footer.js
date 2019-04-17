import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles, Avatar, Grid } from '@material-ui/core';
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
    const { name, surname, avatar } = useContext(UserContext)
    return (<footer className={classes.footer} >
        <Typography variant="h6" align="center" color="inherit" gutterBottom>
            Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="inherit" component="p">
            In footer the user is:
        </Typography>
        <Typography variant="headline" color="inherit" align="center">
        {`${name} ${surname}`}
        </Typography>
        <Grid align="center">
            <Avatar align="center" alt={name + surname} src={avatar} className={classes.avatar} />
        </Grid>
    </footer>)
}


export default withStyles(styles)(Footer)
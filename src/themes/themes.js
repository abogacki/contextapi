import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red'
import { yellow } from '@material-ui/core/colors';

export const darkTheme = createMuiTheme({
    palette: {
        primary: { main: green[100] },
        secondary: { main: red[500] },
    },
    typography: { useNextVariants: true },
});

export const lightTheme = createMuiTheme({
    palette: {
        primary: { main: indigo[500] },
        secondary: { main: yellow[300] },
    },
    typography: { useNextVariants: true },
});
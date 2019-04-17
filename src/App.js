import React, { useState } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from './themes/themes'
import NavBar from './components/NavBar'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  const [theme, setTheme] = useState(lightTheme)

  const changeTheme = () => {
    if (theme === darkTheme) {
      setTheme(lightTheme)
    } else if (theme === lightTheme) {
      setTheme(darkTheme)
    }
  }

  return (
    <MuiThemeProvider theme={theme}>
      <NavBar changeTheme={changeTheme} />
      <Content />
      <Footer />
    </MuiThemeProvider>)
}

export default App
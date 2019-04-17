import React, { useState } from 'react'
import {UserContext} from './contexts/userContext'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from './themes/themes'
import NavBar from './components/NavBar'
import Content from './components/Content'
import Footer from './components/Footer'

// data fetched by Api
const user={
  name: 'John',
  surname: 'Doe',
  avatar: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'
}

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
      <UserContext.Provider value={user}>
        <NavBar changeTheme={changeTheme} />
        <Content />
        <Footer />
      </UserContext.Provider>
    </MuiThemeProvider>)
}

export default App
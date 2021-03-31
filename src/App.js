import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Layout from './components/Layout'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#157A6E',
    },
    secondary: {
      main: '#2D3142',
    }
  },
  typography: {
    fontFamily: 'Poppins',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

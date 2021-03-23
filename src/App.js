import Layout from './components/Layout/Layout'
import Sidebar from './components/Sidebar/Sidebar'
import Movies from './page/Movies/Movies'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './sass/reset.scss'
import './sass/global.scss'
import Home from './page/Home/Home'
import PrivateRoute from './components/Route/PrivateRoute/PrivateRoute'


const test = () => {
  return (
    <div>
      
    </div>
  )
}

function App() {
  return (
    <div>
      <Router>
        <Sidebar/>
        <Switch>
          <Layout>
            <Route exact path="/">
              <Home/>
            </Route>
            <PrivateRoute path="/films" component={Movies} />
            <PrivateRoute path="/series" component={test} />
            <PrivateRoute path="/calendrier" component={test} />
            <PrivateRoute path="/profil" component={test} />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

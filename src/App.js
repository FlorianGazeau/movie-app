import Layout from './components/Layout/Layout'
import Sidebar from './components/Sidebar/Sidebar'
import Movies from './page/Movies/Movies'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './sass/reset.scss'
import './sass/global.scss'
import Home from './page/Home/Home'

function App() {
  return (
    <div>
      <Router>
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Layout>
              <Home/>
            </Layout>
          </Route>
          <Route path="/films">
            <Layout>
              <Movies/>
            </Layout>
          </Route>
          <Route path="/series">
            <Layout></Layout>
          </Route>
          <Route path="/calendrier">
            <Layout></Layout>
          </Route>
          <Route path="/profil">
            <Layout></Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

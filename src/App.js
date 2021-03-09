import Layout from './components/Layout/Layout'
import Sidebar from './components/Sidebar/Sidebar'
import Movies from './page/Movies/Movies'
import {BrowserRouter as Router } from 'react-router-dom'

import './sass/reset.scss'
import './sass/global.scss'

function App() {
  return (
    <div>
      <Router>
        <Sidebar/>
        <Layout>
          <Movies/>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

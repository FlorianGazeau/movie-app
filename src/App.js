import Layout from './components/Layout/Layout'
import Sidebar from './components/Sidebar/Sidebar'
import Movies from './page/Movies/Movies'

import './sass/reset.scss'
import './sass/global.scss'

function App() {
  return (
    <div>
      <Sidebar/>
      <Layout>
        <Movies/>
      </Layout>
    </div>
  );
}

export default App;

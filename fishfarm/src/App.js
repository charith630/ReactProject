
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

import Navbar from './components/Navbars/Navbars';
import  RegisterFarm from './components/Farm/Farm';
import RegisterWorker from './components/Worker/RegisterWorker';
import Layout from'./components/Layout/Layout';
function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>
        <div class="row">
          <Routes>
          <Route exact path="/RegisterFarm" element={<RegisterFarm/>}/>
          <Route exact path="/RegisterWorker" element={<RegisterWorker/>}/>
          </Routes>
        </div>


      </div>
    </Router>

  
  );
}

export default App;

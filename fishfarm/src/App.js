
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from './components/Navbars/Navbars';
import RegisterFarm from './components/Farm/RegisterFarm';
import RegisterWorker from './components/Worker/RegisterWorker';
import ViewFarm from './components/Farm/ViewFarm';
import Layout from './components/Layout/Layout';
function App() {
  return (
    <Router>
      <div className="container-fluid">
      <div className="row"></div>
        <div className="row">
          <Navbar />
        </div>
        <div class="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <Routes>
              <Route exact path="/RegisterFarm" element={<RegisterFarm />} />
              <Route exact path="/RegisterWorker" element={<RegisterWorker />} />
              <Route exact path="/ViewFarm" element={<ViewFarm />} />
            </Routes>
          </div>
          <div className="col-sm-2"></div>
        </div>


      </div>
    </Router>


  );
}

export default App;

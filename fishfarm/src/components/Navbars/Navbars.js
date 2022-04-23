function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Fish Farm</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="RegisterFarm">Register Farm </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="RegisterWorker">Register Worker </a>
            </li>
          </ul>
  
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  
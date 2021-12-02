import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {

const {store, actions}= useContext(Context)
  return (

    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">SuperHero Team</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/myTeam">MyTeam</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/"> <button onClick={() => actions.logout()} className="btn btn-warning" >Logout</button></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;

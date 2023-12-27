import { Link } from "react-router-dom"
import { isAuthenticated } from "../services/Auth"
import "./NavBar.css"

export default function NavBar(props){

    return ( 
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">SCREEN PLAY</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            {!isAuthenticated() ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link special" to="/Tamil">Tamil</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link special" to="/English">English</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link special" to="/Marvel">Marvel</Link>
                </li>
                </>
          )}
        </ul>
        {isAuthenticated() && (
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a
                  className="nav-link special"
                  onClick={props.logoutUser}
                  href=" "
                  style={{  color:"red",cursor: "pointer" }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
            )}
        </div>              
      </nav>
    )
}  

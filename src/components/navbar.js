import React ,{Component} from "react";
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";


class  NavBar extends Component {
    
    render() { 
        return ( 
            <React.Fragment>


 

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/posts">Post</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/user">UserPage</Link>
      </li>
     
    </ul>
  </div>
</nav>

</React.Fragment>
         );
    }
}
 
export default NavBar ;

import React from "react"
import '../App'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <h2>React Books App</h2>
      </div>
      <div>
        <Link to="/favorites">
          <h3>Your Favorites</h3>

        </Link>
      </div>
    </div>
  )
}

export default Navbar

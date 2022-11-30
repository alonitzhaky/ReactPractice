import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <Link to="/Calculator">Calculator</Link> |{" "}
        <Link to="/Colorchange">Color Change</Link> |{" "}
        <Link to="/Regtext">Reg Text</Link> |{" "}
        <Link to="/">Main</Link> |{" "}
    </div>
  )
}

export default Navbar;
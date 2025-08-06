import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../Images/access1.webp';
import '../admin/Nav.css'
const Nav = ()=> {
  return (
    <div>
      <div className="dashboard-container" >
      <div className="sidebar">
        <div id="dash">
          <img src={pic} width={100} alt="logo" />
        </div>
        <ul>
          <li>
            <Link to="/bottles">Bottles</Link>
          </li>
          <li>
            <Link to="/pitcher">Pitchers</Link>
          </li>
          <li>
            <Link to="/shops">Shop all</Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Nav

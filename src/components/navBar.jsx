import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'></span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/postdetailapi'>
                Post Api
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/postcommentapi'>
                Comment APi
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

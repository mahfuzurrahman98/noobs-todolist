import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

export default function Navbar() {
  return (
    <nav className="px-lg-5 navbar navbar-expand-lg navbar-light bg-light shadow shadow-lg mb-5">
      <div className="container-fluid">
        <a className="navbar-brand text-success" href="#">
          <span>
            <img src={logo} alt="logo" width="35px" />
          </span>
          <span>
            <b className="ms-2">Todo List</b>
          </span>
        </a>
        <a
          href="#"
          className="d-lg-none"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faTasks} className="fa-2x text-dark" />
        </a>
        <div
          className="ms-auto collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/mytasks">
                My Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/completed">
                Completed
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Sort By
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<a className="dropdown-item" href="#">
										Date Added
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Alphabetically
									</a>
								</li>
								<li></li>
							</ul>
						</li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}


import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div>
      <nav className="navbar navbar-expand-md" id="navbar">
        <a className="navbar-brand" href="#" id="logo">
          <img src="./image/logo.png" alt="" width="50px" />Heaven's Bakery
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span>
            <img src="./image/menu.png" alt="" width="30px" />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="product" className="nav-link">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link to="gallery" className="nav-link">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {isHomePage && (
          <div className="icons">
            <button type="button" className="btn yyy" data-toggle="modal" data-target="#myModal">
              Login
            </button>

            <div className="modal" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header modalLoging">
                    <h4 className="modal-title">
                      <h2>Login</h2>
                    </h4>
                    <button type="button" className="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>

                  <div className="modal-body modalLoging">
                    <div className="container modalLoging">
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="email">Email:</label>
                          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="pwd">Password:</label>
                          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                        </div>
                        <div className="form-group form-check">
                          <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" name="remember" />
                            Remember me
                          </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="modal-footer modalLoging">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

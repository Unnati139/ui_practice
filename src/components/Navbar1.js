import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import SchoolIcon from '@mui/icons-material/School';
 import '../css/Navbar1.css';

const Navbar1 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <SchoolIcon  className='icon1' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , fontSize:40}} />
                    <Link className="navbar-brand" to="/">MUHS</Link>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbar-content">
                        <i className="fas fa-stream text-white"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-content">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside">Multilevel</Link>
                                <ul className="dropdown-menu shadow">
                                    <li><Link className="dropdown-item" to="/">Gallery</Link></li>
                                    <li><Link className="dropdown-item" to="blog.html">Blog</Link></li>
                                    <li className="dropstart">
                                        <a hraf="" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Submenu
                                            Left</a>
                                        <ul className="dropdown-menu shadow">
                                            <li><Link className="dropdown-item" to="/"> Third level 1</Link></li>
                                            <li><Link className="dropdown-item" to="/"> Third level 2</Link></li>
                                            <li><Link className="dropdown-item" to="/"> Third level 3</Link></li>
                                            <li><Link className="dropdown-item" to="/"> Third level 4</Link></li>
                                            <li><Link className="dropdown-item" to="/"> Third level 5</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropend">
                                        <a to="" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside">Submenu Right</a>
                                        <ul className="dropdown-menu shadow">
                                            <li><Link className="dropdown-item" to="/"> Second level 1</Link></li>
                                            <li><Link className="dropdown-item" to="/"> Second level 2</Link></li>
                                            <li><Link className="dropdown-item" to="/"> Second level 3</Link></li>
                                            <li className="dropend">
                                                <a to="" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"
                                                    data-bs-auto-close="outside">Let's go deeper!</a>
                                                <ul className="dropdown-menu dropdown-submenu shadow">
                                                    <li><Link className="dropdown-item" to="/"> Third level 1</Link></li>
                                                    <li><Link className="dropdown-item" to="/"> Third level 2</Link></li>
                                                    <li><Link className="dropdown-item" to="/"> Third level 3</Link></li>
                                                    <li><Link className="dropdown-item" to="/"> Third level 4</Link></li>
                                                    <li className="dropstart">
                                                        <a to="" className="dropdown-item dropdown-toggle"
                                                            data-bs-toggle="dropdown">Still don't have enough? Go much
                                                            deeper!</a>
                                                        <ul className="dropdown-menu dropdown-submenu shadow">
                                                            <li><Link className="dropdown-item" to="/"> Third level 1</Link></li>
                                                            <li><Link className="dropdown-item" to="/"> Third level 2</Link></li>
                                                            <li><Link className="dropdown-item" to="/"> Third level 3</Link></li>
                                                            <li><Link className="dropdown-item" to="/"> Third level 4</Link></li>
                                                            <li><Link className="dropdown-item" to="/"> Third level 5</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link className="dropdown-item" to="/"> Third level 5</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Link</Link>
                            </li>
                            <li className="nav-item dropdown dropdown-mega position-static">
                                <Link className="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside">Megamenu</Link>
                                <div className="dropdown-menu shadow">
                                    <div className="mega-content px-md-4">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                                                    <h5>Service</h5>
                                                    <div className="list-group">
                                                        <Link className="list-group-item" to="/">Accomodations</Link>
                                                        <Link className="list-group-item"  to="/">Terms & Conditions</Link>
                                                        <Link className="list-group-item"  to="/">Privacy</Link>
                                                        <Link className="list-group-item" to="/">Lorum</Link>
                                                        <Link className="list-group-item"  to="/">Lorum</Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                                                    <h5>Service</h5>
                                                    <div className="list-group">
                                                        <Link className="list-group-item" to="/">Accomodations</Link>
                                                        <Link className="list-group-item"  to="/">Terms & Conditions</Link>
                                                        <Link className="list-group-item"  to="/">Privacy</Link>
                                                        <Link className="list-group-item" to="/">Lorum</Link>
                                                        <Link className="list-group-item"  to="/">Lorum</Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                                                    <h5>Service</h5>
                                                    <div className="list-group">
                                                        <Link className="list-group-item" to="/">Accomodations</Link>
                                                        <Link className="list-group-item"  to="/">Terms & Conditions</Link>
                                                        <Link className="list-group-item"  to="/">Privacy</Link>
                                                        <Link className="list-group-item" to="/">Lorum</Link>
                                                        <Link className="list-group-item"  to="/">Lorum</Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                                                    <h5>Service</h5>
                                                    <div className="list-group">
                                                        <Link className="list-group-item" to="/">Accomodations</Link>
                                                        <Link className="list-group-item"  to="/">Terms & Conditions</Link>
                                                        <Link className="list-group-item"  to="/">Privacy</Link>
                                                        <Link className="list-group-item" to="/">Lorum</Link>
                                                        <Link className="list-group-item"  to="/">Lorum</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">Disabled</Link>
                            </li>


                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside">Multilevel</Link>
                                <ul className="dropdown-menu shadow">
                                    <li><Link className="dropdown-item" to="/">Gallery</Link></li>
                                    <li><Link className="dropdown-item" to="blog.html">Blog</Link></li>
                                    <li className="dropstart">
                                        <a hraf="" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Submenu
                                            Left</a>
                                        <ul className="dropdown-menu shadow">
                                            <li><Link className="dropdown-item" to="/"> Third level 1</Link></li>
                                            <li><Link className="dropdown-item" to="/"> Third level 2</Link></li>
                                            <li><Link className="dropdown-item" to="/"> Third level 3</Link></li>
                                            <li><Link className="dropdown-item" to="/"> Third level 4</Link></li>
                                            <li><Link className="dropdown-item" to="/"> Third level 5</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropend">
                                        <a to="" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside">Submenu Right</a>
                                        <ul className="dropdown-menu shadow">
                                            <li><Link className="dropdown-item" to="/"> Second level 1</Link></li>
                                            <li><Link className="dropdown-item" to="/"> Second level 2</Link></li>
                                            <li><Link className="dropdown-item" to="/"> Second level 3</Link></li>
                                           
                                            <li><Link className="dropdown-item" to="/"> Third level 5</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>

                        </ul>
                        {/* <form className="d-flex ms-auto">
                            <div className="input-group">s
                                <input className="form-control border-0 mr-2" type="search" placeholder="Search"
                                    aria-label="Search"/>
                                <button className="btn border-0" type="submit">Search</button>
                            </div>
                        </form> */}
                       <SearchIcon  className='icon1' sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 , fontSize:25}}/>
                        <button className="btn border-0 ml-15" type="submit">Logout</button>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Navbar1

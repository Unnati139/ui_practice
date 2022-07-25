import React from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
import CallIcon from '@mui/icons-material/Call';
import '../css/Topbar.css';
import { Link } from "react-router-dom";
const Topbar1 = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg sticky-top " style={{backgroundColor:"#192f59",height:"3em",color:"#96a2b8"}}>
        <div className="top-bar-left flex">
                <div className="flex"  style={{ paddingTop:"0.5em"}}>
                    <DraftsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 , ml:5, fontSize:20}}/>
                    <div>
                    contact@MUHS.edu 
                    </div>
                </div>
                <div className="flex" style={{marginLeft:"2em" , paddingTop:"0.5em"}}>
                    <CallIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 , fontSize:20}}/>
                    <div>
                    +91-1234-567-892
                    </div>
                </div>
            </div>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav top-bar-right" >
                <Link className="nav-item nav-link" style={{color:"#96a2b8" , marginLeft:"35em"}} to="/"> Alumni</Link>
                <Link className="nav-item nav-link" style={{color:"#96a2b8"}}  to="/"> Calendar</Link>
                <Link className="nav-item nav-link" style={{color:"#96a2b8"}} to="/"> Portal</Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Topbar1
import React, {Fragment} from "react";
import Axios from "axios";
import './userprofiles.css';
import {Link,NavLink} from 'react-router-dom';
// import UserLocation from './'
function UserProfile(props){

     return(
     <Fragment>

                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <video controls src={props.basicdetail.introVideoUrl} style={{height:'199px',width:'315px'}}/>
                           
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                    {props.basicdetail.fullName}
                                    </h5>
                                    <h6>
                                        UI Developer
                                    </h6>
                                    <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="">
                                <Link to="/"  style={{textDecoration:'none'}}>Home</Link>
                                </li>
                                <li className="">
                                <Link to="/location"  style={{textDecoration:'none'}}>Location</Link>
                                </li>
                                <li className="">
                                <Link to="/experience" style={{textDecoration:'none'}} >Experience</Link>
                                </li>
                                <li className="">
                                <Link to="/skills"  style={{textDecoration:'none'}}>Skills</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                 
                </div>
          
   
</Fragment>
     )
}
export default UserProfile;
import React from "react";
import {Link,NavLink} from 'react-router-dom';
function UserExperience(){
return(
  <div className="row">
            <div className="col-md-4"></div>
               <div className="col-md-8">
                   <div className="tab-content profile-tab" id="myTabContent">
              
                          <div className="tab-pane fade show active" style={{marginLeft:'8px',marginTop:'-39px'}}>
    
                               <div className="row" >
                                  <div className="col-md-6">
                                     <label><Link to="/experience/skill"  style={{textDecoration:'none'}}>Skills</Link></label>
                                  </div>
                                  <div className="col-md-6">
                                      <p><Link to="/experience/location"  style={{textDecoration:'none'}}>Experience</Link></p>
                                  </div>
                              </div>
                              
                         </div>
                   </div>
             </div>
  </div>

)
}
export default UserExperience;
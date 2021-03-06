import React from "react";
import {addLocation} from '../../actions/index';
import {connect } from 'react-redux';
function UserLocation(props){
   let date = new Date();
   const userloc1=props.locationList;
    return(
        <div className="row">
                  <div className="col-md-4"></div>
                  {Array.isArray(props.userlocation)&&props.userlocation!=undefined&&  <div className="col-md-8">
                         <div className="tab-content profile-tab" id="myTabContent">
                                 {props.userlocation.map((userloc, i) => {
                                     return(  
                                          <div key={i} className="tab-pane fade show active" style={{marginLeft:'8px',marginTop:'-39px'}} >
                                    
                                                      <div className="row" >
                                                              <div className="col-md-6">
                                                                   <label>Location ID</label>
                                                             </div>
                                                             <div className="col-md-6">
                                                                  <p>{userloc.location.locationId}</p>
                                                             </div>
                                                      </div>
                                                      <div className="row" >
                                                            <div className="col-md-6">
                                                                 <label>Latitude</label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                 <p>{userloc.location.latitude}</p>
                                                            </div>
                                                       </div>
                                                       <div className="row" >
                                                            <div className="col-md-6">
                                                                <label>Location Name</label>
                                                            </div>
                                                           <div className="col-md-6">
                                                                <p>{userloc.location.locationName}</p>
                                                          </div>
                                                      </div>
                                                      <div className="row" >
                                                         <div className="col-md-6">
                                                               <label>Location Regional Name</label>
                                                         </div>
                                                         <div className="col-md-6">
                                                                <p>{userloc.location.locationRegionalName}</p>
                                                         </div>
                                                     </div>
                                                     <div className="row" >
                                                          <div className="col-md-6">
                                                                <label>Location Type</label>
                                                         </div>
                                                         <div className="col-md-6">
                                                              <p>{userloc.location.locationType}</p>
                                                         </div>
                                                    </div>
                                                    <div className="row" >
                                                         <div className="col-md-6">
                                                               <label>Longitude</label>
                                                         </div>
                                                         <div className="col-md-6">
                                                               <p>{userloc.location.longitude}</p>
                                                         </div>
                                                    </div>
                                                    <div className="row" >
                                                         <div className="col-md-6">
                                                              <label>Location Photo Url</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                               <p><img src={userloc.location.locationPhotoUrl} className="img-size" style={{paddingRight:'82px'}} alt=""/></p>
                                                        </div>
                                                   </div>
                                                   <div className="row" >
                                                         <div className="col-md-6">
                                                               <label>Status</label>
                                                         </div>
                                                         <div className="col-md-6">
                                                              <p>{userloc.location.status}</p>
                                                         </div>
                                                   </div>
                                                   <div className="row" >
                                                         <div className="col-md-6">
                                                               <label>CreatedAt</label>
                                                         </div>
                                                         <div className="col-md-6">
                                                               <p>{date.getUTCDate(userloc.createdAt)}<span>/{date.getUTCMonth(userloc.createdAt)}</span><span>/{date.getFullYear(userloc.createdAt)}</span></p>
                                                         </div>
                                                   </div><br/><br/>
                                       </div>
                              )})}
                        </div>
               </div>}
       </div>
    
    )
}
const mapUserLoctoProps=state=>{
      return {
            locationList:state.locationList
      }
}
const userloc = connect(mapUserLoctoProps,{
      addLocation
})(UserLocation);
export default userloc;
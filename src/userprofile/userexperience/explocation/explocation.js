import React from "react";
function Explocation(props){
    return(
        <div className="row">
                  <div className="col-md-4"></div>
                  {props.location!=undefined&&  <div className="col-md-8">
                         <div className="tab-content profile-tab" id="myTabContent">
                                 {props.location.map((userlocation, i) => {
                                     return(  
                                <div key={i} className="tab-pane fade show active" style={{marginLeft:'8px',marginTop:'-39px'}}>
                                    <div className="row" >
                                        <div className="col-md-6">
                                           <label>ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userlocation.id}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>Employer Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userlocation.employerName}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>Designation</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userlocation.designation}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>Start Month</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userlocation.startMonth}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>End Month</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userlocation.endMonth}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>Experience In Month</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userlocation.experienceInMonth}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>Location Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userlocation.location.locationId}</p>
                                        </div>
                                     </div>
                                    <div className="row" >
                                        <div className="col-md-6">
                                           <label>Latitude</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userlocation.location.latitude}</p>
                                        </div>
                                     </div>
                                    <div className="row" >
                                        <div className="col-md-6">
                                           <label>locationName</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userlocation.location.locationName}</p>
                                        </div>
                                     </div>
                                    <div className="row" >
                                        <div className="col-md-6">
                                           <label>locationRegionalName</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userlocation.location.locationRegionalName}</p>
                                        </div>
                                     </div>
                                    <div className="row" >
                                        <div className="col-md-6">
                                           <label>Location Type</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userlocation.location.locationType}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>Longitude</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userlocation.location.longitude}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                         <div className="col-md-6">
                                           <label>Location Photo Url</label>
                                         </div>
                                         <div className="col-md-6">
                                            <p><img style={{paddingRight:'82px'}} src={userlocation.location.locationPhotoUrl} className="img-size" alt=""/></p>
                                         </div>
                                    </div>
                                    <div className="row" >
                                        <div className="col-md-6">
                                           <label>status</label>
                                        </div>
                                        <div className="col-md-6">
                                           <p>{userlocation.location.status}</p>
                                        </div>
                                     </div>
                                   
                              </div>
                               
                    )})}</div>
                   </div>}
       </div>
    
    )
}
export default Explocation;
import React from "react";
function Home(props){
return(
  <div className="row">
            <div className="col-md-4"></div>
               <div className="col-md-8">
                   <div className="tab-content profile-tab" id="myTabContent">
              
                          <div className="tab-pane fade show active" style={{marginLeft:'8px',marginTop:'-39px'}}>
    
                               <div className="row" >
                                  <div className="col-md-6">
                                     <label>Candidate Id</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p>{props.userdata.candidateId}</p>
                                  </div>
                              </div>
                              <div className="row" >
                                  <div className="col-md-6">
                                     <label>Aadhar Number</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p>{props.userdata.aadharNumber}</p>
                                  </div>
                              </div>
                              <div className="row" >
                                  <div className="col-md-6">
                                     <label>Referral Code</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p>{props.userdata.referralCode}</p>
                                  </div>
                              </div>
                              <div className="row" >
                                  <div className="col-md-6">
                                     <label>Date Of Birth</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p>{props.userdata.dateOfBirth}</p>
                                  </div>
                              </div>
                              <div className="row" >
                                  <div className="col-md-6">
                                     <label>Mobile Number</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p>{props.userdata.mobileNumber}</p>
                                  </div>
                              </div>
                              <div className="row" >
                                  <div className="col-md-6">
                                     <label>Gender</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p>{props.userdata.gender}</p>
                                  </div>
                              </div>
                              <div className="row" >
                                  <div className="col-md-6">
                                     <label>PhotoS3Url</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p><img src={props.userdata.photoS3Url} className="img-size" alt=""/></p>
                                  </div>
                              </div>
                              <div className="row" >
                                  <div className="col-md-6">
                                     <label>AadharS3Url</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p><img src={props.userdata.aadharS3Url} className="img-size" alt=""/></p>
                                  </div>
                              </div>
                              <div className="row" >
                                  <div className="col-md-6">
                                     <label>AadharS3BackUrl</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p><img src={props.userdata.aadharS3BackUrl} className="img-size" alt=""/></p>
                                  </div>
                              </div>
                              <div className="row" >
                                  <div className="col-md-6">
                                     <label>Experience in Months</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p>{props.userdata.experienceInMonths}</p>
                                  </div>
                              </div>
                         </div>
                   </div>
             </div>
  </div>

)
}
export default Home;
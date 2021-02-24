import React from "react";
function UserSkills(props){
    return(
        <div className="row">
                  <div className="col-md-4"></div>
                  {props.userskill!=undefined&&  <div className="col-md-8">
                         <div className="tab-content profile-tab" id="myTabContent">
                                 {props.userskill.map((skills, i) => {
                                     return(  
                                <div key={i}  className="tab-pane fade show active" style={{marginLeft:'8px',marginTop:'-39px'}}>
                                    <div className="row" >
                                        <div className="col-md-6">
                                           <label>Created At</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.createdAt}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>Status</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.status}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>Skill Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.skill.skillId}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>skillDescRegional</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.skill.skillDescRegional}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>skillLongDesc</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.skill.skillLongDesc}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>Skill Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.skill.skillName}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>Skill Name Regional</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.skill.skillNameRegional}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                         <div className="col-md-6">
                                           <label>Skill Photo Url</label>
                                         </div>
                                         <div className="col-md-6">
                                            <p><img src={skills.skill.skillPhotoUrl} className="img-size" alt=""/></p>
                                         </div>
                                    </div>
                                    <div className="row" >
                                        <div className="col-md-6">
                                           <label>Skill Short Desc</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.skill.skillShortDesc}</p>
                                        </div>
                                     </div>
                                    <div className="row" >
                                        <div className="col-md-6">
                                           <label>Status</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.skill.status}</p>
                                        </div>
                                     </div>
                                    <div className="row" >
                                        <div className="col-md-6">
                                           <label>Skill Type</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.skill.skillType}</p>
                                        </div>
                                     </div><br/><br/>
                                     
                                   </div>
                    )})}</div>
                   </div>}
       </div>
    
    )
}
export default UserSkills;
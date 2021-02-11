import React from "react";
function Expskill(props){
    return(
        <div className="row">
                  <div className="col-md-4"></div>
                  {props.userskills!=undefined&&  <div className="col-md-8">
                         <div className="tab-content profile-tab" id="myTabContent">
                                 {props.userskills.map((skills, i) => {
                                     return(  
                                <div key={i}  className="tab-pane fade show active" style={{marginLeft:'8px',marginTop:'-39px'}}>
                                    <div className="row" >
                                        <div className="col-md-6">
                                           <label>ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.id}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>Employer Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.employerName}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>Designation</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.designation}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>Start Month</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.startMonth}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>End Month</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.endMonth}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>Experience In Month</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.experienceInMonth}</p>
                                        </div>
                                     </div>
                                     <div className="row" >
                                        <div className="col-md-6">
                                           <label>Skill ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{skills.skill.skillId}</p>
                                        </div>
                                     </div>
                                    <div className="row" >
                                        <div className="col-md-6">
                                           <label>SkillDescRegional</label>
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
                                           <p>{skills.skill.skillShortDesc} </p>
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
                                      </div>
                                </div>
                               
                    )})}</div>
                   </div>}
       </div>
    
    )
}
export default Expskill;
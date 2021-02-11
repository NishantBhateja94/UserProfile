import './App.css';
import React, { Component } from 'react'
import Axios from "axios";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import UserProfile from '../src/userprofile/userprofile'
import UserSkills from './userprofile/userskills/userskills'
import Home from './userprofile/home';
import UserExperience from './userprofile/userexperience/userexperience';
import UserLocation from './userprofile/userlocation/userlocation';
import Expskill from './userprofile/userexperience/expskills/expskills';
import Explocation from './userprofile/userexperience/explocation/explocation';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userProfile:{}
   }
  }
  getUserData(){
  let url='http://pandora.unihyr.com/pandora-service/v1/candidate/0f8f0fe1-84ae-43ee-b8d2-1f68af34b614';
    Axios.get(url,{
        headers:{
           'Authorization': '0NLxYYQIUJ6TNXrG7hQN',
           'Content-Type': 'application/json',
           'language':'hi'
        }
    }).then((resp)=>{
    this.setState({
     userProfile:resp.data
    })
    })
}
componentDidMount(){
  this.getUserData();
}
  render(){ 
    const userData=this.state.userProfile;
  return (
<Router>
 <div className="container emp-profile">
     <form method="post">
             <UserProfile basicdetail={userData}></UserProfile>
            <Switch>
              <Route path="/"  exact render={()=><Home userdata={userData}/>}/>
              <Route path="/location"  exact render={()=><UserLocation userlocation={userData.candidateLocations}/>}/>
              <Route path="/experience" exact render={()=><UserExperience userexp={userData.candidateExperience}/>}/>
              <Route path="/skills" exact render={()=><UserSkills userskill={userData.candidateSkills}/>}/>
              { <Switch>
              <Route path="/experience/skill" exact render={()=><Expskill userskills={userData.candidateExperience}/>}/>
              <Route path="/experience/location" exact render={()=><Explocation location={userData.candidateExperience}/>}/>
              </Switch> }
            </Switch> 
      </form>           
  </div>
</Router>
  );
}

}


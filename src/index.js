import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider,connect} from 'react-redux';
import {store} from '../src/store/constants/reducers/calreducer' 
import {addHome,addLocation,addSkills} from '../src/actions/index'
const mapIndexStateToProps=state=>{
  return{
    homeList:state.homeList,
    locationList:state.locationList,
    skillList:state.skillList
  }
}
// const mapDispatchToProps=dispatch=>{
//   return{
//     addHome:article=>dispatch(addHome(article)),
//     addLocation:article=>dispatch(addLocation(article)),
//     addSkills:article=>dispatch(addSkills(article))
//   }
// }
const Appfinal = connect(mapIndexStateToProps)(App);
ReactDOM.render(
 <Provider store={store}>
    <Appfinal />
  </Provider>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

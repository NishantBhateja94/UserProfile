import {createStore} from "redux";
import {ADD_HOME,ADD_LOCATION,ADD_SKILLS } from '../action-types';
const initialState={
homeList:{},
locationList:{},
skillList:{}
}
export const reducer = (state=initialState,action)=>{
    console.log("Calling call reducers");
    switch (action.type) {
        case ADD_HOME:
            return{
                ...state,
                homeList:action.payload.homeList
            }
        case ADD_LOCATION:
            return{
                  ...state,
                  locationList:action.payload.locationList
                }
        case ADD_SKILLS:
            return{
                  ...state,
                  addSkills:action.payload.addSkills
                }
        default:
            return state;
    }
}
export const store = createStore(reducer);

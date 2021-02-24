import {ADD_HOME,ADD_LOCATION,ADD_SKILLS} from '../store/constants/action-types';

export const addHome=payload=>({
    type:ADD_HOME,
    payload
});

export const addLocation =payload=>({
    type:ADD_LOCATION,
    payload
})

export const addSkills=payload=>({
    type:ADD_SKILLS,
    payload
})
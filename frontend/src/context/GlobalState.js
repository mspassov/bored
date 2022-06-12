import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//Initial State
const initialState = {
    savedActivities: [],
    completedActivities: []
}

//Create the context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    async function acceptActivity(activity, token){
        const ACCEPT_URL = "/api/savedActivities";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.post(ACCEPT_URL, activity, config);

        dispatch({
            type: 'ACCEPT_ACTIVITY',
            payload: activity
        })
    }

    async function getSavedActivities(token){
        const GET_SAVED_URL = '/api/savedActivities';
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.get(GET_SAVED_URL, config);

        dispatch({
            type: 'GET_SAVED',
            payload: response.data
        })
    }

    async function getCompletedActivities(token){
        const GET_COMPLETED_URL = '/api/completedActivities';
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.get(GET_COMPLETED_URL, config);

        dispatch({
            type: 'GET_COMPLETED',
            payload: response.data
        })

    }

    async function deleteActivity(key, token){
        const DELETE_URL = `/api/savedActivities/${key}`;
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.delete(DELETE_URL, config);

        dispatch({
            type: 'DELETE_ACTIVITY',
            payload: key
        })
    }

    async function addCompletedActivity(activity, token){
        const COMPLETED_URL = '/api/completedActivities';
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.post(COMPLETED_URL, activity, config);

        dispatch({
            type: 'ADD_COMPLETED',
            payload: activity
        })
    }


    return(
        <GlobalContext.Provider value={{
            savedActivities: state.savedActivities,
            completedActivities: state.completedActivities,
            getSavedActivities,
            getCompletedActivities,
            acceptActivity,
            deleteActivity,
            addCompletedActivity,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
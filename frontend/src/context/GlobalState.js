import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Get the user from local storage
const loggedUser = localStorage.getItem('loggedUser');

//Initial State
const initialState = {
    user: loggedUser ? loggedUser : null,
    message: null,
    savedActivities: [],
    completedActivities: []
}

//Create the context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function acceptActivity(activity){
        dispatch({
            type: 'ACCEPT_ACTIVITY',
            payload: activity
        })
    }

    function skipActivity(key){
        dispatch({
            type: 'SKIP_ACTIVITY',
            payload: key
        })
    }

    function addCompletedActivity(activity){
        dispatch({
            type: 'ADD_COMPLETED',
            payload: activity
        })
    }

    function registerUser(userData){
        dispatch({
            type: 'REGISTER_USER',
            payload: userData
        })
    }

    function resetMessage(){
        dispatch({
            type: 'RESET_MESSAGE',
            payload: ''
        })
    }


    return(
        <GlobalContext.Provider value={{
            savedActivities: state.savedActivities,
            completedActivities: state.completedActivities,
            message: state.message,
            acceptActivity,
            skipActivity,
            addCompletedActivity,
            registerUser,
            resetMessage
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
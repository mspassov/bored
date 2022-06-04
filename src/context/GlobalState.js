import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

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

    return(
        <GlobalContext.Provider value={{
            savedActivities: state.savedActivities,
            completedActivities: state.completedActivities,
            acceptActivity,
            skipActivity,
            addCompletedActivity
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
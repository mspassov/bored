import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    savedActivities: []
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

    return(
        <GlobalContext.Provider value={{
            savedActivities: state.savedActivities,
            acceptActivity
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
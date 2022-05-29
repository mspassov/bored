import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    savedActivities: [
        {"activity":"Write a short story","type":"recreational","participants":1,"price":0,"link":"","key":"6301585","accessibility":0.1},
        {"activity":"Start a band","type":"music","participants":4,"price":0.3,"link":"","key":"5675880","accessibility":0.8},
        {"activity":"Volunteer and help out at a senior center","type":"charity","participants":1,"price":0,"link":"","key":"3920096","accessibility":0.1}
    ]
}

//Create the context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <GlobalContext.Provider value={{
            savedActivities: state.savedActivities
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
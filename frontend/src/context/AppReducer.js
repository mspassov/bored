export default(state, action) =>{
    switch(action.type){
        case 'GET_SAVED':
            return {
                ...state,
                savedActivities: action.payload
            }
        case 'GET_COMPLETED':
            return{
                ...state,
                completedActivities: action.payload
            }
        case 'ACCEPT_ACTIVITY':
            return{
                ...state,
                savedActivities: [action.payload, ...state.savedActivities]
            }
        case 'DELETE_ACTIVITY':
            return{
                ...state,
                savedActivities: state.savedActivities.filter(act => act.key !== action.payload)
            }
        case 'ADD_COMPLETED':
            return{
                ...state,
                savedActivities: state.savedActivities.filter(act => act.key !== action.payload.key),
                completedActivities: [...state.completedActivities, action.payload]
            }

        default:
            return state;
    }
}
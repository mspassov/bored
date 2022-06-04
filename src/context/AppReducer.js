export default(state, action) =>{
    switch(action.type){
        case 'ACCEPT_ACTIVITY':
            return{
                ...state,
                savedActivities: [...state.savedActivities, action.payload]
            }
        case 'SKIP_ACTIVITY':
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
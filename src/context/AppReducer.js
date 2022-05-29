export default(state, action) =>{
    switch(action.type){
        case 'ACCEPT_ACTIVITY':
            return{
                ...state,
                savedActivities: [...state.savedActivities, action.payload]
            }
        default:
            return state;
    }
}
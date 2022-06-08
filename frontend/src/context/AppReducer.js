import axios from "axios";

//API URLs to connect to backend
const REGISTER_URL = '/api/registerUser';

const registerUser = async (userData) =>{
    try {
        const response = await axios.post(REGISTER_URL, userData);
        console.log('some response', response);
        if(response.data.token){
            localStorage.setItem('loggedUser', JSON.stringify(response.data));
            return response.data;
        }
        else{
            //problem with registering the user
            return null;
        }
    } catch (error) {
            return null;
    }
}


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
        case 'REGISTER_USER':
            const res = registerUser(action.payload);
            if (res){
                console.log(res);
                return{
                    ...state,
                    user: res,
                    message: 'success'
                }
            }
            else{
                return{
                    ...state,
                    user: null,
                    message: 'reject'
                }
            }
        case 'RESET_MESSAGE':
            return{
                ...state,
                message: null
            }

        default:
            return state;
    }
}
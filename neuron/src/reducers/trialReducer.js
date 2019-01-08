import{ 
    GET_TRIALS,
    TRIALS_LOADING
} from '../actions/types';


const initialState = {
    trials: [],
    loading: false
};

export default function(state = initialState,action){
    switch(action.type){
        case GET_TRIALS:
        return {
            ...state,
            trials: action.payload,
            loading: false
        };
        case TRIALS_LOADING:
        return{
            ...state,
            loading:true 
        };
        default:
        return state;
    }
}
import {FETCH_LANG} from '../actions'; 

export default function(state=[],action){
    switch(action.type){
        case FETCH_LANG:
            return action.payload;
        default:
            return state;    
    }
}
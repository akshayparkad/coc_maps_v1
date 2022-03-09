import { BASE_LIST_REQUEST, BASE_LIST_SUCCESS, BASE_LIST_FAIL } from "../constants/baseConstants"


export const BaseListReducer = (state = {bases:[]}, action) =>{
    switch(action.type){
        case BASE_LIST_REQUEST:
            return {loading:true, bases:[]}

        case BASE_LIST_SUCCESS:
            return {loading:false, bases: action.payload}
            
        case BASE_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state
    }
}

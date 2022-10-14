import { SINGLE_GET_FAILURE, SINGLE_GET_REQUEST, SINGLE_GET_SUCCESS } from "./actionType"

const initState = {
    isLoading:false,
    isError:false,
    data:[]
}
export const singleProductReducer = (state=initState,action)=>{
    switch(action.type){
        case SINGLE_GET_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false,
                data : []
            }
        case SINGLE_GET_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
                data: action.payload
            }  
        case SINGLE_GET_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true,
                data : []
            }      
        default:
            return state    
    }
}
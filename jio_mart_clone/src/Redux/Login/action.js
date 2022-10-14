import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes"


 const LoginSuccess = () =>{
    return {
        type: LOGIN_SUCCESS
    }
}
 const LoginFailure = () =>{
    return {
        type: LOGIN_FAILURE
    }
}

export const Login = (url) =>async (dispatch)=>{

}
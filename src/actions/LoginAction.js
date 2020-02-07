import {
    LOGIN_FETCHING,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    GET_TOKEN,
    LOGOUT,
    server
} from "../constants";
import { httpClient } from "./../utils/HttpClient";


export const setFetching = () => ({ type: LOGIN_FETCHING });
export const setSuccess = payload => ({ type: LOGIN_SUCCESS, payload });
export const setFailed = payload => ({ type: LOGIN_FAILED, payload });
export const setLogout = () => ({ type: LOGOUT });

export const setToken = payload => ({ type: GET_TOKEN, payload });


/**
 * 
 * @param {*} value 
 * @param {*} history 
 */
export const login = (value, history) => {
    return async dispatch => {
        try {
            dispatch(setFetching()); // fetching
            let result = await httpClient.post(server.LOGIN_URL, value);
            if (result.data.status === 'ok') {
                let {data} = result.data;
                localStorage.setItem(server.TOKEN_KEY, data.token);
                dispatch(setSuccess(result.data)); 

                history.push("/dashboard");
            } else {
                //console.info(result.data)
                dispatch(setFailed(result.data.message));
            }
        } catch (error) {
            //console.log(error);
            dispatch(setFailed(error.message));
        }
    };
};

/**
 * 
 * @param {*} history 
 */
export const logout = (history) => {
    return (dispatch) => {
        localStorage.removeItem(server.TOKEN_KEY);
        dispatch(setLogout())
        history.push("/login");
    }
}


export const getToken = (history) => {
    console.log('get token')
    return (dispatch) => {
        let token = localStorage.getItem(server.TOKEN_KEY);
        dispatch(setToken(token));
    }
}




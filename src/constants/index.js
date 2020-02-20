// Login Page
export const LOGIN_FETCHING = 'LOGIN_FETCHING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE = 'Cannot connect to server, Please try again.'; 
export const NETWORK_TIMEOUT_MESSAGE = 'A network timeout has occurred, Please try again.';  
export const UPLOAD_PHOTO_FAIL_MESSAGE = 'An error has occurred. The photo was unable to upload.';
export const NOT_CONNECT_NETWORK = 'NOT_CONNECT_NETWORK' 

//GET_TOKEN
export const GET_TOKEN = "GET_TOKEN";
export const apiUrl =  "http://localhost:3004";
export const server = {
    TOKEN_KEY : `token`,
    LOGIN_URL:`/user`
}
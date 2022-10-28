import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
} from '../constants/userConstants'

//login
export const login = (email,password) => async (dispatch) => {

    try {
        dispatch({ type:LOGIN_REQUEST });

        const config = {headers:{"Content-Type" : "application/json"}}
        const {data} = await axios.post(
            `/api/login`,
            {email,password},
            config
        );

        dispatch({ type:LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type:LOGIN_FAIL , payload:error.response.data.message });
    }

};

//register
export const Register = (userData) => async (dispatch) => {

    try {
        console.log(userData)
        const {email,password,name}= userData
        dispatch({ type:REGISTER_USER_REQUEST });

        const config = {headers:{"Content-Type" : "application/json"}}
        const {data} = await axios.post(
            `/api/register`,
            {name,email,password},
            config
        );
        console.log(data)

        dispatch({ type : REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: REGISTER_USER_FAIL , payload:error.response.data.message });
    }

};

//loadUser
export const loadUser = () => async (dispatch) => {

    try {
        dispatch({ type:LOAD_USER_REQUEST });

        const {data} = await axios.get(`/api/me`,);

        dispatch({ type:LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type:LOAD_USER_FAIL , payload:error.response.data.message });
    }

};


//clear error
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  
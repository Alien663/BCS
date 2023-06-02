import action from '../Lib/createAction'

export const GET_ISLOGIN = "GET_ISLOGIN"
export const GetIsLogin = () => action(GET_ISLOGIN)

export const SET_ISLOGIN = "SET_ISLOGIN"
export const SetIsLogin = ( data ) => action(SET_ISLOGIN, { data })
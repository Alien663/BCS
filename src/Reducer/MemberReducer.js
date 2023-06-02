import { GET_ISLOGIN, SET_ISLOGIN } from '../Action'

const initialState = {
    isLogin: false
}

const MemberReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ISLOGIN:
            return {
                ...state,
                isLogin: action.data,
            }
        default:
            return {...state}
    }
}

export default MemberReducer
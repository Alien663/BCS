import { call, put } from 'redux-saga/effects'
import * as actoins from '../Action'

const is_login = () => {
    return true
}

export function* isLogin(){
    result = yield call(is_login)
    yield put(actoins.SetIsLogin(result))
}
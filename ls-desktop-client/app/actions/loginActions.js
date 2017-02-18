import LsApi from '../api/api'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const SET_LOGIN_INFO = 'SET_LOGIN_INFO'
export function requestLogin(username, password){
  return {
    type: REQUEST_LOGIN,
    payload: LsApi.login(username, password)
  }
}

import LsApi from '../api/api'

export const LOAD_TYPES = 'LOAD_TYPES'
export const LOAD_TYPES_FULFILLED = 'LOAD_TYPES_FULFILLED'
export const LOAD_TYPES_REJECTED = 'LOAD_TYPES_REJECTED'

function loadTypesAction(username) {
  return {
    type: LOAD_TYPES,
    payload: LsApi.getAllTypes(username)
  }
}
export function loadTypes() {
  return (dispatch, getState) =>{
    dispatch(loadTypesAction(getState().session.user.username))
  }
}

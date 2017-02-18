import LsApi from '../api/api'

export const LOAD_TYPES = 'LOAD_TYPES'
export const TYPE_SELECTED = 'TYPE_SELECTED'


function loadTypesAction(username) {
  return {
    type: LOAD_TYPES,
    payload: LsApi.getAllTypes(username)
  }
}
export function loadTypes() {
  return (dispatch, getState) =>{
    dispatch(loadTypesAction(getState().session.user.username)) //TODO Use Selector
  }
}

export function typeSelected(typeIndex) {
  return {
    type: TYPE_SELECTED,
    payload: typeIndex
  }
}

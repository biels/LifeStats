import typesActions from '../api/catApi'

import LsApi from '../api/api'

export function loadTypes() {
  return function (dispatch) { //Called by redux-thunk
    return LsApi.getAllTypes().then(types => dispatch(loadTypesSuccess(types))).catch(e => dispatch(loadTypesError(e)));
  }

}
export function loadTypesSuccess(types){
  return {type: 'LOAD_TYPES_SUCCESS', payload: types}
}
export function loadTypesError(error){
  return {type: 'LOAD_TYPES_ERROR', payload: error}
}

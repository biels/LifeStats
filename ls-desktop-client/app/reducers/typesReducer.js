import * as actions from '../actions/typesActions'

export default function typesReducer(state = {}, action = {}) {
  switch (action.type){
    case actions.LOAD_TYPES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

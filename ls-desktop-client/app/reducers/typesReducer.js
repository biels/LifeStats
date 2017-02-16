import * as actions from '../actions/typesActions'

export default function typesReducer(state = [], action = {}) {
  switch (action.type){
    case actions.LOAD_TYPES_SUCCESS:
      let types = [{id:0, name: "Reducer1"}, {id: 1, name: "Reducer2"}];
      //return types
      return action.payload._embedded.timeTypes.map(r => ({id: r.name, name: r.name}))


    default:
      return state;
  }
}

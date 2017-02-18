import * as status from '../actions/status'
import * as actions from '../actions/typesActions'

const initialState = {
  valid: true,
  fetching: false,
  selectedIndex,
  types: []
};

export default function typesReducer(state = initialState, action = {}) {
  switch (action.type){
    case actions.LOAD_TYPES + status.PENDING:
      return Object.assign({}, state, {fetching: true, valid: false});

    case actions.LOAD_TYPES + status.FULFILLED:
      //let types = [{id:0, name: "Reducer1"}, {id: 1, name: "Reducer2"}];
      //return types
      const types = action.payload.entity._embedded.timeTypes.map(r => ({id: r.name, name: r.name}));
      return Object.assign({}, state, {fetching: false, valid: true, types});

    case actions.LOAD_TYPES + status.REJECTED:
      console.log("Rejected!")
      return Object.assign({}, state, {fetching: false, valid: false});

    case actions.TYPE_SELECTED:
      return Object.assign({}, state, {selectedIndex: action.payload})

    default:
      return state;
  }
}

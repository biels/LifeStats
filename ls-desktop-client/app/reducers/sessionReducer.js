import * as actions from '../actions/loginActions'
import * as status from '../actions/status'
const initialState = {
  loggedIn: false,
  apiMessage: "No message",
  loginInProgress: false
  //user
}
export default function sessionReducer(state = initialState, action) {
  switch (action.type){

    case actions.REQUEST_LOGIN + status.PENDING:
      return Object.assign({}, state, {loginInProgress: true})

    case actions.REQUEST_LOGIN + status.REJECTED:
      return Object.assign({}, state, {loginInProgress: false})
      return state;

    case actions.REQUEST_LOGIN + status.FULFILLED:
      const response = action.payload.entity;
      const success = response.success;
      var user = Object.assign({}, state.user, {name: response.user.name, username: response.user.username})
      //console.log("success: " + success + ", message: " + response.message + ", user: " + user.name)
      return Object.assign({}, state, {loggedIn: success, loginInProgress: false, apiMessage: response.message, user});

    default:
      return state;
  }
}
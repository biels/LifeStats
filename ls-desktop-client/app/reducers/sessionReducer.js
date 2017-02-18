import * as actions from '../actions/loginActions'
import * as status from '../actions/status'
const initialState = {
  loggedIn: false,
  apiMessage: "No message",
  loginInProgress: false,
  user: {
    name: "biel",
    password: "1234"
  }
}
export default function sessionReducer(state = initialState, action) {
  switch (action.type){
    case actions.REQUEST_LOGIN + status.PENDING:
      return Object.assign({}, state, {loginInProgress: true})
    case actions.REQUEST_LOGIN + status.FULFILLED:
      const response = action.payload.entity;
      const success = response.success;
      var user = {}
      if(success){
        //user.name = "Default"
      }
      console.log("success: " + success + ", message: " + response.message)
      return Object.assign({}, state, {loggedIn: success, loginInProgress: false, apiMessage: response.message});
    default:
      return state;
  }
}

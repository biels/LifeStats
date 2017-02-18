import * as actions from '../actions/loginActions'
import * as status from '../actions/status'
const initialState = {
  loggedIn: false,
  apiMessage: "No message",
  loginInProgress: false,
  user: {
    name: "-",
    username: "-",
    password: ""
  }
}
export default function sessionReducer(state = initialState, action) {
  switch (action.type){
    case actions.SET_LOGIN_INFO:
      var user = {name: action.payload.name, password: action.payload.password};
      console.log(user);
      const newState = Object.assign({}, state);
      newState.user.username = action.payload.username;
      newState.user.password = action.payload.password;
      return newState;
    case actions.REQUEST_LOGIN + status.PENDING:
      return Object.assign({}, state, {loginInProgress: true})

    case actions.REQUEST_LOGIN + status.FULFILLED:
      const response = action.payload.entity;
      const success = response.success;
      var user = Object.assign({}, state.user, {name: response.fullName})
      console.log("success: " + success + ", message: " + response.message + ", user: " + user.name)
      return Object.assign({}, state, {loggedIn: success, loginInProgress: false, apiMessage: response.message, user});



    default:
      return state;
  }
}

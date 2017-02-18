const client = require('./client/client')

const apiUrl = 'http://localhost:5000';

class LsApi{
  static login(username, password){
    return client({method: 'POST', path: apiUrl + '/login', entity: {username, password}, headers: {'Content-Type': 'application/json'}})
  }
  static getAllTypesOld(){
    return fetch('http://localhost:5000/timeTypes').then(response => {
      return response.json();
    }).catch(e => {
      return e;
    });
  }
  static getAllTypes(){
    return client({method: 'GET', path: apiUrl + '/timeTypes'})
  }
}
export default LsApi;


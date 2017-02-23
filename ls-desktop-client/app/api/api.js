const client = require('./client/client')

const apiUrl = 'http://localhost:5001';

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
  static getAllTypes(username){
    return client({method: 'GET', path: apiUrl + '/timeTypes/search/findByUser_Username?username=' + username})
  }
}
export default LsApi;


class LsApi{
  static getAllTypes(){
    return fetch('http://localhost:5000/types').then(response => {
      return response.json();
    }).catch(e => {
      return e;
    });
  }
}
export default LsApi;


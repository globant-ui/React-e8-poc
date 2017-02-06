import _users from 'json!./users.json'
const TIMEOUT = 100

export default {
  getUsers : ()=>{
      return _users;
  }
}
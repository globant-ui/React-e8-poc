import _multijson from 'json!./multigroup.json'
const TIMEOUT = 100

export default {
  getMultiJson : ()=>{
      console.log("json is ::", _multijson);
      return _multijson;
  }
}
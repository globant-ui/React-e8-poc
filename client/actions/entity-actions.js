import axios from 'axios';
import store from '../store';

export function fetchEntityData(p_callback){
    axios.get('https://api.myjson.com/bins/xc7yp')
    .then(p_callback)
    .catch(function (error) {
      console.log(error);
    });
}
export function fetchEntityDataWithParams(obj){
    store.dispatch({
        type: "FETCH_ENTITY_DATA",
        payload: axios.get("https://api.myjson.com/bins/xc7yp?scoreStartLimit="+obj.scoreStartLimit+"&scoreEndLimit="+obj.scoreEndLimit+"&selectParams="+obj.selectParams)
    });
}
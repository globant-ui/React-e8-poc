import axios from 'axios';
import store from '../store';

export function fetchEntityData(){
    store.dispatch({
        type: "FETCH_ENTITY_DATA",
        payload: axios.get("https://api.myjson.com/bins/xc7yp")
    });
}
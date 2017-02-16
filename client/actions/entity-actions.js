import axios from 'axios';
import store from '../store';

export function fetchEntityData(p_callback){
    axios.get('https://api.myjson.com/bins/xc7yp')
    .then(p_callback)
    .catch(function (error) {
      console.log(error);
    });
}
export function fetchEntityDataWithParams(p_callback,obj){
    axios.get('https://api.myjson.com/bins/xc7yp?riskStartLimit='+obj.sliderCurrentValue[0]+'&riskEndLimit='+obj.sliderCurrentValue[1]+'&filterList='+obj.filterList+'&behavior='+obj.behavior+'&startDate='+obj.startDate+'&endDate='+obj.endDate)
    .then(p_callback)
    .catch(function (error) {
      console.log(error);
    });
}
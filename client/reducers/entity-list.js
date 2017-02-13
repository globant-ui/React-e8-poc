import CustomType from '../js/components/table-component/custom-type';
import CustomEntity from '../js/components/table-component/custom-entity';

const storeInitial = {
    title:"Entity Results",
    columnDetail: [{"title":"Entities","isRequired":true,"customComponent":CustomEntity,"sortType":"custom_content","defaultSort":"asc","sortField":"entityTitle"},{"title":"Behavior","isRequired":true,"sortType":"content","defaultSort":"asc"},{"title":"Type","isRequired":true,"customComponent":CustomType},{"title":"Score","isRequired":true,"sortType":"date","defaultSort":"asc"}],
    tableContent: [
                
    ]
}
export const entityList = (state = storeInitial, action) => {
    
    switch(action.type){
        case "FETCH_ENTITY_DATA_FULFILLED":
   
            var tableArr = [];

            for(let i = 0; i < action.payload.data.length ; i++){
                for(let j=0; j < action.payload.data[i].options.length; j++){
                    tableArr.push(action.payload.data[i].options[j]);
                }
            }
            return Object.assign({},state,{"tableContent":tableArr});
        break;
       
    }
    return state;
}
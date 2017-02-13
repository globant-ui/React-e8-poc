import CustomType from '../js/components/table-component/custom-type';
import CustomEntity from '../js/components/table-component/custom-entity';

const storeInitial = {
    title:"Entity Results",
    currentRowID: "row_0",
    columnDetail: [{"title":"Entities","isRequired":true,"customComponent":CustomEntity,"sortType":"custom_content","defaultSort":"asc","sortField":"entityTitle"},{"title":"Behavior","isRequired":true,"sortType":"content","defaultSort":"asc"},{"title":"Type","isRequired":true,"customComponent":CustomType},{"title":"Score","isRequired":true,"sortType":"date","defaultSort":"asc"}],
    tableContent: [
                
    ]
}
export const entityList = (state = storeInitial, action) => {
    
    switch(action.type){
        case "FETCH_ENTITY_DATA_FULFILLED":
   
            var tableArr = [];
            var currentRowID = "";
            for(let i = 0; i < action.payload.data.length ; i++){
                for(let j=0; j < action.payload.data[i].options.length; j++){
                    tableArr.push(action.payload.data[i].options[j]);
                    if(i == 0 && j == 0){
                        currentRowID = "row_"+action.payload.data[i].options[j].Entities.entityType + "_" + action.payload.data[i].options[j].Entities.entityTitle;
                    }
                }
            }
            return Object.assign({},state,{"tableContent":tableArr},{"currentRowID":currentRowID});
        break;

        case "UPDATE_ENTITY_LIST_SEQUENCE":
           return Object.assign({},state,{"tableContent":action.payload});         
        break;

        case "UPDATE_CURRENT_ROW":
           return Object.assign({},state,{"currentRowID":action.payload});         
        break;
       
    }
    return state;
}
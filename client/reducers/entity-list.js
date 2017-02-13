import CustomType from '../js/components/table-component/custom-type';
import CustomEntity from '../js/components/table-component/custom-entity';

const storeInitial = {
    title:"Entity Results",
    columnDetail: [{"title":"Entities","isRequired":true,"customComponent":CustomEntity,"sortType":"custom_content","defaultSort":"asc","sortField":"entityTitle"},{"title":"Behavior","isRequired":true,"sortType":"content","defaultSort":"asc"},{"title":"Type","isRequired":true,"customComponent":CustomType},{"title":"Score","isRequired":true,"sortType":"date","defaultSort":"asc"}],
    tableContent: [
                {"Entities":{"entityType":"system","entityTitle":"system@authority","displayMode":"2x"},"Behavior":"System Activity","Type":{},"Score":"10"},
                {"Entities":{"entityType":"system","entityTitle":"system1@authority","displayMode":"2x"},"Behavior":"System Activity1","Type":{},"Score":"7"},
                {"Entities":{"entityType":"user","entityTitle":"user@authority","displayMode":"2x"},"Behavior":"User Activity","Type":{},"Score":"9"},
                {"Entities":{"entityType":"system","entityTitle":"mysystem@authority","displayMode":"2x"},"Behavior":"my system Activity","Type":{},"Score":"8.4"},
                {"Entities":{"entityType":"user","entityTitle":"bankim@authority","displayMode":"2x"},"Behavior":"bankim Activity","Type":{},"Score":"6"},
                {"Entities":{"entityType":"system","entityTitle":"autosystem@authority","displayMode":"2x"},"Behavior":"auto system Activity","Type":{},"Score":"7.8"},
                {"Entities":{"entityType":"user","entityTitle":"globant@authority","displayMode":"2x"},"Behavior":"globant Activity","Type":{},"Score":"6.5"},
                {"Entities":{"entityType":"user","entityTitle":"user2@authority","displayMode":"2x"},"Behavior":"User2 Activity","Type":{},"Score":"7.2"}
    ]
}
export const entityList = (state = storeInitial, action) => {
    
    switch(action.type){
        case "FETCH_USER_PENDING":
            return Object.assign({},state,{"featching":true});
        break;
        case "FETCH_USER_FULFILLED":
            return Object.assign({},state,{"featching":false, "fetched":true, "users":action.payload.data});
        break;
        case "FETCH_USER_REJECTED":
            return Object.assign({},state,{"featching":false, "error":action.payload});
        break;
    }
    return state;
}
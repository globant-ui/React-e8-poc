
const storeInitial = {
    currentRowID: "row_0"
}
export const entityList = (state = storeInitial, action) => {
    
    switch(action.type){

        case "UPDATE_CURRENT_ROW_ID":
            return Object.assign({},state,{"currentRowID":action.currentRowID});
        break;
       
    }
    return state;
}
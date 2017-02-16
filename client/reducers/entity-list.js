
const storeInitial = {
    currentRowID: "row_0",
    sliderCurrentValue: [0,5],
    filterList: '',
    behavior: 'All',
    startDate:'',
    endDate:''
}
export const entityList = (state = storeInitial, action) => {
    
    switch(action.type){

        case "UPDATE_CURRENT_ROW_ID":
            return Object.assign({},state,{"currentRowID":action.currentRowID});
        break;

        case "UPDATE_SLIDER_CURRENT_VALUE":
            return Object.assign({},state,{"sliderCurrentValue":action.currentValue});
        break;

        case "UPDATE_FILTER_LIST":
            return Object.assign({},state,{"filterList":action.filterList});
        break;

        case "UPDATE_BEHAVIOR":
            return Object.assign({},state,{"behavior":action.behavior});
        break;

        case "UPDATE_DATE_RANGE":
            return Object.assign({},state,{"startDate":action.date.startDate},{"endDate":action.date.endDate});
        break;
       
    }
    return state;
}
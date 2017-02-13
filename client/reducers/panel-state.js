import  React from 'react';

const storeInitial = {
    "graphPanelState": "close",
    "propertyPanelState": "close",
    "detailPanelState": "close"
}
export const panelState = (state = storeInitial, action) => {
    
    switch(action.type){
        case "UPDATE_GRAPH_PANEL_STATE":
            if(state.graphPanelState === "close"){
                return Object.assign({},state,{"graphPanelState":"open"});
            }
            else {
                return Object.assign({},state,{"graphPanelState":"close"});
            }
        break;
        case "UPDATE_PROPERTY_PANEL_STATE":
            if(state.propertyPanelState === "close"){
                return Object.assign({},state,{"propertyPanelState":"open"});
            }
            else {
                return Object.assign({},state,{"propertyPanelState":"close"});
            }
        break;
        case "UPDATE_DETAIL_PANEL_STATE":
           if(state.detailPanelState === "close"){
                return Object.assign({},state,{"detailPanelState":"open"});
            }
            else {
                return Object.assign({},state,{"detailPanelState":"close"});
            }
        break;
    }
    return state;
}
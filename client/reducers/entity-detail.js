import  React from 'react';
import CustomTabHeader from '../js/components/tab-component/custom-tab-header';
const storeInitial = {
    "behaviorDetail": {
          "id": "behaviourTabComponent",
          "defaultActiveKey": "first",
          "tabArea": 12, //Value between 1 to 12 as Bootstrap devide screen in 12 column.
          "tabHeader": [
            {
              "title": <CustomTabHeader iconData={"green"} title="Anomalous User Activity"/>,
              "eventKey": "first",
              "subHeaderContent": "NA"
            },
            {
              "title": <CustomTabHeader iconData={"blue"} title="Privileged Access Anomally"/>,
              "eventKey": "second",
              "subHeaderContent": "NA"
            },
          ],
          "tabContainer": [
            {
             "eventKey": "first",
             "tabContent": "TabContent 1" 
            },
            {
             "eventKey": "second",
             "tabContent": "TabContent 2" 
            }
          ]
      }
}
export const entityDetail = (state = storeInitial, action) => {
    
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
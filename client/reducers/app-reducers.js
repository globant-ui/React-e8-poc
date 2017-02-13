import { combineReducers } from 'redux'; 
import {entityList} from './entity-list';
import {entityDetail} from './entity-detail';
import {panelState} from './panel-state';

export const AppReducers = combineReducers({
   entity: entityList,
   entityDetail: entityDetail,
   panelState: panelState,
})
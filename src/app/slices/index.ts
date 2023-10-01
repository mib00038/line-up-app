import { combineReducers } from 'redux';
import {baseApi} from '../services/baseApi';
import basket from './basketSlice';

const rootReducer = combineReducers({
  basket: basket.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

export default rootReducer
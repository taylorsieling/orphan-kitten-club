// code for combining reducers
import { combineReducers, CombineReducers } from 'Redux';
import kittenReducer from './kittenReducer'

const rootReducer = combineReducers({
    kittenReducer
})

export default rootReducer
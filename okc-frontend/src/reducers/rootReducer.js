// code for combining reducers
import { combineReducers } from 'redux';
import kittenReducer from './kittenReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    kittenReducer,
    userReducer
})

export default rootReducer
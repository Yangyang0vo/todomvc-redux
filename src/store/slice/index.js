import { combineReducers } from 'redux'
import filter from './filterSlice'
import todos from './todosSlice'
export default combineReducers({ filter, todos })

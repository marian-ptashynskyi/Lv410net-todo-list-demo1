import { combineReducers } from 'redux'
import todoItems from './todoItemsReducer'
import visibilityFilter from './visibilityFilterReducer'

export default combineReducers({
    todoItems,
    visibilityFilter, 
})
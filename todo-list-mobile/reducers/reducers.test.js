import todoItemsReducer from './todoItemsReducer'
import visibilityFilterReducer from './visibilityFilterReducer'
import {
    TODO_OPERATIONS,
    VISIBILITY_FILTERS,
    SET_VISIBILITY_FILTER,
    FETCH_FILTERS
} from '../actions/actionTypes'

describe('>>>R E D U C E R --- Test reducers', () => {
    it('+++ reducer for ADD_TODO', () => {
        let state = { todos: [] }
        state = todoItemsReducer(state, { type: TODO_OPERATIONS.ADD_TODO, todo: { id: '5', text: 'todo', completed: false } })
        expect(state).toEqual({ todos: [{ id: '5', text: 'todo', completed: false }] })
    });
    it('+++ reducer for TOGGLE_TODO', () => {
        let state = { todos: [{ id: '0', text: 'first', completed: false }] }
        state = todoItemsReducer(state, { type: TODO_OPERATIONS.TOGGLE_TODO, id: '0' })
        expect(state).toEqual({ todos: [{ id: '0', text: 'first', completed: true }] })
    });
    it('+++ reducer for REMOVE_TODO', () => {
        let state = { todos: [{ id: '0', text: 'first', completed: false }, { id: '1', text: 'second', completed: true }] }
        state = todoItemsReducer(state, { type: TODO_OPERATIONS.REMOVE_TODO, id: '0' })
        expect(state).toEqual({ todos: [{ id: '1', text: 'second', completed: true }] })
    });
    it('+++ reducer for SET_VISIBILITY_FILTER', () => {
        let state = { visibilityFilter: VISIBILITY_FILTERS.SHOW_ALL }
        state = visibilityFilterReducer(state, { type: SET_VISIBILITY_FILTER, filter: VISIBILITY_FILTERS.SHOW_completed })
        expect(state).toEqual('SHOW_completed')
    });
    it('+++ reducer for FETCH_TODOS_REQUEST', () => {
        let state = { isLoading: false, isError: false }
        state = todoItemsReducer(state, { type: FETCH_FILTERS.FETCH_TODOS_REQUEST, isLoading: true })
        expect(state).toEqual({ isLoading: true, isError: false })
    });
    it('+++ reducer for FETCH_TODOS_FAIL', () => {
        let state = { isLoading: false, isError: false }
        state = todoItemsReducer(state, { type: FETCH_FILTERS.FETCH_TODOS_FAIL, isError: true })
        expect(state).toEqual({ isLoading: false, isError: true })
    });
    it('+++ reducer for FETCH_TODOS_SUCCESS', () => {
        let state = { todos: [] }
        state = todoItemsReducer(state, {
            type: FETCH_FILTERS.FETCH_TODOS_SUCCESS,
            todos: [{ id: 0, text: 'first', completed: true }, { id: 0, text: 'first', completed: true }]
        })
        expect(state).toEqual({ todos: [{ id: 0, text: 'first', completed: true }, { id: 0, text: 'first', completed: true }] })
    });
});

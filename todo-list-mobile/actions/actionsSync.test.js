import {
    TODO_OPERATIONS,
    SET_VISIBILITY_FILTER,
    FETCH_FILTERS,
    VISIBILITY_FILTERS
} from './actionTypes'
import {
    addTodo,
    removeTodo,
    toggleTodo,
    setVisibilityFilter,
    fetchTodosRequest,
    fetchTodosFail,
    fetchTodosSuccess
} from './index'

describe('>>>A C T I O N --- Test synchronous action creators', () => {
    it('+++ actionCreator addTodo', () => {
        const add = addTodo({Id: 1, text: 'Hello', completed: false})
        expect(add).toEqual({ type: TODO_OPERATIONS.ADD_TODO, todo: {Id: 1, text: 'Hello', completed: false} })
    });
    it('+++ actionCreator toggleTodo', () => {
        const toggle = toggleTodo(1)
        expect(toggle).toEqual({ type: TODO_OPERATIONS.TOGGLE_TODO, id: 1 })
    });
    it('+++ actionCreator removeTodo', () => {
        const remove = removeTodo(0)
        expect(remove).toEqual({ type: TODO_OPERATIONS.REMOVE_TODO, id: 0 })
    });
    it('+++ actionCreator setVisibilityFilter', () => {
        const setFilter = setVisibilityFilter(VISIBILITY_FILTERS.SHOW_COMPLETED)
        expect(setFilter).toEqual({ type: SET_VISIBILITY_FILTER, filter: VISIBILITY_FILTERS.SHOW_COMPLETED })
    });
    it('+++ actionCreator fetchTodosRequest', () => {
        const fetchRequest = fetchTodosRequest(true)
        expect(fetchRequest).toEqual({ type: FETCH_FILTERS.FETCH_TODOS_REQUEST, isLoading: true })
    });
    it('+++ actionCreator fetchTodosFail', () => {
        const fetchFail = fetchTodosFail(false)
        expect(fetchFail).toEqual({ type: FETCH_FILTERS.FETCH_TODOS_FAIL, isError: false })
    });
    it('+++ actionCreator fetchTodosSuccess', () => {
        const fetchSuccess = fetchTodosSuccess([1, 2, 3])
        expect(fetchSuccess).toEqual({ type: FETCH_FILTERS.FETCH_TODOS_SUCCESS, todos: [1, 2, 3] })
    });
});

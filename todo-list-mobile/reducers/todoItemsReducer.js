import { TODO_OPERATIONS, FETCH_FILTERS } from '../actions/actionTypes'

const initialState = {
    isError: false,
    isLoading: false,
    todos: []
}

const todoItems = (state = initialState, action) => {
    switch (action.type) {
        case TODO_OPERATIONS.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case TODO_OPERATIONS.TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)
            }
        case TODO_OPERATIONS.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case FETCH_FILTERS.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.todos
            }
        case FETCH_FILTERS.FETCH_TODOS_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case FETCH_FILTERS.FETCH_TODOS_FAIL:
            return {
                ...state,
                isError: action.isError
            }
        default:
            return state
    }
}

export default todoItems
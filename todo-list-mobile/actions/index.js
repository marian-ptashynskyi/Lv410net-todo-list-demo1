import {
    TODO_OPERATIONS,
    SET_VISIBILITY_FILTER,
    FETCH_FILTERS
} from './actionTypes'

export const addTodo = (newTodo) => ({
    type: TODO_OPERATIONS.ADD_TODO,
    todo: newTodo
})

export const toggleTodo = (id) => ({
    type: TODO_OPERATIONS.TOGGLE_TODO,
    id
})

export const removeTodo = (id) => ({
    type: TODO_OPERATIONS.REMOVE_TODO,
    id
})

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
})

export const fetchTodosRequest = (bool) => ({
    type: FETCH_FILTERS.FETCH_TODOS_REQUEST,
    isLoading: bool
})

export const fetchTodosFail = (bool) => ({
    type: FETCH_FILTERS.FETCH_TODOS_FAIL,
    isError: bool
})

export const fetchTodosSuccess = (todos) => ({
    type: FETCH_FILTERS.FETCH_TODOS_SUCCESS,
    todos
})

export function fetchGetData(url) {
    return (dispatch) => {
        dispatch(fetchTodosRequest(true));
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                dispatch(fetchTodosRequest(false));
                return response.json()
            })
            .then(todos => dispatch(fetchTodosSuccess(todos)))
            .catch(error => { console.log(error); dispatch(fetchTodosFail(true)) });
    }
}

export function fetchAddData(url, todo) {
    return (dispatch) => {
        let todoJson = JSON.stringify({text: todo});
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
            },
            body: todoJson
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(response => dispatch(addTodo(response)))
            .catch(error => { console.log(error); dispatch(fetchTodosFail(true)) });
    }
}

export function fetchUpdateData(url, item) {
    return (dispatch) => {
        let itemJson = JSON.stringify({ ...item, completed: !item.completed });
        return fetch(`${url}/${item.id}`, { 
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: itemJson
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(() => dispatch(toggleTodo(item.id)))
            .catch(error => { console.log(error); dispatch(fetchTodosFail(true)) });
    }
}

export function fetchDeleteData(url, id) {
    return (dispatch) => {
        return fetch(`${url}/${id}`, { method: 'DELETE' })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(() => dispatch(removeTodo(id)))
            .catch(error => { console.log(error); dispatch(fetchTodosFail(true)) });
    }
}

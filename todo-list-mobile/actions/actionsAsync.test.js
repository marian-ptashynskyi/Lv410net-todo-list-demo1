import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import BASE_URL from '../baseURL'
import { FETCH_FILTERS, TODO_OPERATIONS } from './actionTypes'
import * as ActionCreators from './index'
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('>>>A C T I O N --- Test asynchronous action creators', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('+++ actionCreator fetchGetData creates FETCH_TODOS_SUCCESS when fetching get StatusCode200', () => {
    fetchMock.once(BASE_URL, {
      headers: { 'content-type': 'application/json' },
      body: [1, 2, 3],
    })
    const expectedActions = [
      {
        type: FETCH_FILTERS.FETCH_TODOS_REQUEST,
        isLoading: true
      },
      {
        type: FETCH_FILTERS.FETCH_TODOS_REQUEST,
        isLoading: false
      },
      {
        type: FETCH_FILTERS.FETCH_TODOS_SUCCESS,
        todos: [1, 2, 3]
      },
    ]
    const store = mockStore({})
    return store.dispatch(ActionCreators.fetchGetData(BASE_URL)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('+++ actionCreator fetchGetData creates FETCH_TODOS_FAIL when fetching get StatusCode400', () => {
    fetchMock.once(BASE_URL, 400)
    const expectedActions = [
      {
        type: FETCH_FILTERS.FETCH_TODOS_REQUEST,
        isLoading: true
      },
      {
        type: FETCH_FILTERS.FETCH_TODOS_FAIL,
        isError: true
      },
    ]
    const store = mockStore({})
    return store.dispatch(ActionCreators.fetchGetData(BASE_URL)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('+++ actionCreator fetchAddData creates ADD_TODO when fetching get StatusCode200', () => {
    fetchMock.postOnce(BASE_URL, {
      headers: { 'content-type': 'application/json' },
      body: { id: 0, text: "text", completed: false },
    })
    const expectedActions = [
      {
        type: TODO_OPERATIONS.ADD_TODO,
        todo: { id: 0, text: "text", completed: false }
      },
    ]
    const store = mockStore({})
    return store.dispatch(ActionCreators.fetchAddData(BASE_URL)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('+++ actionCreator fetchAddData creates FETCH_TODOS_FAIL when fetching get StatusCode400', () => {
    fetchMock.once(BASE_URL, 400)
    const expectedActions = [
      {
        type: FETCH_FILTERS.FETCH_TODOS_FAIL,
        isError: true
      },
    ]
    const store = mockStore({})
    return store.dispatch(ActionCreators.fetchAddData(BASE_URL)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('+++ actionCreator fetchUpdateData creates TOGGLE_TODO when fetching get StatusCode204', () => {
    fetchMock.putOnce(`${BASE_URL}/5`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {}
    })
    const expectedActions = [
      {
        type: TODO_OPERATIONS.TOGGLE_TODO,
        id: 5
      },
    ]
    const store = mockStore({})
    return store.dispatch(ActionCreators.fetchUpdateData(BASE_URL, {id: 5})).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('+++ actionCreator fetchUpdateData creates FETCH_TODOS_FAIL when fetching get StatusCode400', () => {
    fetchMock.putOnce(`${BASE_URL}/5`, 400)
    const expectedActions = [
      {
        type: FETCH_FILTERS.FETCH_TODOS_FAIL,
        isError: true
      },
    ]
    const store = mockStore({})
    return store.dispatch(ActionCreators.fetchUpdateData(BASE_URL, { id:5 })).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('+++ actionCreator fetchDeleteData creates REMOVE_TODO when fetching get StatusCode204', () => {
    fetchMock.deleteOnce(`${BASE_URL}/5`, 204)
    const expectedActions = [
      {
        type: TODO_OPERATIONS.REMOVE_TODO,
        id: 5
      },
    ]
    const store = mockStore({})
    return store.dispatch(ActionCreators.fetchDeleteData(BASE_URL, 5)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('+++ actionCreator fetchDeleteData creates FETCH_TODOS_FAIL when fetching get StatusCode400', () => {
    fetchMock.deleteOnce(`${BASE_URL}/5`, 404)
    const expectedActions = [
      {
        type: FETCH_FILTERS.FETCH_TODOS_FAIL,
        isError: true
      },
    ]
    const store = mockStore({})
    return store.dispatch(ActionCreators.fetchDeleteData(BASE_URL, 5)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
})

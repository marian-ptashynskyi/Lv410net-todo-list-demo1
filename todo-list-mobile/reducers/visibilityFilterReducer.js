import { SET_VISIBILITY_FILTER, VISIBILITY_FILTERS } from '../actions/actionTypes'

initialState = {
  visibilityFilter: VISIBILITY_FILTERS.SHOW_ALL
}

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
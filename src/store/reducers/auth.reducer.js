import { LOG_IN, LOG_OUT } from '../actions.const'

const initialState = {
  isAuthenticated: false,
  auth: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOG_IN:
    return {
      isAuthenticated: true,
      auth: action.payload
    }
  case LOG_OUT:
    return initialState
  default:
    return state
  }
}

export default authReducer
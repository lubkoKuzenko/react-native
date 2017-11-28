import { LOG_IN } from '../actions.const'

export const logIn = (auth) => dispatch => {
  dispatch({ type: LOG_IN, payload: auth })
}
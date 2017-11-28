import { combineReducers } from 'redux'
import data from './reducers/LibraryList'

// import selectedItemReducer from './reducers/selectedItem.reducer'
import authReducer from './reducers/auth.reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  // libraries: () => data,
  // selectedItem: selectedItemReducer
  auth: authReducer,
  form: formReducer
})

export default rootReducer
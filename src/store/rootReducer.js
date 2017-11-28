import { combineReducers } from 'redux'
import data from './reducers/LibraryList'
// import selectedItemReducer from './reducers/selectedItem.reducer'

import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  // libraries: () => data,
  // selectedItem: selectedItemReducer
  form: formReducer
})

export default rootReducer
import { combineReducers } from 'redux'
import data from './reducers/LibraryList'
import selectedItemReducer from './reducers/selectedItem.reducer'

const rootReducer = combineReducers({
  libraries: () => data,
  selectedItem: selectedItemReducer
})

export default rootReducer